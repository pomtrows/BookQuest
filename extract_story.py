import os
import json
import re

log_file = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945\.system_generated\logs\transcript_full.jsonl"

full_text = ""
with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("type") == "USER_INPUT":
                content = data.get("content", "")
                if "==Start of OCR" in content:
                    full_text += content + "\n"
        except Exception:
            pass

print(f"Total extracted text length: {len(full_text)}")
if full_text:
    start_idx = full_text.find("==Start of OCR")
    print(f"Starts with: {full_text[start_idx:start_idx+100]}")
    
    # Try to find all sections
    sections = re.findall(r'(?m)^([1-9][0-9]{0,2})$\s*\n(.*?)(?=(?m)^[1-9][0-9]{0,2}$|\Z)', full_text, re.DOTALL)
    print(f"Found {len(sections)} sections.")
    if sections:
        print(f"First section: {sections[0][0]}")
        print(f"Last section: {sections[-1][0]}")
