import "./globals.css";

export const metadata = {
  title: "Devcoin",
  description: "Faça transações com a segurança da blockchain",
  keywords: 'crypto, devcoin, blockchain',
  author: 'Gabdev',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
