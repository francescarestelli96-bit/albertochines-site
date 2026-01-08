// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Alberto Chines",
  description: "Official site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-neutral-950 text-neutral-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
