import os
import subprocess
import shutil

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_VIDEO = os.path.join(BASE_DIR, "YTB_1790689971532.mp4")
WORK_DIR = os.path.join(BASE_DIR, "ai_upscale_work")
FRAMES_DIR = os.path.join(WORK_DIR, "frames")
UPSCALED_DIR = os.path.join(WORK_DIR, "upscaled")
REALESRGAN_EXE = os.path.join(BASE_DIR, "realesrgan", "realesrgan-ncnn-vulkan.exe")

os.makedirs(FRAMES_DIR, exist_ok=True)
os.makedirs(UPSCALED_DIR, exist_ok=True)

# Define the exact 4 chunks we need to extract to save time
# (start_time, duration) in seconds
# Logo: 06.8 to 10.1 (3.3s)
# Founders Wide: 03.2 to 04.85 (1.65s) -> slowmo to 3.3s
# Founders Cameo: 18.64 to 19.74 (1.1s) -> slowmo to 2.2s
# Architecture: 20.84 to 27.04 (6.2s)
CHUNKS = [
    ("part1", 6.8, 3.3),
    ("part2", 3.2, 1.65),
    ("part3a", 18.64, 1.1),
    ("part3b", 20.84, 6.2)
]

# 1. Extract frames
print("Extracting frames...")
for name, ss, t in CHUNKS:
    chunk_dir = os.path.join(FRAMES_DIR, name)
    os.makedirs(chunk_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-ss", str(ss), "-i", SRC_VIDEO, "-t", str(t),
        "-q:v", "2", f"{chunk_dir}/%04d.jpg", "-y"
    ], check=True)

# 2. Upscale frames with Real-ESRGAN (4x upscale to 2560x1440)
print("Upscaling frames with Real-ESRGAN...")
for name, _, _ in CHUNKS:
    chunk_in = os.path.join(FRAMES_DIR, name)
    chunk_out = os.path.join(UPSCALED_DIR, name)
    os.makedirs(chunk_out, exist_ok=True)
    subprocess.run([
        REALESRGAN_EXE, "-i", chunk_in, "-o", chunk_out,
        "-n", "realesrgan-x4plus", "-f", "jpg"
    ], check=True)

# 3. Assemble and apply edits
print("Assembling the 1080p final master...")
# We use the upscaled frames (2560x1440) and scale/crop to 1920x1080.
# For slow mo, we do minterpolate.
def assemble_part(name, out_file, vf_extra=""):
    chunk_out = os.path.join(UPSCALED_DIR, name)
    # The frames are 24fps
    subprocess.run([
        "ffmpeg", "-framerate", "24000/1001", "-i", f"{chunk_out}/%04d.jpg",
        "-vf", f"scale=1920:1080:flags=spline+accurate_rnd{vf_extra}",
        "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
        out_file, "-y"
    ], check=True)

# Part 1: Slow pan
part1 = os.path.join(WORK_DIR, "part1.mp4")
assemble_part("part1", part1, ",crop=w='iw*min(1, 1 - 0.0006*n)':h='ih*min(1, 1 - 0.0006*n)':x='(iw-ow)/2':y='(ih-oh)/2'")

# Part 2: Founders Slowmo
part2 = os.path.join(WORK_DIR, "part2.mp4")
assemble_part("part2", part2, ",crop=w='iw*min(1, 1 - 0.0007*n)':h='ih*min(1, 1 - 0.0007*n)':x='(iw-ow)/2':y='(ih-oh)/2',setpts=2.0*PTS,minterpolate=fps=24000/1001:mi_mode=blend")

# Part 3a: Founders Cameo Slowmo
part3a = os.path.join(WORK_DIR, "part3a.mp4")
assemble_part("part3a", part3a, ",setpts=2.0*PTS,minterpolate=fps=24000/1001:mi_mode=blend")

# Part 3b: Architecture B-Roll
part3b = os.path.join(WORK_DIR, "part3b.mp4")
assemble_part("part3b", part3b, "")

concat_manifest = os.path.join(WORK_DIR, "concat.txt")
with open(concat_manifest, "w") as f:
    f.write(f"file '{part1}'\n")
    f.write(f"file '{part2}'\n")
    f.write(f"file '{part3a}'\n")
    f.write(f"file '{part3b}'\n")

final_output = os.path.join(BASE_DIR, "edited_videos", "ventura_stock_hero_1080p.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_manifest,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-an",
    final_output, "-y"
], check=True)

frontend_public = os.path.join(BASE_DIR, "redesign", "public", "ventura_stock_hero_1080p.mp4")
shutil.copy2(final_output, frontend_public)
print("ALL DONE. TRUE 1080p CREATED via Real-ESRGAN.")
