import json
import re

with open(r'C:\PROJET\Book Quest\public\story.json', 'r', encoding='utf-8') as f:
    story = json.load(f)

# Improved regex for standard combat (single enemy)
# We look for HABILETÉ followed by number, ENDURANCE followed by number
# The enemy name is the uppercase string before HABILETÉ
combat_pattern = re.compile(r'([A-ZÀ-Ÿ\+\s-]{3,})HABILET[EÉ]\s*[:.]\s*(\d+)\s*ENDURANCE\s*[:.]\s*(\d+)')

# Regex for multiple enemies in a table
multi_combat_pattern = re.compile(r'HABILET[EÉ]\s*ENDURANCE\s*(?:(?:Premier|Deuxième|Troisième|Quatrième)\s+[A-ZÀ-Ÿ\s]+\s+\d+\s+\d+\s*)+')

for sid, data in story.items():
    text = data['text']
    
    # Try finding standard combat
    match = combat_pattern.search(text)
    if match:
        name = match.group(1).strip()
        print(f"Section {sid}: Found combat -> {name} | {match.group(2)} | {match.group(3)}")
    else:
        # Check if we missed something that looks like combat
        if 'ENDURANCE' in text.upper() and 'HABILET' in text.upper():
            multi_match = multi_combat_pattern.search(text)
            if multi_match:
                print(f"Section {sid}: Found MULTI combat -> {multi_match.group(0)}")
            else:
                print(f"Section {sid}: MISSED COMBAT? -> {text[:100]}...")
