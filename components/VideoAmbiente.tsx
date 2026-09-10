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
 * Vídeo decorativo: só baixa perto da tela, e só toca enquanto visível.
 *
 * O arquivo só é buscado quando o vídeo se aproxima da viewport — quem nunca
 * rola até ele não paga o download. Depois disso ele pausa ao sair da tela
 * e retoma ao voltar: com vários vídeos na página (a casa tem quatro lado a
 * lado), deixá-los todos rodando seria decodificação em paralelo à toa —
 * bateria e aquecimento no celular.
 *
 * O IntersectionObserver usa a caixa renderizada, com transform incluído,
 * então funciona também no trilho horizontal da seção da casa.
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
  const carregado = useRef(false);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas.some((e) => e.isIntersecting);
        if (!visivel) {
          el.pause();
          return;
        }
        if (!carregado.current) {
          carregado.current = true;
          setCarregar(true); // o <source> entra e o efeito abaixo dá o play
        } else {
          void el.play().catch(() => {});
        }
      },
      { rootMargin: "200px" }
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
