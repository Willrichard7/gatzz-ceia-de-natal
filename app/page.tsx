import Hero from "@/components/Hero";
import NaoEComum from "@/components/NaoEComum";
import Pilares from "@/components/Pilares";
import CenaACena from "@/components/CenaACena";
import Menu from "@/components/Menu";
import Vegano from "@/components/Vegano";
import AnoNovo from "@/components/AnoNovo";
import Inclusos from "@/components/Inclusos";
import Espetaculo from "@/components/Espetaculo";
import Convite from "@/components/Convite";
import Faq, { PERGUNTAS } from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Rodape from "@/components/Rodape";
import { CAMPANHA } from "@/lib/campanha";

/**
 * Dados estruturados.
 *
 * Event alimenta o rich result de eventos, que é justamente onde a busca
 * por "ceia de natal em gramado" acontece. FAQPage aproveita as objeções
 * que a página já responde. Custo de performance: zero.
 */
function dadosEstruturados() {
  const { ceia, preco, local, lote } = CAMPANHA;

  const evento = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Ceia de Natal GATZZ — Um Show de Natal",
    description:
      "Ceia de Natal em Gramado com menu em cinco tempos, espumantes da Serra Gaúcha, entrega de presentes pelo Papai Noel e o espetáculo Simplesmente Natal.",
    startDate: ceia.dataISO,
    endDate: ceia.fimISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: ["/video/hero-poster.jpg"],
    location: {
      "@type": "Place",
      name: local.nome,
      address: {
        "@type": "PostalAddress",
        // TODO(operação): streetAddress e postalCode quando confirmados.
        addressLocality: local.cidade,
        addressRegion: local.estado,
        addressCountry: "BR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: local.nome,
    },
    offers: {
      "@type": "Offer",
      name: `${lote.numero}º Lote`,
      price: preco.por,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validThrough: lote.viraEm,
    },
    typicalAgeRange: "0-",
    isAccessibleForFree: false,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PERGUNTAS.map((item) => ({
      "@type": "Question",
      name: item.p,
      acceptedAnswer: { "@type": "Answer", text: item.r },
    })),
  };

  return [evento, faq];
}

export default function Pagina() {
  return (
    <>
      {dadosEstruturados().map((dado, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dado) }}
        />
      ))}

      <Hero />

      <main>
        <NaoEComum />
        <Pilares />
        <CenaACena />
        <Menu />
        <Vegano />
        <AnoNovo />
        <Inclusos />
        <Espetaculo />
        <Convite />
        <Faq />
        <CtaFinal />
      </main>

      <Rodape />
    </>
  );
}
