'use client';
import { useLanguage } from "../../components/LanguageProvider";
import { Instagram, Facebook, Youtube, PlayCircle, Disc } from "lucide-react";

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300">
    <Icon size={28} strokeWidth={1.2} />
    <span className="text-[8px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </a>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('contact.title')}
        </h1>
        
        <div className="mb-20">
          <p className="text-xs font-light tracking-[0.2em] text-zinc-500 uppercase italic mb-4">Inquiries</p>
          <a href="mailto:info@albertochines.com" className="text-xl md:text-4xl font-extralight hover:text-zinc-400 transition-colors">
            info@albertochines.com
          </a>
        </div>

        <div className="grid grid-cols-3 md:flex md:justify-center gap-y-10 md:gap-14 py-10 border-t border-white/5">
          <SocialLink href="https://open.spotify.com/artist/4X9iXW3p5C9uWz7wWz8Z3h" icon={Disc} label="Spotify" />
          <SocialLink href="https://music.apple.com/us/artist/alberto-chines/1482907646" icon={PlayCircle} label="Apple" />
          <SocialLink href="https://www.youtube.com/@albertochines" icon={Youtube} label="YouTube" />
          <SocialLink href="https://www.instagram.com/albertochines" icon={Instagram} label="Instagram" />
          <SocialLink href="https://www.facebook.com/albertochines" icon={Facebook} label="Facebook" />
        </div>
      </div>
    </main>
  );
}