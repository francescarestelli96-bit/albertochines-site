'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function RepertorioPage() {
  const { t } = useLanguage();

  const composersSolo = [
    { name: "Thomas Adès", key: "ades" }, { name: "Carl Philipp Emanuel Bach", key: "cpebach" },
    { name: "Johann Christian Bach", key: "jcbach" }, { name: "Johann Sebastian Bach", key: "jsbach" },
    { name: "Béla Bartók", key: "bartok" }, { name: "Jerzy Bauer", key: "bauer" },
    { name: "Ludwig van Beethoven", key: "beethoven" }, { name: "Pierre Boulez", key: "boulez" },
    { name: "Johannes Brahms", key: "brahms" }, { name: "William Byrd", key: "byrd" },
    { name: "John Cage", key: "cage" }, { name: "Elliott Carter", key: "carter" },
    { name: "Alfredo Casella", key: "casella" }, { name: "Fryderyk Chopin", key: "chopin" },
    { name: "Muzio Clementi", key: "clementi" }, { name: "Claude Debussy", key: "debussy" },
    { name: "Antonin Dvořák", key: "dvorak" }, { name: "César Franck", key: "franck" },
    { name: "Girolamo Frescobaldi", key: "frescobaldi" }, { name: "Carlo Galante", key: "galante" },
    { name: "Gentle Giant", key: "giant" }, { name: "Carlo Gesualdo", key: "gesualdo" },
    { name: "Louis Moreau Gottschalk", key: "gottschalk" }, { name: "Franz Josef Haydn", key: "haydn" },
    { name: "Henri Herz", key: "herz" }, { name: "Paul Hindemith", key: "hindemith" },
    { name: "György Ligeti", key: "ligeti" }, { name: "Franz Liszt", key: "liszt" },
    { name: "Felix Mendelssohn", key: "mendelssohn" }, { name: "Roberto Molinelli", key: "molinelli" },
    { name: "Wolfgang Amadeus Mozart", key: "mozart" }, { name: "Arvo Pärt", key: "part" },
    { name: "Sergei Prokofiev", key: "prokofiev" }, { name: "Jean-Philippe Rameau", key: "rameau" },
    { name: "Maurice Ravel", key: "ravel" }, { name: "Wolfgang Rihm", key: "rihm" },
    { name: "Camille Saint-Saens", key: "saintsaens" }, { name: "Domenico Scarlatti", key: "scarlatti" },
    { name: "Alfred Schnittke", key: "schnittke" }, { name: "Arnold Schönberg", key: "schonberg" },
    { name: "Franz Schubert", key: "schubert" }, { name: "Robert Schumann", key: "schumann" },
    { name: "Salvatore Sciarrino", key: "sciarrino" }, { name: "Orazio Sciortino", key: "sciortino" },
    { name: "Alexander Scriabin", key: "scriabin" }, { name: "Dmitri Shostakovich", key: "shostakovich" },
    { name: "Bedřich Smetana", key: "smetana" }, { name: "Antonio Soler", key: "soler" },
    { name: "Igor Stravinskij", key: "stravinsky" }, { name: "Jan Pieterszoon Sweelinck", key: "sweelinck" },
    { name: "Pyotr Ilyich Tchaikovsky", key: "tchaikovsky" }, { name: "Carl Maria von Weber", key: "weber" }
  ];

  const composersOrch = [
    { name: "Johann Sebastian Bach", key: "orch_bach" }, { name: "Béla Bartók", key: "orch_bartok" },
    { name: "Ludwig van Beethoven", key: "orch_beethoven" }, { name: "Franz Liszt", key: "orch_liszt" },
    { name: "Felix Mendelssohn", key: "orch_mendelssohn" }, { name: "Wolfgang Amadeus Mozart", key: "orch_mozart" },
    { name: "Sergei Vasilyevic Rachmaninov", key: "orch_rach" }
  ];

  const renderSection = (title: string, list: any[]) => (
    <div className="mb-32 max-w-4xl">
      <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.3em] mb-12 border-b border-white/10 pb-4 text-zinc-400">
        {title}
      </h2>
      <div className="space-y-12">
        {list.map((item) => (
          <div key={item.key} className="group border-l border-white/5 pl-8 hover:border-white/30 transition-all">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-zinc-200 mb-3 group-hover:text-white transition-colors">
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
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em] mb-24 text-left">
          {t('repertorio.title')}
        </h1>
        {renderSection(t('repertorio.soloChamber'), composersSolo)}
        {renderSection(t('repertorio.orchestra'), composersOrch)}
      </div>
    </main>
  );
}