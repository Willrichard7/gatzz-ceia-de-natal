import { LogoGatzz } from "./Marca";
import s from "./ACasa.module.css";

/**
 * Apresentação da casa.
 *
 * Entra logo antes do convite: quem chega por anúncio pode nunca ter ouvido
 * falar do GATZZ, e a credibilidade de quem oferece faz parte da decisão de
 * pagar por uma noite inteira. Texto construído sobre o DNA da marca — a
 * origem do nome, o Art Déco e o manifesto.
 */
export default function ACasa() {
  return (
    <section id="a-casa" className={s.secao}>
      <div className={`container ${s.conteudo}`}>
        <p className="olho">A casa</p>

        <LogoGatzz className={s.logo} titulo="GATZZ Fondue & Show" />

        <h2 className={`display ${s.titulo}`}>
          Onde a mesa também é palco.
        </h2>

        <div className={s.texto}>
          <p>
            O nome nasce de duas inspirações. <strong>Gatsby</strong>, o
            glamour das noites dos anos 20. E o <strong>jazz</strong>, que é
            liberdade, improviso e intensidade. A casa herdou os dois:
            arquitetura Art Déco, trilha viva e um espetáculo que acontece
            entre um tempo e outro do jantar.
          </p>
          <p>
            É fondue com show imersivo em Gramado. Você não assiste à cena de
            longe — você janta dentro dela.
          </p>
        </div>

        <blockquote className={s.citacao}>
          <p className="display">
            Cada mesa é um palco, cada sorriso é um aplauso.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
