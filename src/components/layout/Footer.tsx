import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-sand-50/60 py-16 border-t border-sage-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="text-2xl font-serif text-sand-50 mb-6">HEBE WELLNESS</div>
          <p className="max-w-xs mb-8">Pioneering the future of cellular longevity through Swiss biotechnology and Vedic wisdom.</p>
        </div>
        <div>
          <h4 className="text-sand-50 font-medium mb-6 uppercase tracking-wider text-sm">Biological Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/blog" className="hover:text-white transition-colors">Scientific Intelligence</Link></li>
            <li><Link href="/science" className="hover:text-white transition-colors">Clinical Dossiers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Bio-Age Calculator</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sleep Quality Quiz</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sand-50 font-medium mb-6 uppercase tracking-wider text-sm">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
