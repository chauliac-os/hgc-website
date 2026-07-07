import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Huguette Grémy-Chauliac — claveciniste",
  description:
    "Le site officiel d'Huguette Grémy-Chauliac, claveciniste : biographie, discographie, enregistrements, archives et le livre « Passion d'une claveciniste pour les générations à venir ».",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={garamond.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
