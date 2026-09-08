"use client";

import { useEffect, useRef } from "react";
import s from "./PalcoVideo.module.css";

/**
 * O vídeo do hero.
 *
 * CSS não pausa vídeo, então `prefers-reduced-motion` precisa de JS para ser
 * respeitado de verdade: quem pediu menos movimento fica só com o pôster.
 * O pôster também é quem pinta o quadro imediatamente — o vídeo só entra
 * depois, e por isso o LCP não espera pelo arquivo de 1 MB.
 */
export default function PalcoVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const aplicar = () => {
      if (mq.matches) {
        el.pause();
        el.removeAttribute("autoplay");
      } else {
        void el.play().catch(() => {
          /* autoplay bloqueado pelo navegador: o pôster já basta */
        });
      }
    };

    aplicar();
    mq.addEventListener("change", aplicar);
    return () => mq.removeEventListener("change", aplicar);
  }, []);

  return (
    <video
      ref={ref}
      className={s.video}
      poster="/video/hero-poster.jpg"
      width={720}
      height={900}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
