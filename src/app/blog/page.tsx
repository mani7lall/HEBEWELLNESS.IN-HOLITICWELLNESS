import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scientific Intelligence | Hebe Wellness",
  description: "Explore the clinical dossiers, protocols, and architectural biology behind our formulations.",
};

export default function BlogIndex() {
  const featuredPosts = [
    {
      slug: "endocannabinoid-system",
      title: "The Endocannabinoid System: Your Body's Master Regulator",
      category: "Biology",
      summary: "A deep dive into the biological architecture that makes CBD's effects possible and why the Himalayan provenance matters.",
      readTime: "8 min read"
    },
    {
      slug: "sleep-architecture",
      title: "Sleep Architecture Optimization: The Hebe Protocol",
      category: "Neuroscience",
      summary: "How strategic CBD timing, circadian biology, and Ayurvedic sleep rituals combine to unlock deep restorative sleep.",
      readTime: "12 min read"
    },
    {
      slug: "ayurveda-biotech",
      title: "Ayurveda Meets Biotech: The Alchemy of Himalayan Vijaya",
      category: "Biotech",
      summary: "Discover how ancient Ayurvedic extraction methods are being enhanced by modern supercritical CO2 technology.",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen pt-32 pb-24 text-sage-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-earth-500 font-medium tracking-[0.2em] text-sm mb-4 block uppercase">The Journal</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sage-950 mb-6">Scientific Intelligence.</h1>
          <p className="text-xl text-sage-900/70 max-w-2xl font-light">
            Peer-reviewed insights, clinical protocols, and the fusion of Vedic wisdom with contemporary biotechnology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white p-8 rounded-3xl border border-sage-900/5 hover:border-sage-900/20 transition-all hover:shadow-xl hover:shadow-sage-900/5 h-full">
              <div className="flex justify-between items-center mb-6">
                <span className="text-earth-500 text-xs font-medium tracking-widest uppercase">{post.category}</span>
                <span className="text-sage-900/50 text-xs">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-serif text-sage-950 mb-4 group-hover:text-sage-700 transition-colors">{post.title}</h2>
              <p className="text-sage-900/70 text-sm leading-relaxed flex-grow">{post.summary}</p>
              <div className="mt-8 text-sage-700 font-medium tracking-wider text-sm group-hover:text-earth-500 uppercase transition-colors">
                Read Dossier &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
