import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Almeida & Ramos Advocacia | Atendimento Jurídico",
  description: "Advocacia estratégica, ética e humanizada. Atendimento presencial e online em todo o Brasil.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
