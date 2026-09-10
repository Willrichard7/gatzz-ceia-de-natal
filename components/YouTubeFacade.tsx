"use client";

import Image from "next/image";
import { useState } from "react";
import s from "./YouTubeFacade.module.css";
import capa from "@/public/video/espetaculo-capa.jpg";

type Props = {
  id: string;
  titulo: string;
};

/**
 * Fachada do player do YouTube.
 *
 * Um <iframe> do YouTube carregado direto puxa centenas de kB de script e
 * abre conexões com o Google no primeiro paint — para todo visitante,
 * inclusive quem nunca dá play. Aqui a página mostra a capa e só monta o
 * iframe quando alguém clica.
 *
 * O domínio é o `-nocookie`: sem clique, nenhum rastreador do YouTube
 * chega ao visitante.
 */
export default function YouTubeFacade({ id, titulo }: Props) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    return (
      <div className={s.moldura}>
        <iframe
          className={s.iframe}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={s.moldura}
      onClick={() => setTocando(true)}
      aria-label={`Assistir ao trailer: ${titulo}`}
    >
      <Image
        src={capa}
        alt=""
        aria-hidden="true"
        className={s.capa}
        sizes="(min-width: 62rem) 60rem, 100vw"
        placeholder="blur"
      />
      <span className={s.play} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
        Assistir ao trailer
      </span>
    </button>
  );
}
