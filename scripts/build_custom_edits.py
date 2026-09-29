import subprocess
import os

BASE_DIR = r"c:\Users\herma\Downloads\homes"
SRC_VIDEO = os.path.join(BASE_DIR, "YTB_1790689971532.mp4")
OUTPUT_DIR = os.path.join(BASE_DIR, "edited_videos")
TEMP_DIR = os.path.join(BASE_DIR, "video_analysis", "build_custom")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# 1080p Upscale + Cinematic Color Grade + Filmic Letterbox
CINEMATIC_GRADE = (
    "scale=1920:1080:flags=lanczos,"
    "eq=contrast=1.14:brightness=0.01:saturation=1.20,"
    "curves=m='0/0 0.25/0.22 0.5/0.52 0.75/0.78 1/0.98':r='0/0 0.5/0.53 1/1':b='0/0.02 0.5/0.48 1/0.96',"
    "unsharp=5:5:0.7:5:5:0.0"
)
LETTERBOX = "drawbox=x=0:y=0:w=1920:h=90:color=black:t=fill,drawbox=x=0:y=990:w=1920:h=90:color=black:t=fill"

# Ken Burns Smooth Slow Pan / Zoom for the founders
SLOW_PAN_FOUNDERS = (
    "crop=w='iw*min(1, 1 - 0.0007*n)':h='ih*min(1, 1 - 0.0007*n)':x='(iw-ow)/2':y='(ih-oh)/2',"
    f"{CINEMATIC_GRADE},{LETTERBOX}"
)

BROLL_GRADE = f"{CINEMATIC_GRADE},{LETTERBOX}"

FONT_GEORGIA = "C\\:/Windows/Fonts/georgia.ttf"
FONT_ARIAL = "C\\:/Windows/Fonts/arial.ttf"

print("=======================================================")
print("Rendering Cut 1: Dramatic Intro -> Founders Cameo (Slow Pan) -> Architecture")
print("=======================================================")

# Part A: Dramatic house lighting up with Ventura Logo (6.8s -> 10.1s in raw, duration 3.3s)
p1_file = os.path.join(TEMP_DIR, "c1_part1_dramatic_intro.mp4")
subprocess.run([
    "ffmpeg", "-ss", "6.8", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", BROLL_GRADE,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    p1_file, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Part B: Founders talking with smooth slow pan (3.2s -> 6.5s in raw, duration 3.3s)
# Lower-third credit in letterbox bar
founders_text = (
    f"{SLOW_PAN_FOUNDERS},"
    f"drawtext=fontfile='{FONT_GEORGIA}':text='LOY & SHIDEH LOWARY  —  FOUNDERS & MASTER BUILDERS':fontcolor=0xc5a880:fontsize=17:x=(w-text_w)/2:y=1025"
)
p2_file = os.path.join(TEMP_DIR, "c1_part2_founders.mp4")
subprocess.run([
    "ffmpeg", "-ss", "3.2", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", founders_text,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    p2_file, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Part C: Dramatic Architectural B-Roll (18.64s to 45.0s, duration 26.4s)
# Aerial Preserve, Concrete Walk-out, Piano Room, Modern Estate
p3_file = os.path.join(TEMP_DIR, "c1_part3_broll.mp4")
subprocess.run([
    "ffmpeg", "-ss", "18.64", "-i", SRC_VIDEO, "-t", "26.4",
    "-vf", BROLL_GRADE,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    p3_file, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Concat Cut 1
concat1_txt = os.path.join(TEMP_DIR, "concat1.txt")
with open(concat1_txt, "w") as f:
    f.write(f"file '{p1_file}'\nfile '{p2_file}'\nfile '{p3_file}'\n")

out1 = os.path.join(OUTPUT_DIR, "ventura_dramatic_founders_reel.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat1_txt,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    out1, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print(f"Generated Cut 1: {out1} ({os.path.getsize(out1):,} bytes)")


print("\n=======================================================")
print("Rendering Cut 2: Start from 0:04 -> Founders Talk -> Dramatic Logo -> Architecture")
print("=======================================================")

# Starts at 0:04:
# Part A: Founders talking from 0:04 to 0:06.8 (duration 2.8s) with slow pan
c2_p1 = os.path.join(TEMP_DIR, "c2_part1_founders.mp4")
subprocess.run([
    "ffmpeg", "-ss", "4.0", "-i", SRC_VIDEO, "-t", "2.8",
    "-vf", founders_text,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    c2_p1, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Part B: Dramatic Logo lighting up (6.8s -> 10.1s in raw, duration 3.3s)
c2_p2 = os.path.join(TEMP_DIR, "c2_part2_logo.mp4")
subprocess.run([
    "ffmpeg", "-ss", "6.8", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", BROLL_GRADE,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    c2_p2, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Part C: Dramatic B-roll (18.64s to 45.0s, duration 26.4s)
c2_p3 = os.path.join(TEMP_DIR, "c2_part3_broll.mp4")
subprocess.run([
    "ffmpeg", "-ss", "18.64", "-i", SRC_VIDEO, "-t", "26.4",
    "-vf", BROLL_GRADE,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    c2_p3, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

concat2_txt = os.path.join(TEMP_DIR, "concat2.txt")
with open(concat2_txt, "w") as f:
    f.write(f"file '{c2_p1}'\nfile '{c2_p2}'\nfile '{c2_p3}'\n")

out2 = os.path.join(OUTPUT_DIR, "ventura_start_at_004.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat2_txt,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2",
    out2, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print(f"Generated Cut 2: {out2} ({os.path.getsize(out2):,} bytes)")


print("\n=======================================================")
print("Rendering Cut 3: Dramatic Architecture First -> Founders at 0:32 (Slow Pan) -> Finale")
print("=======================================================")

# 0:00 to 0:32 = Pure dramatic B-roll
# 0:32 to 0:35 = Founders talking with slow pan
# 0:35 to 0:45 = Mediterranean Estate finale with fountain

c3_p1 = os.path.join(TEMP_DIR, "c3_part1_broll_intro.mp4")
subprocess.run([
    "ffmpeg", "-ss", "6.8", "-i", SRC_VIDEO, "-t", "32.0",
    "-vf", BROLL_GRADE,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k",
    c3_p1, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

c3_p2 = os.path.join(TEMP_DIR, "c3_part2_founders_at_32s.mp4")
subprocess.run([
    "ffmpeg", "-ss", "3.2", "-i", SRC_VIDEO, "-t", "3.3",
    "-vf", founders_text,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k",
    c3_p2, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

c3_p3 = os.path.join(TEMP_DIR, "c3_part3_finale.mp4")
subprocess.run([
    "ffmpeg", "-ss", "83.5", "-i", SRC_VIDEO, "-t", "10.0",
    "-vf", BROLL_GRADE,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k",
    c3_p3, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

concat3_txt = os.path.join(TEMP_DIR, "concat3.txt")
with open(concat3_txt, "w") as f:
    f.write(f"file '{c3_p1}'\nfile '{c3_p2}'\nfile '{c3_p3}'\n")

out3 = os.path.join(OUTPUT_DIR, "ventura_founders_cameo_at_32s.mp4")
subprocess.run([
    "ffmpeg", "-f", "concat", "-safe", "0", "-i", concat3_txt,
    "-c:v", "libx264", "-preset", "fast", "-crf", "18",
    "-c:a", "aac", "-b:a", "192k",
    out3, "-y"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print(f"Generated Cut 3: {out3} ({os.path.getsize(out3):,} bytes)")

print("\nAll 3 targeted cuts generated successfully in 1080p!")
