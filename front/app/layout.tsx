import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EvoluTEA - Desenvolvendo o potencial de crianças com TEA",
  description: "A EvoluTEA é uma plataforma dedicada ao desenvolvimento de crianças com Transtorno do Espectro Autista (TEA), oferecendo suporte por meio de conteúdos estruturados, orientações práticas e recursos acessíveis para famílias e profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.className} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-gray-800">
        {children}
      </body>
    </html>
  );
}
