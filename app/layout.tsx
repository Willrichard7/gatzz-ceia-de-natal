import type { Metadata } from "next";
import { Playfair_Display, Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";

/* ---------------------------------------------------------------------------
   TIPOGRAFIA

   O guia oficial da campanha pede:
     Título  → Mostra Nuova  (fonte comercial, Mark Simonson)
     Texto   → Montserrat Medium

   Montserrat é Google Font e entra idêntica à especificação.

   Mostra Nuova é paga e exige licença de webfont. Enquanto o .woff2 e a
   licença não chegam, os dois papéis de display usam substitutas livres:

     Playfair Display → o lockup didone de alto contraste ("CEIA DE NATAL")
     Josefin Sans     → os labels déco em caixa alta (stand-in de Mostra Nuova)

   Ao receber o arquivo licenciado, troque para next/font/local — os papéis
   já estão isolados nas variáveis --fonte-display e --fonte-deco, então a
   substituição não toca nenhum componente.
   --------------------------------------------------------------------------- */

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fonte-display",
  display: "swap",
});

const deco = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--fonte-deco",
  display: "swap",
});

const corpo = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fonte-corpo",
  display: "swap",
});

// TODO(dev): domínio definitivo. Ativa canonical e OG absolutos.
const SITE = "https://ceiadenatal.gatzz.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ceia de Natal em Gramado | Um Show de Natal no GATZZ",
  description:
    "Viva uma Ceia de Natal em Gramado com fondue, magia e espetáculo ao vivo. Garanta sua mesa para Um Show de Natal no GATZZ.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE,
    siteName: "GATZZ Fondue & Show",
    title: "Ceia de Natal em Gramado | Um Show de Natal no GATZZ",
    description:
      "Menu em 5 tempos, espumantes da Serra Gaúcha, Papai Noel e o espetáculo Simplesmente Natal. 24 de dezembro, em Gramado.",
    images: [
      {
        // TODO(assets): OG dedicada da campanha, 1200x630.
        url: "/og-ceia-de-natal.jpg",
        width: 1200,
        height: 630,
        alt: "Ceia de Natal GATZZ — Um Show de Natal, em Gramado.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceia de Natal em Gramado | Um Show de Natal no GATZZ",
    description:
      "Menu em 5 tempos, espumantes, Papai Noel e espetáculo ao vivo. 24 de dezembro, em Gramado.",
    images: ["/og-ceia-de-natal.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${deco.variable} ${corpo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
