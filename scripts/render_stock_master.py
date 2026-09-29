import subprocess
import os

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_VIDEO = os.path.join(BASE_DIR, "YTB_1790689971532.mp4")
OUTPUT_DIR = os.path.join(BASE_DIR, "edited_videos")
TEMP_DIR = os.path.join(BASE_DIR, "video_analysis", "stock_15s_master")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# Master 1080p Restoration Filter Chain (Enhanced for "Way More HD")
# Increased deblocking, stronger unsharp masking, and slight grain for filmic texture
MASTER_RESTORE_FILTER = (
    "deblock=filter=strong:block=4,"
    "hqdn3d=2.0:2.0:4:4,"
    "scale=1920:1080:flags=spline+accurate_rnd,"
    "cas=strength=0.9,"
    "unsharp=5:5:1.0:5:5:0.0,"
    "eq=contrast=1.15:brightness=0.01:saturation=1.15,"
    "noise=alls=1.5:allf=t+u" # subtle film grain to hide upscale artifacts and banding
)

# True 2x Slow Motion via Framerate Interpolation
SLOW_MO_FILTER = "setpts=2.0*PTS,minterpolate=fps=24000/1001:mi_mode=blend"

# Slow pan / push-in for Logo
SLOW_PAN_LOGO = (
    "crop=w='iw*min(1, 1 - 0.0006*n)':h='ih*min(1, 1 - 0.0006*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{MASTER_RESTORE_FILTER}"
)

# Slow pan + 2x Slow Motion for Founders Intro
SLOW_PAN_FOUNDERS_SLOWMO = (
    "crop=w='iw*min(1, 1 - 0.0007*n)':h='ih*min(1, 1 - 0.0007*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{SLOW_MO_FILTER},"
    f"{MASTER_RESTORE_FILTER}"
)

# 2x Slow Motion for Founders Cameo
FOUNDERS_CAMEO_SLOWMO = (
    f"{SLOW_MO_FILTER},"
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

print("--- Step 2: Rendering Part 2 (Founders Intro 2x Slow Motion, 0:03.3 - 0:06.6) ---")
part2_file = os.path.join(TEMP_DIR, "part2_founders_intro.mp4")
# Take 1.65s of source, 2x slowmo = 3.3s output
subprocess.run([
    "ffmpeg", "-ss", "3.2", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", SLOW_PAN_FOUNDERS_SLOWMO,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
    part2_file, "-y"
], check=True)

print("--- Step 3a: Rendering Part 3a (Founders Cameo 2x Slow Motion, 0:06.6 - 0:08.8) ---")
part3a_file = os.path.join(TEMP_DIR, "part3a_founders_cameo.mp4")
# Take 1.1s of source, 2x slowmo = 2.2s output
subprocess.run([
    "ffmpeg", "-ss", "18.64", "-i", SRC_VIDEO, "-t", "2.2",
    "-vf", FOUNDERS_CAMEO_SLOWMO,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
    part3a_file, "-y"
], check=True)

print("--- Step 3b: Rendering Part 3b (Architecture B-Roll, 0:08.8 - 0:15.0) ---")
part3b_file = os.path.join(TEMP_DIR, "part3b_architecture.mp4")
# 6.2s to reach 15.0s total
subprocess.run([
    "ffmpeg", "-ss", "20.84", "-i", SRC_VIDEO, "-t", "6.2",
    "-vf", MASTER_RESTORE_FILTER,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-r", "24000/1001", "-an",
    part3b_file, "-y"
], check=True)

print("--- Step 4: Seamless Concatenation into Final 15.0s Master ---")
concat_manifest = os.path.join(TEMP_DIR, "concat_15s.txt")
with open(concat_manifest, "w") as f:
    f.write(f"file '{part1_file}'\n")
    f.write(f"file '{part2_file}'\n")
    f.write(f"file '{part3a_file}'\n")
    f.write(f"file '{part3b_file}'\n")

final_output = os.path.join(OUTPUT_DIR, "ventura_stock_hero_1080p.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_manifest,
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-an",
    final_output, "-y"
], check=True)

# Also copy immediately to the frontend public dir so preview server updates automatically
frontend_public = os.path.join(BASE_DIR, "redesign", "public", "ventura_stock_hero_1080p.mp4")
import shutil
shutil.copy2(final_output, frontend_public)
print(f"--- Copied to frontend: {frontend_public} ---")

cmd_probe = [
    "ffprobe", "-v", "error", "-show_entries",
    "format=duration:stream=width,height,r_frame_rate,nb_frames",
    "-of", "default=noprint_wrappers=1", final_output
]
probe_out = subprocess.check_output(cmd_probe).decode()
print("\n=== FINAL MASTER PROBE ===")
print(probe_out)
print(f"File size: {os.path.getsize(final_output) / (1024*1024):.2f} MB")
