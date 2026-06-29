import json
import re

ts_file = r"C:\PROJET\Book Quest\src\data\story.ts"

with open(ts_file, "r", encoding="utf-8") as f:
    content = f.read()

# Keywords for biomes
BIOMES = {
    'ruins': ['ruine', 'monastère', 'cendres', 'décombre'],
    'river': ['rivière', 'eau', 'pont', 'nage', 'barque', 'bateau', 'flot', 'ruisseau', 'gué', 'berge'],
    'cemetery': ['cimetière', 'tombe', 'crypte', 'sépulture', 'mort', 'cadavre', 'démon'],
    'city': ['ville', 'holmgard', 'rue', 'foule', 'capitale', 'taverne', 'soldat', 'roi', 'palais', 'porte', 'garde'],
    'mountains': ['montagne', 'colline', 'rocher', 'escarpé', 'grotte', 'corniche', 'sommet'],
    'road': ['route', 'chemin', 'sentier', 'charrette', 'chariot', 'cheval', 'cavalier'],
    'forest': ['forêt', 'bois', 'arbre', 'branche', 'clairière', 'broussaille']
}

def guess_biome(text):
    text_lower = text.lower()
    
    # Priority matching
    scores = {biome: 0 for biome in BIOMES}
    for biome, keywords in BIOMES.items():
        for kw in keywords:
            if kw in text_lower:
                scores[biome] += 1
                
    # If no keywords matched, default to forest (most common)
    best_biome = 'forest'
    best_score = 0
    for biome, score in scores.items():
        if score > best_score:
            best_score = score
            best_biome = biome
            
    return best_biome

# Find all sections and update them
# The structure is:
# "1": {
#   "id": "1",
#   "text": "...",
#   ...
# },
sections_pattern = re.compile(r'("\d+"|"[a-z]+"): \{(.*?)\n  \},', re.DOTALL)

def replacer(match):
    key = match.group(1)
    inner = match.group(2)
    
    # Extract text to guess biome
    text_match = re.search(r'"text": (\[[\s\S]*?\]|".*?"),', inner)
    if text_match:
        text = text_match.group(1)
        biome = guess_biome(text)
        
        # Check if location already exists
        if '"location":' not in inner:
            # Inject location after id
            inner = re.sub(r'("id": "[^"]+",)', r'\1\n    "location": "' + biome + '",', inner, count=1)
            
    return f'{key}: {{{inner}\n  }},'

new_content = sections_pattern.sub(replacer, content)

with open(ts_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Taggage des biomes terminé avec succès.")
