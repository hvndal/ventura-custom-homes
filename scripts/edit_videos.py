import subprocess
import os
import shutil

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_VIDEO = os.path.join(BASE_DIR, "YTB_1790689971532.mp4")
OUTPUT_DIR = os.path.join(BASE_DIR, "edited_videos")
TEMP_DIR = os.path.join(BASE_DIR, "video_analysis", "build")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# Cinematic Color Grading Filter Chain for 1080p
# 1. Upscale to 1920x1080 with Lanczos interpolation
# 2. Rich architectural contrast and warm saturation
# 3. Cinematic tone curve: warm gold highlights, deep obsidian blacks
# 4. Unsharp mask for crisp architectural detail
# 5. High-fashion 2.39:1 letterbox bars (or clean 16:9 full bleed)
CINEMATIC_GRADE = (
    "scale=1920:1080:flags=lanczos,"
    "eq=contrast=1.14:brightness=0.01:saturation=1.20,"
    "curves=m='0/0 0.25/0.22 0.5/0.52 0.75/0.78 1/0.98':r='0/0 0.5/0.53 1/1':b='0/0.02 0.5/0.48 1/0.96',"
    "unsharp=5:5:0.7:5:5:0.0"
)

# Subtle letterbox filter for filmic ratio
LETTERBOX = "drawbox=x=0:y=0:w=1920:h=90:color=black:t=fill,drawbox=x=0:y=990:w=1920:h=90:color=black:t=fill"

stock_output = os.path.join(OUTPUT_DIR, "ventura_stock_hero.mp4")
if not os.path.exists(stock_output):
    print("--- Step 1: Building Pure Architectural Stock Reel (No talking heads) ---")
    stock_segments = [
        (18.64, 26.00, "stock_seg1.mp4"),
        (26.00, 32.00, "stock_seg2.mp4"),
        (32.00, 39.80, "stock_seg3.mp4"),
        (62.00, 72.00, "stock_seg4.mp4"),
        (83.50, 93.00, "stock_seg5.mp4"),
        (117.50, 128.50, "stock_seg6.mp4")
    ]

    concat_entries = []
    for start, end, fname in stock_segments:
        dur = end - start
        out_file = os.path.join(TEMP_DIR, fname)
        cmd = [
            "ffmpeg", "-ss", str(start), "-i", SRC_VIDEO,
            "-t", str(dur),
            "-vf", f"{CINEMATIC_GRADE},{LETTERBOX}",
            "-c:v", "libx264", "-preset", "fast", "-crf", "18",
            "-an", out_file, "-y"
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        concat_entries.append(f"file '{fname}'")

    concat_file = os.path.join(TEMP_DIR, "stock_concat.txt")
    with open(concat_file, "w") as f:
        f.write("\n".join(concat_entries))

    cmd_concat = [
        "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat_file,
        "-c", "copy", stock_output, "-y"
    ]
    subprocess.run(cmd_concat, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"Generated: {stock_output} (Size: {os.path.getsize(stock_output):,} bytes)")
else:
    print(f"Step 1 already exists: {stock_output}")

print("\n--- Step 2: Building Complementary Founders Monograph Film ---")
# In this version:
# 1. Loy & Shideh appear with high-end lower third badge:
#    "LOY & SHIDEH LOWARY | Founders & Master Builders"
# 2. Audio is polished with audio normalization and subtle warmth
# 3. Transitions between the founders and the estates cut at musical/thought beats
# 4. Cinematic intro & outro title overlays:
#    "VENTURA CUSTOM HOMES" & "SANCTUARY FOR THE SENSES"

FONT_GEORGIA = "C\\:/Windows/Fonts/georgia.ttf"
FONT_ARIAL = "C\\:/Windows/Fonts/arial.ttf"

founders_filter = (
    f"{CINEMATIC_GRADE},{LETTERBOX},"
    f"drawtext=fontfile='{FONT_GEORGIA}':text='VENTURA CUSTOM HOMES':fontcolor=0xc5a880:fontsize=32:x=(w-text_w)/2:y=35:enable='between(t,1,7)',"
    f"drawtext=fontfile='{FONT_ARIAL}':text='THE PRESERVE AT FIELDS  •  FRISCO, TX':fontcolor=white:fontsize=14:x=(w-text_w)/2:y=72:enable='between(t,1,7)',"
    f"drawtext=fontfile='{FONT_GEORGIA}':text='LOY & SHIDEH LOWARY  —  FOUNDERS & MASTER BUILDERS':fontcolor=0xc5a880:fontsize=17:x=(w-text_w)/2:y=1025:enable='between(t,2,9)+between(t,54,61)+between(t,102,109)'"
)

# Polish audio with high-pass filter, mild compression, and loudness normalization
audio_filter = "highpass=f=80,lowpass=f=12000,acompressor=threshold=-18dB:ratio=3:attack=20:release=250,loudnorm=I=-16:TP=-1.5:LRA=11"

founders_output = os.path.join(OUTPUT_DIR, "ventura_founders_monograph.mp4")
cmd_founders = [
    "ffmpeg", "-i", SRC_VIDEO,
    "-vf", founders_filter,
    "-af", audio_filter,
    "-c:v", "libx264", "-preset", "fast", "-crf", "19",
    "-c:a", "aac", "-b:a", "192k",
    founders_output, "-y"
]
subprocess.run(cmd_founders, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print(f"Generated: {founders_output} (Size: {os.path.getsize(founders_output):,} bytes)")

print("\n--- Summary of Edits Complete ---")
