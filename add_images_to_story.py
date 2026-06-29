import json
import re

ts_file = r"C:\PROJET\Book Quest\src\data\story.ts"

with open(ts_file, "r", encoding="utf-8") as f:
    content = f.read()

sections_to_update = ['187', '190', '200', '212', '235', '244', '251', '264', '268', '274', '280', '285', '294', '300', '307', '315', '322']

for s in sections_to_update:
    # search for "id": "X",
    pattern = r'("id": "' + s + r'",\n\s*"text": (?:\[[\s\S]*?\]|".*?"),)'
    replacement = r'\1\n    "image": "/images/sections/sect' + s + r'.png",'
    content = re.sub(pattern, replacement, content, count=1)

with open(ts_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated story.ts successfully with new sections")
