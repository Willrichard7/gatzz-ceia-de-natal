import Image from "next/image";
import Secao from "./Secao";
import VideoAmbiente from "./VideoAmbiente";
import montagem from "@/public/fotos/montagem-espetaculo.jpg";
import s from "./NaoEComum.module.css";

export default function NaoEComum() {
  return (
    <>
      {/* Faixa de largura total. A arte é 21:9 e traz a chamada da campanha
          embutida; em telas estreitas a caixa vira retrato e o `cover` corta
          as laterais — a composição foi feita centralizada para sobreviver
          a isso, com o lockup inteiro dentro dos 27,5% centrais. */}
      <div className={s.montagem}>
        <Image
          src={montagem}
          alt="Papai Noel e o elenco do espetáculo atrás de um filé Wellington emplatado, sob a chamada: muito mais que uma ceia, é Um Show de Natal."
          className={s.montagemFoto}
          sizes="100vw"
          placeholder="blur"
        />
      </div>

      <Secao
        tom="escuro"
        centralizado
        titulo={<>Essa, é uma noite de Natal inesquecível em Gramado!</>}
        intro={
          <>
            Viver a magia do natal na cidade mais natalina do Brasil é uma
            experiência única.
          </>
        }
      >
        <div className={s.video}>
          <div className={s.videoSlot}>
            <VideoAmbiente
              src="/video/noite-natal.mp4"
              poster="/video/noite-natal-poster.jpg"
              width={608}
              height={1080}
              descricao="A Ceia de Natal no GATZZ: mesas postas, ambientação natalina e o espetáculo em cena."
            />
          </div>
        </div>
      </Secao>
    </>
  );
}
