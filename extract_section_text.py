import json
import re

ts_file = r"C:\PROJET\Book Quest\src\data\story.ts"
out_file = r"C:\PROJET\Book Quest\sections_content.txt"

sections_to_find = ['2', '7', '22', '30', '34', '39', '50', '58', '63', '72', '77', '82', '93', '97', '106', '114', '122', '130', '131', '144', '152', '158', '160', '170', '177', '187', '190', '200', '212', '235', '244', '251', '264', '268', '274', '280', '285', '294', '300', '307', '315', '322', '332', '333', '341', '350']

with open(ts_file, "r", encoding="utf-8") as f:
    content = f.read()

# Naive JSON extraction won't work perfectly on TS, but we can regex search for the section texts.
# Wait, let's just parse the TS by removing the export declaration and using json.loads on the dict
json_str = content.replace("import { Section } from '../types/game';\n\nexport const storyData: Record<string, Section> = ", "")
json_str = json_str.strip().rstrip(";")
try:
    data = json.loads(json_str)
    with open(out_file, "w", encoding="utf-8") as out:
        for s in sections_to_find:
            if s in data:
                text = data[s].get("text", "")
                if isinstance(text, list):
                    text = " ".join(text)
                out.write(f"Section {s}: {text[:150]}...\n")
            else:
                out.write(f"Section {s}: NOT FOUND\n")
    print("Done writing sections.")
except Exception as e:
    print("JSON parsing failed:", e)
