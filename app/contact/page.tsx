"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-light uppercase tracking-tighter">
          {t('contact.title')}
        </h1>
        <div className="space-y-4 text-xl font-light">
          <p>Email: <a href="mailto:info@albertochines.com" className="border-b border-white/20 hover:border-white transition-colors">info@albertochines.com</a></p>
        </div>
      </div>
    </main>
  );
}