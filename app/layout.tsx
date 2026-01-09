import "./global.css"; 
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
      <body className="bg-neutral-950 text-white">
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}