"use client";

import { useEffect, useRef, useState } from "react";
import s from "./MenuControles.module.css";

/**
 * Controles do carrossel do menu: barra de progresso e setas.
 *
 * A rolagem funciona sem eles — é scroll-snap nativo, e no toque o dedo
 * resolve. Eles existem por dois motivos concretos:
 *
 * 1. No desktop, sem dedo, a rolagem horizontal passa despercebida.
 * 2. A barra nativa do macOS é overlay: some quando ninguém está rolando,
 *    então não serve como aviso de que a fila continua. Esta é desenhada.
 */
export default function MenuControles({ alvo }: { alvo: string }) {
  const [progresso, setProgresso] = useState(0);
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);
  const trilho = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById(alvo);
    if (!el) return;
    trilho.current = el;

    const avaliar = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgresso(max > 0 ? el.scrollLeft / max : 0);
      setNoInicio(el.scrollLeft <= 4);
      setNoFim(max > 0 && el.scrollLeft >= max - 4);
    };

    avaliar();
    el.addEventListener("scroll", avaliar, { passive: true });
    window.addEventListener("resize", avaliar);
    return () => {
      el.removeEventListener("scroll", avaliar);
      window.removeEventListener("resize", avaliar);
    };
  }, [alvo]);

  const mover = (direcao: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;

    const card = el.querySelector("li");
    const passo = card ? card.getBoundingClientRect().width + 24 : 320;
    const suave = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    el.scrollBy({ left: passo * direcao, behavior: suave ? "smooth" : "auto" });
  };

  return (
    <div className={s.controles}>
      {/* A barra espelha uma rolagem que o usuário já controla; anunciá-la
          seria redundante para quem usa leitor de tela. */}
      <div className={s.trilha} aria-hidden="true">
        <div
          className={s.preenchimento}
          style={{ transform: `scaleX(${Math.max(progresso, 0.06)})` }}
        />
      </div>

      <div className={s.setas}>
        <button
          type="button"
          className={s.seta}
          onClick={() => mover(-1)}
          disabled={noInicio}
          aria-label="Ver o tempo anterior"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          className={s.seta}
          onClick={() => mover(1)}
          disabled={noFim}
          aria-label="Ver o próximo tempo"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
