import os

log_dir = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945\.system_generated\logs"

found = False
for filename in os.listdir(log_dir):
    filepath = os.path.join(log_dir, filename)
    if os.path.isfile(filepath):
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                if "La Travers" in content:
                    print(f"Found in {filename} (utf-8) - Size: {len(content)}")
                    found = True
        except Exception as e:
            pass
        
if not found:
    print("Text not found in logs directory.")
