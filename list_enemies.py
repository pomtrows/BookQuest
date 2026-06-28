import re

file_path = r"C:\PROJET\Book Quest\src\data\story.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find all "name": "something" inside story.ts
matches = re.findall(r'"name":\s*"([^"]+)"', content)
all_names = set(matches)

print("Possible enemy names found in story.ts:")
for name in sorted(all_names):
    print(f"- {name}")
