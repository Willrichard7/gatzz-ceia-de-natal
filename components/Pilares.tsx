import Image, { type StaticImageData } from "next/image";
import Secao from "./Secao";
import s from "./Pilares.module.css";

import gastronomia from "@/public/fotos/pilar-gastronomia.jpg";
import espetaculo from "@/public/fotos/pilar-espetaculo.jpg";
import papaiNoel from "@/public/fotos/pilar-papai-noel.jpg";

type Pilar = {
  olho: string;
  titulo: string;
  texto: string;
  foto: StaticImageData;
  alt: string;
};

const PILARES: Pilar[] = [
  {
    olho: "Gastronomia",
    titulo: "Menu em cinco tempos",
    texto:
      "Do carpaccio de salmão defumado ao Filé Wellington, cada tempo chega à mesa como um número da noite — não como mais um prato.",
    foto: gastronomia,
    alt: "Mão enluvada apresentando um prato sobre sousplat dourado, diante de uma cortina de veludo vermelha.",
  },
  {
    olho: "Espetáculo",
    titulo: "Simplesmente Natal",
    texto:
      "O espetáculo acontece à sua frente, entre um tempo e outro do jantar. Elenco, figurino, música ao vivo e a magia da data. Classificação livre.",
    foto: espetaculo,
    alt: "Artista no palco do GATZZ com um vestido luminoso azul aberto sobre o chão, sob um lustre de luzes, com a plateia ao redor.",
  },
  {
    olho: "Papai Noel",
    titulo: "A entrega dos presentes",
    texto:
      "O Papai Noel entra em cena e entrega os presentes que você deixou com a casa durante a tarde. É a cena que as crianças levam para a vida.",
    foto: papaiNoel,
    alt: "Papai Noel entregando um presente a uma menina sorridente de vestido vermelho, com a equipe da casa e a árvore de Natal ao fundo.",
  },
];

export default function Pilares() {
  return (
    <Secao
      tom="claro"
      largo
      centralizado
      titulo={<>Uma experiência completa em uma noite!</>}
    >
      <ul className={s.cards}>
        {PILARES.map((p) => (
          <li key={p.olho} className={s.card}>
            <Image
              src={p.foto}
              alt={p.alt}
              className={s.foto}
              sizes="(min-width: 48rem) 33vw, 100vw"
              placeholder="blur"
            />
            <div className={s.corpo}>
              <p className="olho">{p.olho}</p>
              <h3 className={`display ${s.titulo}`}>{p.titulo}</h3>
              <p className={s.texto}>{p.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
