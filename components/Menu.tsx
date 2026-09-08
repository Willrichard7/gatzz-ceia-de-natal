import Image, { type StaticImageData } from "next/image";
import MenuControles from "./MenuControles";
import s from "./Menu.module.css";

import antepastos from "@/public/fotos/menu-0-antepastos.jpg";
import carpaccio from "@/public/fotos/menu-1-carpaccio.jpg";
import vitello from "@/public/fotos/menu-2-vitello.jpg";
import bacalhau from "@/public/fotos/menu-3-bacalhau.jpg";
import wellington from "@/public/fotos/menu-4-wellington.jpg";
import chocolates from "@/public/fotos/menu-5-chocolates.jpg";

type Tempo = {
  ordem: string;
  nome: string;
  descricao: string;
  foto: StaticImageData;
  alt: string;
};

const TEMPOS: Tempo[] = [
  {
    ordem: "Para começar",
    nome: "Mesa de Antepastos Natalinos",
    descricao:
      "Uma seleção especial de antepastos preparada para dar início à experiência da noite.",
    foto: antepastos,
    alt: "Mesa de antepastos natalinos: tigelas de azeitonas, conservas, patês, castanhas e frios dispostas sobre a mesa.",
  },
  {
    ordem: "1º Tempo",
    nome: "Carpaccio de Salmão Defumado",
    descricao:
      "Aioli de limão-siciliano, buquê de minifolhas e espuma de parmesão.",
    foto: carpaccio,
    alt: "Carpaccio de salmão defumado disposto em roseta sobre prato com borda dourada, com pimenta rosa e ervas ao centro.",
  },
  {
    ordem: "2º Tempo",
    nome: "Vitello Tonnato",
    descricao:
      "Filé-mignon selado e laminado, molho tonnato, minibrotos e lascas de trufa negra.",
    foto: vitello,
    alt: "Vitello tonnato laminado com lascas de trufa negra, parmesão, minibrotos e uma flor vermelha ao centro.",
  },
  {
    ordem: "3º Tempo",
    nome: "Bacalhau Imperial",
    descricao:
      "Risoto de açafrão com raspas de limão-siciliano, tomates confitados em azeite de carvão, vagens francesas e amêndoas douradas.",
    foto: bacalhau,
    alt: "Bacalhau sobre risoto de açafrão com tomates confitados, vagens e amêndoas douradas, servido em sousplat dourado.",
  },
  {
    ordem: "4º Tempo",
    nome: "Filé Wellington",
    descricao:
      "Mousseline trufada de batata-baroa, cogumelos selvagens e redução de Malbec.",
    foto: wellington,
    alt: "Fatia de filé Wellington ao ponto, com cogumelo e mousseline de batata-baroa, sobre pedestal listrado e cortina vermelha ao fundo.",
  },
  {
    ordem: "5º Tempo",
    nome: "Trio de Chocolates",
    descricao:
      "Chocolate belga ao leite com praliné de castanhas, chocolate branco com crumble de baunilha, e fondue de pistache com coulis de amora.",
    foto: chocolates,
    alt: "Garfo de fondue mergulhando um doce em uma panela de cobre, com luzes de Natal desfocadas ao fundo.",
  },
];

/**
 * O menu como uma fila de pratos que se percorre de lado.
 *
 * A rolagem em si é CSS puro (scroll-snap), então funciona sem JavaScript e
 * é nativa no toque. Os controles existem só para o desktop, onde a rolagem
 * horizontal passa despercebida — são um atalho, nunca o único caminho.
 */
export default function Menu() {
  return (
    <section id="menu" className={s.secao}>
      <div className={`container ${s.cabecalho}`}>
        <h2 className={`display ${s.titulo}`}>
          Mesa de Antepastos + Menu Cinco Tempos
        </h2>
      </div>

      <ul
        id="menu-trilho"
        className={s.trilho}
        tabIndex={0}
        role="region"
        aria-label="Os tempos do menu — role para o lado para ver todos"
      >
        {TEMPOS.map((t) => (
          <li key={t.nome} className={s.card}>
            <Image
              src={t.foto}
              alt={t.alt}
              className={s.foto}
              sizes="(min-width: 62rem) 21rem, 78vw"
              placeholder="blur"
            />
            <div className={s.corpo}>
              <p className={s.ordem}>{t.ordem}</p>
              <h3 className={`display ${s.nome}`}>{t.nome}</h3>
              <p className={s.descricao}>{t.descricao}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="container">
        <MenuControles alvo="menu-trilho" />
      </div>
    </section>
  );
}
