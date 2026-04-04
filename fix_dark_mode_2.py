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
    # Handle end of string, and space before or after
    new_content = re.sub(r'\s*dark:text-brand-dark\s*', ' ', content)
    
    # Also replace multiple spaces with a single space
    new_content = re.sub(r' +', ' ', new_content)
    # Be careful not to break other strings. Actually replacing  dark:text-brand-dark is safer
    
    # Let's just do a simple replace of 'dark:text-brand-dark' to ''
    # since we already removed the ones with spaces, what's left might have quotes around it.
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

# We will read each file, check if dark:text-brand-dark is in it, and replace
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                c = f.read()
            if 'dark:text-brand-dark' in c:
                nc = c.replace('dark:text-brand-dark', '')
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(nc)
