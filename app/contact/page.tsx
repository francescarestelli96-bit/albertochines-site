'use client';
import { useLanguage } from "../../components/LanguageProvider";
import { Instagram, Facebook, Youtube, PlayCircle } from "lucide-react";

// Icona Spotify Ufficiale
const SpotifyIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.306c-.215.353-.674.464-1.027.249-2.846-1.739-6.429-2.132-10.648-1.169-.404.093-.81-.16-.902-.564-.093-.404.16-.81.564-.902 4.614-1.055 8.583-.605 11.763 1.338.353.215.464.674.249 1.027zm1.467-3.26c-.271.441-.845.578-1.286.307-3.257-1.999-8.225-2.584-12.08-1.414-.495.15-1.021-.13-1.171-.625-.15-.495.13-1.021.625-1.171 4.407-1.337 9.89-.675 13.606 1.61.44.271.577.846.306 1.286zm.126-3.414C15.022 8.164 8.29 7.94 4.398 9.121c-.606.184-1.248-.162-1.432-.768-.184-.606.162-1.248.768-1.432 4.46-1.354 11.905-1.096 16.635 1.711.545.324.726 1.028.402 1.573-.323.545-1.028.726-1.572.402z"/>
  </svg>
);

const SocialIcon = ({ href, icon: Icon, isSpotify = false }: { href: string, icon?: any, isSpotify?: boolean }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-zinc-600 hover:text-white transition-colors duration-300 flex items-center justify-center"
  >
    {isSpotify ? <SpotifyIcon size={32} /> : <Icon size={32} strokeWidth={1} />}
  </a>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-20 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-12 animate-in fade-in duration-1000">
        
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

        {/* Griglia ridotta a 5 elementi: Spotify, Apple Music, Youtube, Instagram, Facebook */}
        <div className="grid grid-cols-5 gap-6 md:gap-10 justify-items-center w-full max-w-xl mx-auto pt-10">
          <SocialIcon href="https://spotify.com0" isSpotify={true} />
          <SocialIcon href="https://music.apple.com" icon={PlayCircle} />
          <SocialIcon href="https://youtube.com" icon={Youtube} />
          <SocialIcon href="https://instagram.com" icon={Instagram} />
          <SocialIcon href="https://facebook.com" icon={Facebook} />
        </div>

      </div>
    </main>
  );
}