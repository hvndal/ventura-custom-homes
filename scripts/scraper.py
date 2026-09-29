import os
import json
import re
import urllib.request
import urllib.error
import urllib.parse
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.fed = []
        self.ignore_tags = {'script', 'style', 'noscript', 'svg'}
        self.current_ignore = 0

    def handle_starttag(self, tag, attrs):
        if tag.lower() in self.ignore_tags:
            self.current_ignore += 1

    def handle_endtag(self, tag):
        if tag.lower() in self.ignore_tags:
            self.current_ignore = max(0, self.current_ignore - 1)

    def handle_data(self, d):
        if self.current_ignore == 0:
            text = d.strip()
            if text:
                self.fed.append(text)

    def get_text(self):
        return "\n".join(self.fed)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

PAGES = [
    {"name": "Home", "url": "https://venturacustomhomes.com/", "type": "main"},
    {"name": "About", "url": "https://venturacustomhomes.com/about/", "type": "main"},
    {"name": "Recognition", "url": "https://venturacustomhomes.com/recognition/", "type": "main"},
    {"name": "Portfolio", "url": "https://venturacustomhomes.com/portfolio/", "type": "main"},
    {"name": "Why Frisco", "url": "https://venturacustomhomes.com/why-frisco/", "type": "development"},
    {"name": "The Preserve", "url": "https://venturacustomhomes.com/the-preserve/", "type": "development"},
    {"name": "Hills of Kingswood", "url": "https://venturacustomhomes.com/hilllsofkingswood/", "type": "development"},
    {"name": "Hills of Kingswood Specs", "url": "https://venturacustomhomes.com/hillsofkingswoodspecs/", "type": "development"},
    {"name": "Available Homes", "url": "https://venturacustomhomes.com/available-homes/", "type": "main"},
    {"name": "Lakes of Legacy Frisco", "url": "https://venturacustomhomes.com/lakes-of-legacy-frisco/", "type": "development"},
    {"name": "Contact Us", "url": "https://venturacustomhomes.com/contact-us/", "type": "main"},
    {"name": "Careers", "url": "https://venturacustomhomes.com/careers/", "type": "main"},
    {"name": "Prototype A", "url": "https://venturacustomhomes.com/prototype-a/", "type": "prototype"},
    
    # Portfolio Projects
    {"name": "Project: Harrods Court", "url": "https://venturacustomhomes.com/project/harrods-court/", "type": "project"},
    {"name": "Project: Sky Lake Drive", "url": "https://venturacustomhomes.com/project/sky-lake-drive/", "type": "project"},
    {"name": "Project: McFarland Drive", "url": "https://venturacustomhomes.com/project/mcfarland-drive/", "type": "project"},
    {"name": "Project: North Forty Place", "url": "https://venturacustomhomes.com/project/north-forty-place/", "type": "project"},
    {"name": "Project: North Dallas", "url": "https://venturacustomhomes.com/project/north-dallas/", "type": "project"},
    {"name": "Project: Silver Lake Drive", "url": "https://venturacustomhomes.com/project/silver-lake-drive/", "type": "project"},
    {"name": "Project: Forest Glen Drive", "url": "https://venturacustomhomes.com/project/forest-glen-drive/", "type": "project"},
    {"name": "Project: Preston Hollow", "url": "https://venturacustomhomes.com/project/preston-hollow/", "type": "project"},
    {"name": "Project: Beverly Two", "url": "https://venturacustomhomes.com/project/beverly-two/", "type": "project"},
    {"name": "Project: Touraine Drive", "url": "https://venturacustomhomes.com/project/touraine-drive/", "type": "project"},
    {"name": "Project: Hidalgo Lane", "url": "https://venturacustomhomes.com/project/hidalgo-lane/", "type": "project"},
    {"name": "Project: Beverly One", "url": "https://venturacustomhomes.com/project/beverlyone/", "type": "project"},
    {"name": "Project: Belclaire Avenue", "url": "https://venturacustomhomes.com/project/belclaire-avenue/", "type": "project"},
    {"name": "Project: Santa Bella", "url": "https://venturacustomhomes.com/project/santa-bella/", "type": "project"},
    {"name": "Project: Aspen", "url": "https://venturacustomhomes.com/project/aspen/", "type": "project"},
    {"name": "Project: Santa Barbara Modern", "url": "https://venturacustomhomes.com/project/santabarbaramodern/", "type": "project"},
    {"name": "Project: Manhattan Penthouse", "url": "https://venturacustomhomes.com/project/manhattanpenthouse/", "type": "project"},
    {"name": "Project: Miami Contemporary", "url": "https://venturacustomhomes.com/project/miamicontemporary/", "type": "project"},
    {"name": "Project: Dubai Chic", "url": "https://venturacustomhomes.com/project/dubaichic/", "type": "project"},
    {"name": "Project: Newport Coastal", "url": "https://venturacustomhomes.com/project/newportcoastal/", "type": "project"}
]

