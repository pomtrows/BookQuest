import json
import re

ts_file = r"C:\PROJET\Book Quest\src\data\story.ts"

with open(ts_file, "r", encoding="utf-8") as f:
    content = f.read()

sections_to_update = ['63', '72', '77', '82', '93', '97', '106', '114', '122', '130', '131', '144', '152', '158', '160', '170', '177']

for s in sections_to_update:
    # search for "id": "X",
    pattern = r'("id": "' + s + r'",\n\s*"text": (?:\[[\s\S]*?\]|".*?"),)'
    replacement = r'\1\n    "image": "/images/sections/sect' + s + r'.png",'
    content = re.sub(pattern, replacement, content, count=1)

with open(ts_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated story.ts successfully with new sections")
