import os
import json
import re

paths = [
    r'C:\Users\herma\.gemini\antigravity\brain\e87da304-8819-4fb3-a12c-48b5716fd9b4\.system_generated\steps\74\output.txt',
    r'C:\Users\herma\.gemini\antigravity\brain\e87da304-8819-4fb3-a12c-48b5716fd9b4\.system_generated\steps\76\output.txt',
    r'C:\Users\herma\.gemini\antigravity\brain\e87da304-8819-4fb3-a12c-48b5716fd9b4\.system_generated\steps\78\output.txt'
]

output_dir = r'c:\Users\herma\Downloads\homes\scraped_data'
os.makedirs(output_dir, exist_ok=True)

all_items = []
for p in paths:
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
        # Find JSON array between ```json and ```
        m = re.search(r'```json\s*(.*?)\s*```', content, re.DOTALL)
        if m:
            json_str = m.group(1)
        else:
            json_str = content
        data = json.loads(json_str)
        all_items.extend(data)

print(f"Total pages/projects parsed: {len(all_items)}")

# Save full raw master dataset
with open(os.path.join(output_dir, 'all_site_data.json'), 'w', encoding='utf-8') as f:
    json.dump(all_items, f, indent=2)

# Separate into main pages, developments, and projects
main_pages = [i for i in all_items if i.get('type') in ('main', 'prototype')]
developments = [i for i in all_items if i.get('type') == 'development']
projects = [i for i in all_items if i.get('type') == 'project']

with open(os.path.join(output_dir, 'main_pages.json'), 'w', encoding='utf-8') as f:
    json.dump(main_pages, f, indent=2)

with open(os.path.join(output_dir, 'developments.json'), 'w', encoding='utf-8') as f:
    json.dump(developments, f, indent=2)

with open(os.path.join(output_dir, 'projects.json'), 'w', encoding='utf-8') as f:
    json.dump(projects, f, indent=2)

# Create a clean text summary of every page for redesign reference
md_lines = []
md_lines.append("# Ventura Custom Homes — Complete Scraped Content & Architecture Audit\n")
md_lines.append(f"**Website**: [https://venturacustomhomes.com/](https://venturacustomhomes.com/)\n")
md_lines.append(f"**Total Pages / Projects Scraped**: {len(all_items)}\n")
md_lines.append("## Overview Table\n")
md_lines.append("| Type | Name | URL | Headings | Images | Text Length |\n")
md_lines.append("|---|---|---|---|---|---|\n")

for i in all_items:
    name = i.get('name', '')
    url = i.get('url', '')
    itype = i.get('type', '')
    h_count = len(i.get('headings', []))
    img_count = len(i.get('images', []))
    t_len = len(i.get('text', ''))
    md_lines.append(f"| {itype} | {name} | [{url}]({url}) | {h_count} | {img_count} | {t_len} chars |\n")

md_lines.append("\n---\n")

for i in all_items:
    name = i.get('name', '')
    url = i.get('url', '')
    itype = i.get('type', '')
    title = i.get('title', '')
    desc = i.get('desc', '')
    headings = [f"- {h['tag'].upper()}: {h['text']}" for h in i.get('headings', [])]
    images = i.get('images', [])
    text = i.get('text', '')

    md_lines.append(f"\n## {name}\n")
    md_lines.append(f"- **URL**: {url}\n")
    md_lines.append(f"- **Type**: {itype}\n")
    md_lines.append(f"- **Meta Title**: {title}\n")
    md_lines.append(f"- **Meta Description**: {desc}\n")
    
    if headings:
        md_lines.append(f"\n### Headings ({len(headings)}):\n" + "\n".join(headings[:15]) + "\n")
        if len(headings) > 15:
            md_lines.append(f"... and {len(headings) - 15} more headings\n")

    if images:
        md_lines.append(f"\n### Key Images ({len(images)} found):\n")
        for img in images[:10]:
            md_lines.append(f"- {img}\n")
        if len(images) > 10:
            md_lines.append(f"- *...and {len(images) - 10} more images*\n")

    md_lines.append(f"\n### Extracted Body Text:\n```\n{text.strip()}\n```\n")
    md_lines.append("\n---\n")

summary_path = os.path.join(r'c:\Users\herma\Downloads\homes', 'SITE_CONTENT_AUDIT.md')
with open(summary_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(md_lines))

print(f"Saved master files and summary to {summary_path}")
