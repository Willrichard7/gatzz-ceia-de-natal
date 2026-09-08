import Image from "next/image";
import { CAMPANHA, restanteAteViradaDeLote } from "@/lib/campanha";
import { LogoGatzz, LetteringCeiaDeNatal } from "./Marca";
import CtaWhats from "./CtaWhats";
import Contador from "./Contador";
import Bilhete from "./Bilhete";
import PalcoVideo from "./PalcoVideo";
import texturaVermelha from "@/public/texturas/glitter-vermelho.jpg";
import s from "./Hero.module.css";

export default function Hero() {
  const { ceia } = CAMPANHA;

  return (
    <header className={s.hero}>
      {/* A cortina é CSS puro: pinta no primeiro frame, sem esperar rede.
          O glitter oficial entra por cima como acabamento, e pode chegar
          atrasado sem causar flash — o fundo por baixo já está correto. */}
      <div className={s.cortina} aria-hidden="true" />
      <Image
        src={texturaVermelha}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={s.grao}
        placeholder="blur"
        quality={40}
      />

      <div className={`container ${s.conteudo}`}>
        <div className={s.texto}>
          {/* Logo, lettering e "em Gramado" compartilham um eixo só. O
              lettering é mais largo que os dois e centraliza NATAL sob CEIA DE
              internamente, então alinhá-los pela esquerda deixava três eixos
              diferentes no mesmo bloco. */}
          <div className={s.lockup}>
            <LogoGatzz className={s.logo} titulo="GATZZ Fondue & Show" />

            <h1 className={s.titulo}>
              {/* O lockup é imagem; o texto real do h1 vive aqui, sem
                  duplicar o "em Gramado" que já aparece visível abaixo. */}
              <span className="visualmente-oculto">Ceia de Natal</span>
              <LetteringCeiaDeNatal className={s.lettering} />
              <span className={s.local}>em Gramado</span>
            </h1>
          </div>

          <p className={s.sub}>
            Uma noite Com Gastronomia e Espetáculo e a presença do Papai Noel.
          </p>

          <p className={s.assinatura}>
            É um <span className={s.semQuebra}>Show de Natal</span> em Gramado!
          </p>

          <ul className={s.dados}>
            <li>{ceia.dataExtenso}</li>
            <li>Entrada às {ceia.entrada}</li>
            <li>Gramado · RS</li>
          </ul>

          <div className={s.acoes}>
            <CtaWhats />
            <Contador inicial={restanteAteViradaDeLote()} />
          </div>
        </div>

        <div className={s.palco}>
          <div className={s.moldura}>
            <PalcoVideo />
          </div>
          <div className={s.oferta}>
            <Bilhete />
          </div>
        </div>
      </div>

    </header>
  );
}
