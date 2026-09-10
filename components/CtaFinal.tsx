import Image from "next/image";
import CtaWhats from "./CtaWhats";
import Contador from "./Contador";
import { CAMPANHA, restanteAteViradaDeLote } from "@/lib/campanha";
import { LetteringCeiaDeNatal } from "./Marca";
import texturaDourada from "@/public/texturas/glitter-dourado.jpg";
import s from "./CtaFinal.module.css";

export default function CtaFinal() {
  return (
    <section className={s.final}>
      <Image
        src={texturaDourada}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={s.grao}
        placeholder="blur"
        quality={40}
      />

      <div className={`container ${s.conteudo}`}>
        <LetteringCeiaDeNatal className={s.marca} />

        <h2 className={`display ${s.titulo}`}>
          Em {CAMPANHA.ceia.dataExtenso}, a sua família tem lugar nesta cena.
        </h2>

        <p className={s.texto}>
          Gramado tem muitas noites bonitas. Esta foi criada para permanecer na
          memória.
        </p>

        <div className={s.acoes}>
          <CtaWhats />
          <Contador inicial={restanteAteViradaDeLote()} />
        </div>
      </div>
    </section>
  );
}
