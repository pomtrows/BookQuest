import pymupdf
import re
import json

pdf_path = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945\media__1782643380600.pdf"
out_path = r"C:\PROJET\Book Quest\src\data\story_full.ts"

doc = pymupdf.open(pdf_path)
full_text = ""
for page in doc:
    full_text += page.get_text() + "\n"

# Clean up line breaks
full_text = full_text.replace("\r", "")
full_text = re.sub(r'([^\n])\n([^\n])', r'\1 \2', full_text) # Join lines that don't end with newline

# Look for sections. Sections usually start with a number alone on a line.
sections_raw = re.split(r'\n\s*(\d{1,3})\s*\n', full_text)

story_data = {}

# The first element is pre-content (rules, prologue)
pre_content = sections_raw[0]

# Then pairs of (section_id, text)
for i in range(1, len(sections_raw) - 1, 2):
    sec_id = sections_raw[i].strip()
    text = sections_raw[i+1].strip()
    
    # Simple choice extraction
    choices = []
    # Find sentences containing "rendez-vous au \d+" or "au \d+"
    choice_matches = re.finditer(r'([^\.]+rendez-vous[^0-9]+(\d+)\.?)', text, re.IGNORECASE)
    for match in choice_matches:
        full_sentence = match.group(1).strip()
        target = match.group(2)
        choices.append({"text": full_sentence, "targetId": target})
        
    # Also find "au \d+" if it missed some
    
    # Split text into paragraphs (double newline)
    paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]
    
    story_data[sec_id] = {
        "id": sec_id,
        "text": paragraphs,
        "choices": choices
    }

# Write out to TypeScript file
ts_content = f"""import {{ Section }} from '../types/game';

export const storyDataFull: Record<string, Section> = {json.dumps(story_data, indent=2, ensure_ascii=False)};
"""

with open(out_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Extracted {len(story_data)} sections.")
