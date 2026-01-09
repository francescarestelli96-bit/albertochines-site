import "../app/globals.css"; // Percorso corretto per trovare il CSS
import { LanguageProvider } from "../components/LanguageProvider";
import Header from "../components/Header";

export const metadata = {
  title: 'Alberto Chines | Pianista',
  description: 'Sito ufficiale del pianista Alberto Chines',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-neutral-950">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}