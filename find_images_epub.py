import zipfile
from bs4 import BeautifulSoup
import re

epub_path = "Loup Solitaire 01 - Beetlejuice.epub"
section_images = {}

try:
    with zipfile.ZipFile(epub_path, 'r') as archive:
        for item in archive.namelist():
            if item.endswith('.xhtml') or item.endswith('.html'):
                content = archive.read(item).decode('utf-8')
                soup = BeautifulSoup(content, 'html.parser')
                
                # Check for images
                imgs = soup.find_all('img')
                if imgs:
                    # Find section number (usually in a heading or id)
                    # We can try to extract number from text
                    # Example: <h2 id="sect1">1</h2>
                    h2s = soup.find_all(['h2', 'h3', 'h1'])
                    for h in h2s:
                        text = h.get_text(strip=True)
                        if text.isdigit():
                            section_images[text] = [img.get('src') for img in imgs]
                            break
                    else:
                        # try looking for section names in filename
                        match = re.search(r'sect(\d+)', item)
                        if match:
                            section_images[match.group(1)] = [img.get('src') for img in imgs]
                        else:
                            # print(f"Found images in {item} but couldn't find section number")
                            pass
                            
except Exception as e:
    print("Error:", e)

for k in sorted(section_images.keys(), key=lambda x: int(x)):
    print(f"Section {k} has image(s): {section_images[k]}")
