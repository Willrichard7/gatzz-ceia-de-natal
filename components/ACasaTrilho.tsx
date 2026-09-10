"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./ACasa.module.css";

/**
 * Converte rolagem vertical em movimento horizontal enquanto a seção fica
 * presa na tela — e devolve a rolagem normal ao chegar ao fim do trilho.
 *
 * Três cuidados deliberados:
 *
 * 1. O padrão é NÃO prender. O servidor entrega `modo="livre"`, uma galeria
 *    horizontal comum; só depois de montar, e só se fizer sentido, ele passa
 *    para `fixo`. Sem JavaScript a seção continua utilizável.
 * 2. No toque, nunca prende. Sequestrar a rolagem no celular tira do usuário
 *    o controle do gesto — ali a galeria é deslizada com o dedo.
 * 3. `prefers-reduced-motion` desliga o efeito. Movimento lateral involuntário
 *    é justamente o que incomoda quem pediu menos movimento.
 */
export default function ACasaTrilho({
  children,
  fundo,
}: {
  children: React.ReactNode;
  /** URL já otimizada da imagem de fundo do palco. */
  fundo?: string;
}) {
  const secao = useRef<HTMLDivElement>(null);
  const trilho = useRef<HTMLDivElement>(null);
  const [modo, setModo] = useState<"livre" | "fixo">("livre");

  /* Decide o modo. Só isso — medir aqui daria a largura do layout antigo,
     porque os dois modos têm espaçamentos diferentes. */
  useEffect(() => {
    const largura = window.matchMedia("(min-width: 62rem)");
    const movimento = window.matchMedia("(prefers-reduced-motion: reduce)");

    const decidir = () =>
      setModo(largura.matches && !movimento.matches ? "fixo" : "livre");

    decidir();
    largura.addEventListener("change", decidir);
    movimento.addEventListener("change", decidir);
    window.addEventListener("resize", decidir);

    return () => {
      largura.removeEventListener("change", decidir);
      movimento.removeEventListener("change", decidir);
      window.removeEventListener("resize", decidir);
    };
  }, []);

  /* Mede e posiciona. Roda depois que o modo já está no DOM, então a
     largura do trilho é a do layout que vai valer. */
  useLayoutEffect(() => {
    const sec = secao.current;
    const tri = trilho.current;
    if (!sec || !tri) return;

    if (modo !== "fixo") {
      sec.style.height = "";
      tri.style.transform = "";
      return;
    }

    let distancia = 0;

    const posicionar = () => {
      if (distancia <= 0) return;
      const progresso = Math.min(
        Math.max((window.scrollY - sec.offsetTop) / distancia, 0),
        1
      );
      tri.style.transform = `translate3d(${-progresso * distancia}px, 0, 0)`;
    };

    const medir = () => {
      /* A altura da seção é o quanto o trilho precisa andar, mais uma tela.
         Assim a rolagem vertical vira horizontal na proporção de 1 para 1 —
         o movimento acompanha a mão, sem acelerar nem arrastar. */
      distancia = Math.max(tri.scrollWidth - window.innerWidth, 0);
      sec.style.height = `${window.innerHeight + distancia}px`;
      posicionar();
    };

    medir();
    window.addEventListener("scroll", posicionar, { passive: true });
    window.addEventListener("resize", medir);

    /* As fontes chegam depois do primeiro layout e mudam a largura dos
       painéis de texto; sem remedir, o trilho para antes do fim. */
    const fontes = (document as Document & { fonts?: FontFaceSet }).fonts;
    fontes?.ready.then(medir);

    return () => {
      window.removeEventListener("scroll", posicionar);
      window.removeEventListener("resize", medir);
    };
  }, [modo]);

  return (
    <div ref={secao} className={s.secao} data-modo={modo}>
      <div
        className={s.palco}
        style={
          fundo
            ? ({ "--fundo": `url("${fundo}")` } as React.CSSProperties)
            : undefined
        }
      >
        <div ref={trilho} className={s.trilho}>
          {children}
        </div>
      </div>
    </div>
  );
}
