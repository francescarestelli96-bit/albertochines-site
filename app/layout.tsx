import "./global.css"; 
import { LanguageProvider } from "../components/LanguageProvider";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-black text-white m-0 p-0 min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="relative z-10">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}