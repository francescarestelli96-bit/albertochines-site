'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function RepertorioPage() {
  const { t } = useLanguage();

  // Elenco completo dei compositori per la sezione Solistica/Cameristica
  const composersSolo = [
    { name: "Thomas Adès", key: "ades" },
    { name: "Carl Philipp Emanuel Bach", key: "cpebach" },
    { name: "Johann Christian Bach", key: "jcbach" },
    { name: "Johann Sebastian Bach", key: "jsbach" },
    { name: "Béla Bartók", key: "bartok" },
    { name: "Jerzy Bauer", key: "bauer" },
    { name: "Ludwig van Beethoven", key: "beethoven" },
    { name: "Pierre Boulez", key: "boulez" },
    { name: "Johannes Brahms", key: "brahms" },
    { name: "William Byrd", key: "byrd" },
    { name: "John Cage", key: "cage" },
    { name: "Elliott Carter", key: "carter" },
    { name: "Alfredo Casella", key: "casella" },
    { name: "Fryderyk Chopin", key: "chopin" },
    { name: "Muzio Clementi", key: "clementi" },
    { name: "Claude Debussy", key: "debussy" },
    { name: "Antonin Dvořák", key: "dvorak" },
    { name: "César Franck", key: "franck" },
    { name: "Girolamo Frescobaldi", key: "frescobaldi" },
    { name: "Carlo Galante", key: "galante" },
    { name: "Gentle Giant", key: "giant" },
    { name: "Carlo Gesualdo", key: "gesualdo" },
    { name: "Louis Moreau Gottschalk", key: "gottschalk" },
    { name: "Franz Josef Haydn", key: "haydn" },
    { name: "Henri Herz", key: "herz" },
    { name: "Paul Hindemith", key: "hindemith" },
    { name: "György Ligeti", key: "ligeti" },
    { name: "Franz Liszt", key: "liszt" },
    { name: "Felix Mendelssohn", key: "mendelssohn" },
    { name: "Roberto Molinelli", key: "molinelli" },
    { name: "Wolfgang Amadeus Mozart", key: "mozart" },
    { name: "Arvo Pärt", key: "part" },
    { name: "Sergei Prokofiev", key: "prokofiev" },
    { name: "Jean-Philippe Rameau", key: "rameau" },
    { name: "Maurice Ravel", key: "ravel" },
    { name: "Wolfgang Rihm", key: "rihm" },
    { name: "Camille Saint-Saens", key: "saintsaens" },
    { name: "Domenico Scarlatti", key: "scarlatti" },
    { name: "Alfred Schnittke", key: "schnittke" },
    { name: "Arnold Schönberg", key: "schonberg" },
    { name: "Franz Schubert", key: "schubert" },
    { name: "Robert Schumann", key: "schumann" },
    { name: "Salvatore Sciarrino", key: "sciarrino" },
    { name: "Orazio Sciortino", key: "sciortino" },
    { name: "Alexander Scriabin", key: "scriabin" },
    { name: "Dmitri Shostakovich", key: "shostakovich" },
    { name: "Bedřich Smetana", key: "smetana" },
    { name: "Antonio Soler", key: "soler" },
    { name: "Igor Stravinskij", key: "stravinsky" },
    { name: "Jan Pieterszoon Sweelinck", key: "sweelinck" },
    { name: "Pyotr Ilyich Tchaikovsky", key: "tchaikovsky" },
    { name: "Carl Maria von Weber", key: "weber" }
  ];

  // Elenco per la sezione con Orchestra
  const composersOrch = [
    { name: "Johann Sebastian Bach", key: "orch_bach" },
    { name: "Béla Bartók", key: "orch_bartok" },
    { name: "Ludwig van Beethoven", key: "orch_beethoven" },
    { name: "Franz Liszt", key: "orch_liszt" },
    { name: "Felix Mendelssohn", key: "orch_mendelssohn" },
    { name: "Wolfgang Amadeus Mozart", key: "orch_mozart" },
    { name: "Sergei Vasilyevic Rachmaninov", key: "orch_rach" }
  ];

  const renderSection = (title: string, list: any[]) => (
    <div className="mb-32">
      <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.3em] mb-16 border-b border-white/10 pb-6 text-zinc-400">
        {title}
      </h2>
      {/* Layout a due colonne su desktop, singola su mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {list.map((item) => (
          <div key={item.key} className="flex flex-col border-l border-white/5 pl-6 hover:border-white/20 transition-colors">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white mb-4">
              {item.name}
            </h3>
            <div className="text-zinc-500 text-xs md:text-sm font-extralight leading-relaxed whitespace-pre-line italic">
              {t(`repertorio.content.${item.key}`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em] mb-24 border-b border-white/10 pb-8 text-left">
          {t('repertorio.title')}
        </h1>

        {renderSection(t('repertorio.soloChamber'), composersSolo)}
        {renderSection(t('repertorio.orchestra'), composersOrch)}
      </div>
    </main>
  );
}