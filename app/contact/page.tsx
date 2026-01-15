'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 flex items-center justify-center animate-in fade-in duration-1000">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] mb-20 opacity-80">
          {t('contact.title')}
        </h1>
        
        <div className="space-y-16">
          <a href="mailto:info@albertochines.com" className="text-xl md:text-3xl font-light border-b border-zinc-800 pb-2 hover:text-zinc-400 transition-colors">
            info@albertochines.com
          </a>

          <div className="flex justify-center gap-10 pt-10">
            {/* Spotify SVG */}
            <a href="#" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.218.358-.684.471-1.042.254-2.856-1.745-6.452-2.14-10.686-1.171-.41.094-.82-.163-.914-.574-.094-.411.163-.82.574-.914 4.63-1.059 8.604-.613 11.784 1.332.357.218.47.684.254 1.042zm1.468-3.26c-.274.446-.856.59-1.302.316-3.27-2.01-8.252-2.592-12.119-1.417-.5.152-1.026-.134-1.178-.634-.152-.5.134-1.026.634-1.178 4.417-1.34 9.907-.7 13.649 1.603.447.274.59.856.316 1.31zm.126-3.39c-3.922-2.329-10.378-2.544-14.126-1.405-.601.183-1.243-.162-1.426-.763-.183-.601.162-1.243.763-1.426 4.303-1.307 11.432-1.048 15.962 1.641.54.32.716 1.014.397 1.554-.32.541-1.015.717-1.554.398z"/></svg>
            </a>
            {/* YouTube SVG */}
            <a href="#" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* Instagram SVG */}
            <a href="https://instagram.com/albertochines" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324A4.162 4.162 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}