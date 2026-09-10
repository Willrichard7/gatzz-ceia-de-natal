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
    titulo: "Cinco tempos servidos à altura do espetáculo",
    texto:
      "Do carpaccio de salmão defumado ao Filé Wellington, cada prato entra em cena no momento certo — com sabor, apresentação e ritmo.",
    foto: gastronomia,
    alt: "Mão enluvada apresentando um prato sobre sousplat dourado, diante de uma cortina de veludo vermelha.",
  },
  {
    olho: "Espetáculo",
    titulo: "Simplesmente Natal, ao vivo diante da sua mesa",
    texto:
      "Elenco, figurino e música ao vivo conduzem a noite entre os tempos da ceia. Classificação livre para toda a família.",
    foto: espetaculo,
    alt: "Artista no palco do GATZZ com um vestido luminoso azul aberto sobre o chão, sob um lustre de luzes, com a plateia ao redor.",
  },
  {
    olho: "Papai Noel",
    titulo: "O encontro que as crianças esperam",
    texto:
      "O Papai Noel entra em cena para entregar os presentes deixados previamente com a casa. Um momento preparado para ficar na memória da família.",
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
      intro="Gastronomia, espetáculo e o encontro com o Papai Noel compõem uma única experiência, criada para envolver adultos e crianças do primeiro brinde à última cena."
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
