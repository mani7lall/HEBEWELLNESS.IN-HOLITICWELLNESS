import os
import re

root_dir = r'C:\IDE-PROJECTS\_Client-Work\hebewellness\src'

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return

    original_content = content

    # Fix: If a file contains g-[#050807] or g-slate-900 but doesn't have dark:bg-, let's just make the text 	ext-white if it has 	ext-brand-dark dark:text-white
    # Actually, it's safer to just fix specific known bad backgrounds.
    
    # 1. Fix the dark backgrounds to be adaptive so 	ext-brand-dark dark:text-white works!
    content = content.replace('bg-[#050807]', 'bg-slate-50 dark:bg-[#050807]')
    content = content.replace('bg-slate-900 ', 'bg-slate-100 dark:bg-slate-900 ')
    content = content.replace('bg-zinc-900 ', 'bg-zinc-100 dark:bg-zinc-900 ')
    
    # 2. Fix the text classes on the dark image hero sections.
    # If we find 	ext-brand-dark dark:text-white inside a g-[url section, we can't easily parse that in python.
    # But we can fix the obvious ones.
    content = content.replace('text-brand-dark dark:text-white', 'text-brand-dark dark:text-brand-cream')
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            fix_file(os.path.join(root, file))
