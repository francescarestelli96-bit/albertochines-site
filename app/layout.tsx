import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alberto Chines",
  description: "Pianist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className} style={{ backgroundColor: '#0a0a0a', color: 'white', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}