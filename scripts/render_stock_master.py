import subprocess
import os

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_VIDEO = os.path.join(BASE_DIR, "YTB_1790689971532.mp4")
OUTPUT_DIR = os.path.join(BASE_DIR, "edited_videos")
TEMP_DIR = os.path.join(BASE_DIR, "video_analysis", "stock_master_build")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# 1080p Upscale + Architectural Color Grade (Warmth, Rich Obsidian Blacks, Crisp Detail)
COLOR_GRADE_1080P = (
    "scale=1920:1080:flags=lanczos,"
    "eq=contrast=1.14:brightness=0.01:saturation=1.20,"
    "curves=m='0/0 0.25/0.22 0.5/0.52 0.75/0.78 1/0.98':r='0/0 0.5/0.53 1/1':b='0/0.02 0.5/0.48 1/0.96',"
    "unsharp=5:5:0.7:5:5:0.0"
)

# Slow pan / push-in for Logo
SLOW_PAN_LOGO = (
    "crop=w='iw*min(1, 1 - 0.0006*n)':h='ih*min(1, 1 - 0.0006*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{COLOR_GRADE_1080P}"
)

# Slow pan / push-in for Founders
SLOW_PAN_FOUNDERS = (
    "crop=w='iw*min(1, 1 - 0.0007*n)':h='ih*min(1, 1 - 0.0007*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{COLOR_GRADE_1080P}"
)

print("--- Step 1: Rendering Section 1 (Logo with Slow Pan) ---")
# Dramatic house lighting up with Ventura Logo (6.8s -> 10.1s in raw video)
part1_file = os.path.join(TEMP_DIR, "part1_logo.mp4")
subprocess.run([
    "ffmpeg", "-ss", "6.8", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", SLOW_PAN_LOGO,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-an",
    part1_file, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print("Logo section rendered.")

print("--- Step 2: Rendering Section 2 (Founders Talking with Slow Pan) ---")
# Founders talking front-and-center (3.2s -> 6.5s in raw video)
part2_file = os.path.join(TEMP_DIR, "part2_founders.mp4")
subprocess.run([
    "ffmpeg", "-ss", "3.2", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", SLOW_PAN_FOUNDERS,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-an",
    part2_file, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print("Founders section rendered.")

print("--- Step 3: Rendering Section 3 (Dramatic Architectural Parts) ---")
# Dramatic B-roll sequence:
# 1. Aerial drone sweep over Parkside Villas at The Preserve (18.64s to 26.0s, 7.36s)
# 2. Structural concrete walk-out basement & steel framing (26.0s to 32.0s, 6.0s)
# 3. Glass salon, grand piano & pool terrace (32.0s to 39.8s, 7.8s)
# 4. Highland Park Spanish/Mediterranean estate with fountain (83.5s to 93.0s, 9.5s)

broll_clips = [
    (18.64, 26.00, "part3_aerial_preserve.mp4"),
    (26.00, 32.00, "part4_engineering_framing.mp4"),
    (32.00, 39.80, "part5_piano_pool_salon.mp4"),
    (83.50, 93.00, "part6_mediterranean_fountain.mp4")
]

broll_files = []
for start, end, fname in broll_clips:
    dur = end - start
    fpath = os.path.join(TEMP_DIR, fname)
    subprocess.run([
        "ffmpeg", "-ss", str(start), "-i", SRC_VIDEO, "-t", str(dur),
        "-vf", COLOR_GRADE_1080P,
        "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-an",
        fpath, "-y"
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    broll_files.append(fpath)
    print(f"Rendered {fname}")

print("--- Step 4: Stitching All Sections into Single Master Stock Video ---")
concat_list = [part1_file, part2_file] + broll_files
concat_manifest = os.path.join(TEMP_DIR, "stock_master_manifest.txt")
with open(concat_manifest, "w") as f:
    for fp in concat_list:
        f.write(f"file '{fp}'\n")

# Master Output: Completely silent (-an), 1080p, seamless stock video
master_output = os.path.join(OUTPUT_DIR, "ventura_stock_hero_1080p.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_manifest,
    "-c", "copy",
    master_output, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

size_mb = os.path.getsize(master_output) / (1024 * 1024)
print(f"\nSUCCESS! Master Stock Video Rendered:\n{master_output} ({size_mb:.2f} MB)")
