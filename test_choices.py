import json
import re

with open(r'C:\PROJET\Book Quest\src\data\story.ts', 'r', encoding='utf-8') as f:
    story_content = f.read()

# Extract all sections with no choices but having "au \d+" in text
# Actually, let's just parse the TS object using a quick regex to extract texts and choices.
# Alternatively, I can just use the python extraction script logic on the text_clean directly inside `extract_epub.py`
# But I want to list what's missing.

# Let's search for "au \d+" in the full epub text
import zipfile

epub_path = r"C:\PROJET\Book Quest\Loup Solitaire 01 - Beetlejuice.epub"
html_contents = []
with zipfile.ZipFile(epub_path, 'r') as z:
    for name in sorted(z.namelist()):
        if name.startswith('index_split_') and name.endswith('.html'):
            html_contents.append(z.read(name).decode('utf-8'))

full_html = " ".join(html_contents)
full_html = re.sub(r'[\r\n]+', ' ', full_html)
section_starts = list(re.finditer(r'<p[^>]*>\s*<a[^>]*></a>\s*<b[^>]*>\s*(\d+)\s*</b>\s*</p>|<p[^>]*>\s*<b[^>]*>\s*(\d+)\s*</b>\s*</p>', full_html))

old_pattern = re.compile(r'([^\.]*?rendez[- ]*vous.*?au\s*(\d+)[^\.]*\.)', re.IGNORECASE)
new_pattern = re.compile(r'([^\.]*?(?:rend[a-zà-ÿ\s-]*?au|allez[a-zà-ÿ\s-]*?au)\s*(\d+)[^\.]*\.)', re.IGNORECASE)

for i in range(len(section_starts)):
    start_match = section_starts[i]
    section_id = start_match.group(1) or start_match.group(2)
    start_pos = start_match.end()
    end_pos = section_starts[i+1].start() if i + 1 < len(section_starts) else len(full_html)
    
    text_clean = re.sub(r'<[^>]+>', '', full_html[start_pos:end_pos])
    text_clean = re.sub(r'\s+', ' ', text_clean).strip()
    
    old_matches = old_pattern.findall(text_clean)
    new_matches = new_pattern.findall(text_clean)
    
    # Check if new pattern missed anything that au \d+ catches
    au_pattern = re.compile(r'([^\.]*?\bau\s+(\d+)\b[^\.]*\.)', re.IGNORECASE)
    au_matches = au_pattern.findall(text_clean)
    
    # We also need to avoid duplicate matches if the regex overlaps, but findall usually handles non-overlapping.
    if len(au_matches) > len(new_matches):
        print(f"Section {section_id}: New pattern missed au matches!")
        for am in au_matches:
            if not new_pattern.search(am[0]):
                print(f"  -> {am[0]}")
    
    if len(new_matches) > len(old_matches):
        print(f"Section {section_id}: New pattern CAUGHT something new:")
        for nm in new_matches:
            # Check if it was in old matches
            found_in_old = any(om[1] == nm[1] for om in old_matches)
            if not found_in_old:
                print(f"  -> {nm[0]}")

