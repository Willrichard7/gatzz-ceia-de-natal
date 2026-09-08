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
          A cortina abre em {CAMPANHA.ceia.dataExtenso}.
        </h2>

        <p className={s.texto}>
          Sua viagem a Gramado tem poucas noites. Esta é a que você vai contar
          depois.
        </p>

        <div className={s.acoes}>
          <CtaWhats />
          <Contador inicial={restanteAteViradaDeLote()} />
        </div>
      </div>
    </section>
  );
}
