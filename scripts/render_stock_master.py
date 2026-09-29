import subprocess
import os

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_VIDEO = os.path.join(BASE_DIR, "YTB_1790689971532.mp4")
OUTPUT_DIR = os.path.join(BASE_DIR, "edited_videos")
TEMP_DIR = os.path.join(BASE_DIR, "video_analysis", "stock_15s_master")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# Master 1080p Restoration Filter Chain:
# 1. Deblock: removes 8x8 compression boundaries from 360p video
# 2. HQDN3D: High-quality temporal-spatial denoising to clean noise/grain
# 3. Lanczos Scaling: 1920x1080 high-precision interpolation
# 4. AMD FidelityFX CAS: Contrast-Adaptive Sharpening for ultra-crisp edges without halos
# 5. Filmic Unsharp: Fine-detail edge crisping
# 6. Architectural Luxury Color Grade: Rich contrast, warm highlights, vibrant natural tones
MASTER_RESTORE_FILTER = (
    "deblock=filter=weak:block=4,"
    "hqdn3d=1.5:1.5:4:4,"
    "scale=1920:1080:flags=lanczos+accurate_rnd,"
    "cas=strength=0.8,"
    "unsharp=5:5:0.5:5:5:0.0,"
    "eq=contrast=1.12:brightness=0.01:saturation=1.18"
)

# Slow pan / push-in for Logo
SLOW_PAN_LOGO = (
    "crop=w='iw*min(1, 1 - 0.0006*n)':h='ih*min(1, 1 - 0.0006*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{MASTER_RESTORE_FILTER}"
)

# Slow pan / push-in for Founders Intro
SLOW_PAN_FOUNDERS = (
    "crop=w='iw*min(1, 1 - 0.0007*n)':h='ih*min(1, 1 - 0.0007*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{MASTER_RESTORE_FILTER}"
)

print("--- Step 1: Rendering Part 1 (Logo & Dusk Estate with Slow Pan, 0:00 - 0:03.3) ---")
part1_file = os.path.join(TEMP_DIR, "part1_logo.mp4")
subprocess.run([
    "ffmpeg", "-ss", "6.8", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", SLOW_PAN_LOGO,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
    part1_file, "-y"
], check=True)

print("--- Step 2: Rendering Part 2 (Founders Intro with Slow Pan, 0:03.3 - 0:06.6) ---")
part2_file = os.path.join(TEMP_DIR, "part2_founders_intro.mp4")
subprocess.run([
    "ffmpeg", "-ss", "3.2", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", SLOW_PAN_FOUNDERS,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
    part2_file, "-y"
], check=True)

print("--- Step 3: Rendering Part 3 (Founders 0:06-0:08 Cameo + Architecture till 0:15) ---")
part3_file = os.path.join(TEMP_DIR, "part3_cameo_architecture.mp4")
subprocess.run([
    "ffmpeg", "-ss", "18.64", "-i", SRC_VIDEO, "-t", "8.4",
    "-vf", MASTER_RESTORE_FILTER,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
    part3_file, "-y"
], check=True)

print("--- Step 4: Seamless Concatenation into Final 15.0s Master ---")
concat_manifest = os.path.join(TEMP_DIR, "concat_15s.txt")
with open(concat_manifest, "w") as f:
    f.write(f"file '{part1_file}'\n")
    f.write(f"file '{part2_file}'\n")
    f.write(f"file '{part3_file}'\n")

final_output = os.path.join(OUTPUT_DIR, "ventura_stock_hero_1080p.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_manifest,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-an",
    final_output, "-y"
], check=True)

cmd_probe = [
    "ffprobe", "-v", "error", "-show_entries",
    "format=duration:stream=width,height,r_frame_rate,nb_frames",
    "-of", "default=noprint_wrappers=1", final_output
]
probe_out = subprocess.check_output(cmd_probe).decode()
print("\n=== FINAL MASTER PROBE ===")
print(probe_out)
print(f"File size: {os.path.getsize(final_output) / (1024*1024):.2f} MB")
