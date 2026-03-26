import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/ui/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EvoluTEA: Desenvolvendo o potencial de crianças com TEA",
  description: "A EvoluTEA é uma plataforma dedicada ao desenvolvimento de crianças com Transtorno do Espectro Autista (TEA), oferecendo suporte por meio de conteúdos estruturados, orientações práticas e recursos acessíveis para famílias e profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
