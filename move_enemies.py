import os
import glob
import shutil

source_dir = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945"
target_dir = r"C:\PROJET\Book Quest\public\images\enemies"

os.makedirs(target_dir, exist_ok=True)

enemies = ['glok', 'loup', 'kraan', 'vordak', 'gourgaz', 'generic']

for e in enemies:
    pattern = os.path.join(source_dir, f"enemy_{e}_*.png")
    matches = glob.glob(pattern)
    if matches:
        src = matches[-1] # take the latest one just in case
        dst = os.path.join(target_dir, f"{e}.png")
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
    else:
        print(f"Warning: No match for {e}")
