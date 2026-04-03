import os

blog_dir = r"C:\IDE-PROJECTS\_Client-Work\hebewellness\src\app\blog"

for root, dirs, files in os.walk(blog_dir):
    for file in files:
        if file == "page.tsx":
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Remove escaped quotes
            new_content = content.replace('\\"', '"')
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Fixed: {path}")
