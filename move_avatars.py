import os
import glob
import shutil

source_dir = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945"
target_dir = r"C:\PROJET\Book Quest\public\images\avatars"

os.makedirs(target_dir, exist_ok=True)

for i in range(1, 11):
    pattern = os.path.join(source_dir, f"avatar_{i}_*.png")
    matches = glob.glob(pattern)
    if matches:
        # Take the first match
        src = matches[0]
        dst = os.path.join(target_dir, f"avatar_{i}.png")
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
    else:
        print(f"Warning: No match for avatar_{i}")
