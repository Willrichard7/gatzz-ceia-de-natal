"use client";

import { useEffect, useRef, useState } from "react";
import s from "./VideoAmbiente.module.css";

type Props = {
  src: string;
  poster: string;
  width: number;
  height: number;
  /** Descreve a cena para quem não pode vê-la. */
  descricao: string;
};

/**
 * Vídeo decorativo que só baixa quando chega perto da tela.
 *
 * O arquivo tem alguns megabytes e vive no meio da página. Deixar o
 * navegador buscá-lo no carregamento cobraria esse peso de todo mundo,
 * inclusive de quem nunca rola até aqui. O pôster pinta o quadro na hora;
 * o vídeo entra depois, quando o IntersectionObserver avisa que faz sentido.
 *
 * `prefers-reduced-motion` encerra o assunto: fica só o pôster.
 */
export default function VideoAmbiente({
  src,
  poster,
  width,
  height,
  descricao,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setCarregar(true);
          observador.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (!carregar) return;
    void ref.current?.play().catch(() => {
      /* autoplay bloqueado: o pôster já basta */
    });
  }, [carregar]);

  return (
    <video
      ref={ref}
      className={s.video}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={descricao}
    >
      {carregar ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
