'use client';
import { useLanguage } from "../../components/LanguageProvider";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  PlayCircle, // Usiamo questo per Apple Music
  Disc // Usiamo questo per Spotify
} from "lucide-react";

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
    title={label}
  >
    <Icon size={32} strokeWidth={1.2} />
    <span className="text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
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

        {/* Icone Social con link reali */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14 mt-12 py-10 border-t border-white/5">
          <SocialLink 
            href="https://open.spotify.com/artist/5Kms3vN0iN6zAn0I8A8XGv" 
            icon={Disc} 
            label="Spotify" 
          />
          <SocialLink 
            href="https://music.apple.com/us/artist/alberto-chines/1482907646" 
            icon={PlayCircle} 
            label="Apple Music" 
          />
          <SocialLink 
            href="https://www.youtube.com/@albertochines" 
            icon={Youtube} 
            label="YouTube" 
          />
          <SocialLink 
            href="https://www.instagram.com/albertochines" 
            icon={Instagram} 
            label="Instagram" 
          />
          <SocialLink 
            href="https://www.facebook.com/albertochines" 
            icon={Facebook} 
            label="Facebook" 
          />
        </div>
      </div>
    </main>
  );
}