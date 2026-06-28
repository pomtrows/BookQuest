import zipfile
import re
import json

epub_path = r"C:\PROJET\Book Quest\Loup Solitaire 01 - Beetlejuice.epub"
out_path = r"C:\PROJET\Book Quest\src\data\story.ts"

html_contents = []
with zipfile.ZipFile(epub_path, 'r') as z:
    for name in sorted(z.namelist()):
        if name.startswith('index_split_') and name.endswith('.html'):
            text = z.read(name).decode('utf-8', errors='replace')
            html_contents.append(text)

full_html = " ".join(html_contents)
full_html = re.sub(r'[\r\n]+', ' ', full_html)

section_starts = list(re.finditer(r'<p[^>]*>\s*<a[^>]*></a>\s*<b[^>]*>\s*(\d+)\s*</b>\s*</p>|<p[^>]*>\s*<b[^>]*>\s*(\d+)\s*</b>\s*</p>', full_html))

story_data = {}
for i in range(len(section_starts)):
    start_match = section_starts[i]
    section_id = start_match.group(1) or start_match.group(2)
        
    start_pos = start_match.end()
    end_pos = section_starts[i+1].start() if i + 1 < len(section_starts) else len(full_html)
    
    content_html = full_html[start_pos:end_pos]
    text_clean = re.sub(r'<[^>]+>', '', content_html)
    text_clean = re.sub(r'\s+', ' ', text_clean).strip()
    
    if section_id and section_id.isdigit():
        sid = int(section_id)
        if 1 <= sid <= 350:
            choices = []
            choice_pattern = re.compile(r'([^\.]*?rendez[- ]*vous.*?au\s*(\d+)[^\.]*\.)', re.IGNORECASE)
            for choice_match in choice_pattern.findall(text_clean):
                choices.append({
                    "text": choice_match[0].strip(),
                    "targetId": choice_match[1]
                })
            
            combat = None
            combat_pattern = re.compile(r'([A-Z\s]+)\s*-\s*HABILET[EÉ]\s*:\s*(\d+)\s*ENDURANCE\s*:\s*(\d+)', re.IGNORECASE)
            combat_match = combat_pattern.search(text_clean)
            if combat_match:
                combat = {
                    "enemy": {
                        "name": combat_match.group(1).strip(),
                        "skill": int(combat_match.group(2)),
                        "endurance": int(combat_match.group(3))
                    },
                    "victorySectionId": choices[0]['targetId'] if choices else section_id
                }
            
            story_data[str(sid)] = {
                "id": str(sid),
                "text": text_clean,
                "choices": choices
            }
            if combat:
                story_data[str(sid)]["combat"] = combat

if len(story_data) > 0:
    ts_content = "import type { Section } from '../types/game';\n\nexport const storyData: Record<string, Section> = " + json.dumps(story_data, ensure_ascii=False, indent=2) + ";\n"
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Saved to {out_path}")
