import os
import subprocess
import shutil

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_NATIVE_1080P = os.path.join(BASE_DIR, "native_1080p_source.mp4")
WORK_DIR = os.path.join(BASE_DIR, "ai_upscale_work")
UPSCALED_DIR = os.path.join(WORK_DIR, "upscaled")

# Supersampling filter from 2560x1440 Real-ESRGAN frames -> razor-sharp 1920x1080
SUPERSAMPLE_1080P = (
    "scale=1920:1080:flags=lanczos+accurate_rnd,"
    "cas=strength=0.75,"
    "unsharp=5:5:0.85:5:5:0.0,"
    "eq=contrast=1.08:brightness=0.01:saturation=1.08"
)

# 1. Part 1: Logo & Dusk Estate with smooth slow pan (3.3s from Real-ESRGAN 2560x1440 -> 1080p supersampled)
print("1. Rendering Part 1 (Logo & Dusk Estate 1080p supersampled slow pan)...")
part1_mp4 = os.path.join(WORK_DIR, "master_part1.mp4")
subprocess.run([
    "ffmpeg", "-framerate", "24000/1001", "-i", f"{UPSCALED_DIR}/part1/%04d.jpg",
    "-vf", f"crop=w='iw*min(1, 1 - 0.0006*n)':h='ih*min(1, 1 - 0.0006*n)':x='(iw-ow)/2':y='(ih-oh)/2',{SUPERSAMPLE_1080P}",
    "-c:v", "libx264", "-preset", "slow", "-crf", "14", "-pix_fmt", "yuv420p", "-r", "24000/1001", "-an",
    part1_mp4, "-y"
], check=True)

# 2. Founders Side-Look Cameo ONLY (1.8s quick second):
# Sourced directly from NATIVE 1920x1080P master (native_1080p_source.mp4 at 56.7s - 58.5s)
# where Loy is looking at Shideh from the side — TRUE 1080p camera master, NO wide couch shot, NO ghosting!
print("2. Rendering Founders Side-Look Cameo from TRUE NATIVE 1920x1080P source (56.7s - 58.5s)...")
part_founders_side = os.path.join(WORK_DIR, "master_founders_side.mp4")
subprocess.run([
    "ffmpeg", "-ss", "56.7", "-i", SRC_NATIVE_1080P, "-t", "1.8",
    "-vf", (
        "crop=w='iw*min(1, 1 - 0.0005*n)':h='ih*min(1, 1 - 0.0005*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
        "scale=1920:1080:flags=lanczos+accurate_rnd,"
        "cas=strength=0.45,"
        "unsharp=5:5:0.45:5:5:0.0,"
        "eq=contrast=1.06:brightness=0.01:saturation=1.05"
    ),
    "-c:v", "libx264", "-preset", "slow", "-crf", "14", "-pix_fmt", "yuv420p", "-r", "24000/1001", "-an",
    part_founders_side, "-y"
], check=True)

# 3. Part 3b: Architectural B-Roll (6.2s from Real-ESRGAN 2560x1440 -> 1080p supersampled)
print("3. Rendering Part 3b (Architectural B-Roll 1080p supersampled)...")
part3b_mp4 = os.path.join(WORK_DIR, "master_part3b.mp4")
subprocess.run([
    "ffmpeg", "-framerate", "24000/1001", "-i", f"{UPSCALED_DIR}/part3b/%04d.jpg",
    "-vf", SUPERSAMPLE_1080P,
    "-c:v", "libx264", "-preset", "slow", "-crf", "14", "-pix_fmt", "yuv420p", "-r", "24000/1001", "-an",
    part3b_mp4, "-y"
], check=True)

# 4. Part 3c: Native 1920x1080P Architectural Estate Streetscape Finale (3.7s from native_1080p_source.mp4 at 94.0s - 97.7s)
print("4. Rendering Part 3c (Native 1920x1080P Architectural Finale)...")
part3c_mp4 = os.path.join(WORK_DIR, "master_part3c.mp4")
subprocess.run([
    "ffmpeg", "-ss", "94.0", "-i", SRC_NATIVE_1080P, "-t", "3.7",
    "-vf", (
        "scale=1920:1080:flags=lanczos+accurate_rnd,"
        "cas=strength=0.55,"
        "unsharp=5:5:0.55:5:5:0.0,"
        "eq=contrast=1.08:brightness=0.01:saturation=1.08"
    ),
    "-c:v", "libx264", "-preset", "slow", "-crf", "14", "-pix_fmt", "yuv420p", "-r", "24000/1001", "-an",
    part3c_mp4, "-y"
], check=True)

# 5. Concatenate into final 15.0s 1080p master (Part 1 -> Quick 1.8s Native 1080p Side-Look -> Architecture B-Roll)
concat_manifest = os.path.join(WORK_DIR, "concat_master.txt")
with open(concat_manifest, "w") as f:
    f.write(f"file '{part1_mp4}'\n")
    f.write(f"file '{part_founders_side}'\n")
    f.write(f"file '{part3b_mp4}'\n")
    f.write(f"file '{part3c_mp4}'\n")

final_output = os.path.join(BASE_DIR, "edited_videos", "ventura_stock_hero_1080p.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_manifest,
    "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an",
    final_output, "-y"
], check=True)

frontend_public = os.path.join(BASE_DIR, "redesign", "public", "ventura_stock_hero_1080p.mp4")
shutil.copy2(final_output, frontend_public)
print("SUCCESS: Final 1080p master rendered with ONLY the native 1080p side-look cameo!")
