import json
import re

ts_file = r"C:\PROJET\Book Quest\src\data\story.ts"

with open(ts_file, "r", encoding="utf-8") as f:
    content = f.read()

sections_to_update = ['2', '7', '22', '30', '34', '39', '50', '58']

for s in sections_to_update:
    # search for "id": "X",
    pattern = r'("id": "' + s + r'",\n\s*"text": (?:\[[\s\S]*?\]|".*?"),)'
    replacement = r'\1\n    "image": "/images/sections/sect' + s + r'.png",'
    content = re.sub(pattern, replacement, content, count=1)

with open(ts_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated story.ts successfully")
