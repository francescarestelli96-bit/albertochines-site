'use client';
import { useLanguage } from "../../components/LanguageProvider";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Music2 // Per Spotify/Apple Music usiamo icone generiche o Lucide
} from "lucide-react";

// Componente per le icone social stilizzate
const SocialLink = ({ href, icon: Icon }: { href: string, icon: any }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-zinc-500 hover:text-white transition-colors duration-300"
  >
    <Icon size={32} strokeWidth={1.5} />
  </a>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('contact.title')}
        </h1>
        
        {/* Sezione Email */}
        <div className="space-y-4 mb-20">
          <p className="text-sm font-light tracking-[0.2em] text-zinc-500 uppercase italic">
            General Inquiries
          </p>
          <a 
            href="mailto:info@albertochines.com" 
            className="text-2xl md:text-4xl font-extralight tracking-tight hover:text-zinc-400 transition-colors duration-300 block"
          >
            info@albertochines.com
          </a>
        </div>

        {/* Sezione Icone Social (Stile Eugenio Della Chiara) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 py-10 border-t border-white/5">
          <SocialLink href="https://open.spotify.com/artist/your-id" icon={Music2} />
          <SocialLink href="https://music.apple.com/artist/your-id" icon={Music2} />
          <SocialLink href="https://www.youtube.com/@albertochines" icon={Youtube} />
          <SocialLink href="https://www.instagram.com/albertochines" icon={Instagram} />
          <SocialLink href="https://www.facebook.com/albertochines" icon={Facebook} />
        </div>
      </div>
    </main>
  );
}