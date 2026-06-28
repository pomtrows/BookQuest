import zipfile
from bs4 import BeautifulSoup

def extract_epub():
    z = zipfile.ZipFile('Loup Solitaire 01 - Beetlejuice.epub')
    htmls = [f for f in z.namelist() if f.endswith('.xhtml') or f.endswith('.html')]
    texts = []
    for f in htmls:
        html_content = z.read(f)
        soup = BeautifulSoup(html_content, 'html.parser')
        text = soup.get_text(separator='\n')
        if 'Les disciplines' in text or 'Equipement' in text or 'Règles de combat' in text:
            texts.append(text)
            
    with open('extracted_rules.txt', 'w', encoding='utf-8') as out:
        out.write('\n===\n'.join(texts))

if __name__ == "__main__":
    extract_epub()
