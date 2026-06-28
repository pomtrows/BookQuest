import pymupdf
import re

pdf_path = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945\media__1782643380600.pdf"

doc = pymupdf.open(pdf_path)

current_section = None
sections_with_images = []

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    
    # Try to find section headers on this page
    # Look for a number on its own line
    matches = re.findall(r'(?:^|\n)\s*(\d{1,3})\s*(?:\n|$)', text)
    if matches:
        # The last matched section on this page or the first one?
        # Usually an image is placed near the section it belongs to.
        # Let's just record the first section found on the page or the current_section if none found before the image.
        pass
    
    for match in matches:
        current_section = match
        
    image_list = page.get_images(full=True)
    
    # Filter out very small images (like icons or artifacts)
    valid_images = []
    for img in image_list:
        xref = img[0]
        base_image = doc.extract_image(xref)
        if base_image:
            w = base_image.get("width", 0)
            h = base_image.get("height", 0)
            if w > 100 and h > 100: # Filter small decorations
                valid_images.append(img)
                
    if valid_images:
        print(f"Page {page_num + 1} has {len(valid_images)} images. Context sections: {matches}. Current active section: {current_section}")
        if current_section and current_section not in sections_with_images:
            sections_with_images.append(current_section)

print("Sections with images:", sections_with_images)
