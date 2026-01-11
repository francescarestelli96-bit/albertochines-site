'use client';
import { useLanguage } from "../../components/LanguageProvider";
import { Instagram, Facebook, Youtube, PlayCircle, Disc, Music2 } from "lucide-react";

const SocialIcon = ({ href, icon: Icon }: { href: string, icon: any }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-zinc-600 hover:text-white transition-colors duration-300"
  >
    <Icon size={32} strokeWidth={1} />
  </a>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-20 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-12">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] text-zinc-200">
          {t('contact.title')}
        </h1>
        
        <div className="py-10">
          <a 
            href="mailto:info@albertochines.com" 
            className="text-lg md:text-2xl font-extralight tracking-[0.1em] text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-2"
          >
            info@albertochines.com
          </a>
        </div>

        <div className="grid grid-cols-4 gap-8 md:gap-12 justify-items-center max-w-sm mx-auto pt-10">
          <SocialIcon href="https://spotify.com" icon={Disc} />
          <SocialIcon href="https://music.apple.com" icon={PlayCircle} />
          <SocialIcon href="https://soundcloud.com" icon={Music2} />
          <SocialIcon href="https://bandcamp.com" icon={Music2} />
          <SocialIcon href="https://youtube.com" icon={Youtube} />
          <SocialIcon href="https://instagram.com" icon={Instagram} />
          <SocialIcon href="https://facebook.com" icon={Facebook} />
        </div>
      </div>
    </main>
  );
}