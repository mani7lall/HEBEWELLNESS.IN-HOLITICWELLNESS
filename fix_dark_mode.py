import os
import re

root_dir = r'C:\IDE-PROJECTS\_Client-Work\hebewellness\src'

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return

    # Replace the duplicate dark:text-brand-dark
    new_content = content.replace('dark:text-brand-dark ', '')

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            fix_file(os.path.join(root, file))
