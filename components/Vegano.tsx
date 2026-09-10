import Image, { type StaticImageData } from "next/image";
import Secao from "./Secao";
import s from "./Vegano.module.css";

import vegano1 from "@/public/fotos/vegano-1.jpg";
import vegano2 from "@/public/fotos/vegano-2.jpg";
import vegano3 from "@/public/fotos/vegano-3.jpg";

type Prato = {
  ordem: string;
  nome: string;
  descricao: string;
  foto: StaticImageData;
  alt: string;
};

/**
 * As fotos já são as definitivas. Os NOMES e DESCRIÇÕES ainda não.
 *
 * TODO(operação): substituir `nome` e `descricao` pelos textos reais, e
 * confirmar se a ordem das fotos corresponde à ordem dos pratos. Os textos
 * abaixo estão escritos entre colchetes de propósito: se aparecerem na
 * página no ar, alguém pulou esta etapa.
 *
 * Os `alt` já descrevem as fotos e não dependem dos nomes — podem ficar.
 */
const PRATOS: Prato[] = [
  {
    ordem: "1º Prato",
    nome: "[ nome do 1º prato vegano ]",
    descricao: "[ descrição do prato: ingredientes e acompanhamentos ]",
    foto: vegano1,
    alt: "Prato vegano com milho, palmito e legumes em cubos, finalizado com microfolhas e lâminas crocantes amarelas.",
  },
  {
    ordem: "2º Prato",
    nome: "[ nome do 2º prato vegano ]",
    descricao: "[ descrição do prato: ingredientes e acompanhamentos ]",
    foto: vegano2,
    alt: "Legumes grelhados — abobrinha, cenoura baby, tomates-cereja e cogumelos — sobre quinoa, com crocante e uma flor vermelha ao centro.",
  },
  {
    ordem: "3º Prato",
    nome: "[ nome do 3º prato vegano ]",
    descricao: "[ descrição do prato: ingredientes e acompanhamentos ]",
    foto: vegano3,
    alt: "Massa em creme claro com cubos empanados crocantes, aspargos e uma orquídea, servida em prato com borda dourada.",
  },
];

export default function Vegano() {
  return (
    <Secao
      id="vegano"
      tom="claro"
      largo
      centralizado
      titulo={<>Uma noite completa também para quem escolhe o menu vegano.</>}
      intro="O mesmo espetáculo e com menu inclusivo para todos terem um Show de Natal."
    >
      <ul className={s.cards}>
        {PRATOS.map((p) => (
          <li key={p.alt} className={s.card}>
            <Image
              src={p.foto}
              alt={p.alt}
              className={s.foto}
              sizes="(min-width: 48rem) 33vw, 100vw"
              placeholder="blur"
            />
            <div className={s.corpo}>
              <p className="olho">{p.ordem}</p>
              <h3 className={`display ${s.nome}`}>{p.nome}</h3>
              <p className={s.descricao}>{p.descricao}</p>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
