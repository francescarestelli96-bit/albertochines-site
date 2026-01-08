import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export const metadata = {
  title: "Alberto Chines — Pianist",
  description: "Official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-black text-white">
        <LanguageProvider>
          <div className="min-h-screen bg-noise">
            <Header />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