def fetch_page(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_meta(html):
    meta = {}
    title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    if title_match:
        meta['title'] = title_match.group(1).strip()
    
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE | re.DOTALL)
    if not desc_match:
        desc_match = re.search(r'<meta\s+content=["\'](.*?)["\']\s+name=["\']description["\']', html, re.IGNORECASE | re.DOTALL)
    if desc_match:
        meta['description'] = desc_match.group(1).strip()

    # Extract all high-res wp-content images
    img_matches = re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html, re.IGNORECASE)
    # Filter to unique images, clean up url query params for deduplication
    clean_imgs = []
    seen = set()
    for img in img_matches:
        base_img = img.split('?')[0]
        if 'wp-content/uploads' in base_img and base_img not in seen:
            seen.add(base_img)
            clean_imgs.append(base_img)
    meta['images'] = clean_imgs
    return meta

def extract_body_text(html):
    # Try finding ajax-content-wrap or main body
    body_match = re.search(r'<div id="ajax-content-wrap"[^>]*>(.*?)<div id="footer-outer"', html, re.DOTALL | re.IGNORECASE)
    content = body_match.group(1) if body_match else html
    extractor = TextExtractor()
    extractor.feed(content)
    text = extractor.get_text()
    # Clean up whitespace
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    return "\n".join(lines)

def main():
    base_dir = r"c:\Users\herma\Downloads\homes\scraped_data"
    raw_html_dir = os.path.join(base_dir, "raw_html")
    os.makedirs(raw_html_dir, exist_ok=True)

    results = []

    print(f"Starting scrape of {len(PAGES)} pages...")
    for idx, page in enumerate(PAGES, 1):
        slug = page['url'].rstrip('/').split('/')[-1] or "home"
        if page['type'] == 'project':
            slug = f"project_{slug}"
        print(f"[{idx}/{len(PAGES)}] Fetching {page['name']} ({page['url']})...")

        html = fetch_page(page['url'])
        if not html:
            continue

        raw_file = os.path.join(raw_html_dir, f"{slug}.html")
        with open(raw_file, "w", encoding="utf-8") as f:
            f.write(html)

        meta = extract_meta(html)
        body_text = extract_body_text(html)

        page_data = {
            "name": page['name'],
            "url": page['url'],
            "type": page['type'],
            "slug": slug,
            "title": meta.get('title', ''),
            "description": meta.get('description', ''),
            "images_count": len(meta.get('images', [])),
            "images": meta.get('images', []),
            "content_preview": body_text[:600],
            "full_text": body_text
        }
        results.append(page_data)

    # Save pages.json
    pages_json_path = os.path.join(base_dir, "pages.json")
    with open(pages_json_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    # Separate projects and developments
    projects = [p for p in results if p['type'] == 'project']
    with open(os.path.join(base_dir, "projects.json"), "w", encoding="utf-8") as f:
        json.dump(projects, f, indent=2)

    print(f"\nDone! Scraped {len(results)} pages successfully.")
    print(f"Data saved to: {base_dir}")

if __name__ == '__main__':
    main()
