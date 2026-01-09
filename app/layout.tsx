import "./global.css";

export const metadata = {
  title: "Alberto Chines",
  description: "Pianist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ backgroundColor: '#0a0a0a', color: 'white', margin: 0, minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}