import os
import re

blog_dir = r"C:\IDE-PROJECTS\_Client-Work\hebewellness\src\app\blog"
articles = []

def strip_html(text):
    return re.sub(r'<[^>]*>', '', text)

for folder in os.listdir(blog_dir):
    folder_path = os.path.join(blog_dir, folder)
    if os.path.isdir(folder_path):
        page_path = os.path.join(folder_path, "page.tsx")
        if os.path.exists(page_path):
            with open(page_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Extract title and category
            title_match = re.search(r'title=["\'](.*?)["\']', content)
            category_match = re.search(r'category=["\'](.*?)["\']', content)
            
            # If not found using BlogTemplate, try h1
            if not title_match:
                title_match = re.search(r'<h1.*?>\s*(.*?)\s*</h1>', content, re.DOTALL)
            
            title = title_match.group(1) if title_match else folder.replace("-", " ").title()
            category = category_match.group(1) if category_match else "General"
            
            # Strip HTML from title
            title = strip_html(title)
            
            articles.append({
                "id": folder,
                "title": title.strip(),
                "category": category.strip()
            })

# Categorize articles
categories = {}
for art in articles:
    cat_name = art["category"]
    if cat_name not in categories:
        categories[cat_name] = []
    categories[cat_name].append(art)

# Sort categories and articles
sorted_cat_names = sorted(categories.keys())

# Generate TSX content
tsx_header = """\"use client\";

import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export default function BlogIndex() {
  const categories = [
"""

cat_entries = []
for cat_name in sorted_cat_names:
    color = "brand-neon" # Default
    if "Sleep" in cat_name: color = "blue"
    elif "Skin" in cat_name: color = "rose"
    elif "Hair" in cat_name: color = "amber"
    elif "Stress" in cat_name or "Nervous" in cat_name: color = "emerald"
    elif "Cellular" in cat_name: color = "purple"
    elif "Metabolic" in cat_name: color = "yellow"
    
    arts_str = ""
    for art in categories[cat_name]:
        # Escape double quotes in title
        safe_title = art["title"].replace('"', '\\"')
        arts_str += f'        {{ id: "{art["id"]}", title: "{safe_title}", time: "10 Min" }},\n'
    
    cat_entry = f"""    {{
      name: "{cat_name}",
      color: "{color}",
      articles: [
{arts_str}      ]
    }}"""
    cat_entries.append(cat_entry)

tsx_footer = """
  ];

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24 selection:bg-brand-neon/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-neon/10 border border-brand-neon/30 rounded-full mb-6">
            <BookOpen className="w-6 h-6 text-brand-neon" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">Intelligence <span className="text-brand-neon">Hub</span></h1>
          <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto font-light leading-relaxed">Highly actionable, science-backed protocols translated into accessible guides for immediate implementation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#121c17] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-neon/30 transition-colors">
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${cat.color}-500/10 blur-[50px] rounded-full`}></div>
               
               <h2 className={`text-2xl font-black text-white uppercase tracking-tighter mb-8 flex items-center`}>
                  <div className={`w-3 h-3 rounded-full bg-${cat.color === "brand-neon" ? "brand-neon" : cat.color + "-500"} mr-3`}></div>
                  {cat.name}
               </h2>

               <div className="space-y-4">
                  {cat.articles.map((art, j) => (
                     <Link key={j} href={`/blog/${art.id}`} className="block group bg-black/40 border border-white/5 p-5 rounded-xl hover:bg-white/5 transition-all">
                        <div className="flex justify-between items-center">
                           <h3 className="text-lg font-bold text-brand-cream/90 group-hover:text-brand-neon transition-colors">{art.title}</h3>
                           <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-neon transition-colors" />
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-xs font-mono text-brand-cream/40">
                           <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {art.time}</span>
                           <span className="flex items-center text-brand-neon/70"><Sparkles className="w-3 h-3 mr-1"/> Actionable Protocol</span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
"""

final_content = tsx_header + ",\n".join(cat_entries) + tsx_footer
with open(r"C:\IDE-PROJECTS\_Client-Work\hebewellness\src\app\blog\page.tsx", "w", encoding="utf-8") as f:
    f.write(final_content)
