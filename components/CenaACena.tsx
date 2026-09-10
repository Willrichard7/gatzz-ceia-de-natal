import CtaWhats from "./CtaWhats";
import Image from "next/image";
import noiteVertical from "@/public/fotos/a-noite-vertical.jpg";
import s from "./CenaACena.module.css";

const TEMPOS = [
  {
    hora: "20h",
    titulo: "A casa recebe você",
    texto:
      "As portas abrem às 20h, com tolerância de 30 minutos. Chegue com folga para entrar no clima da noite e registrar a chegada.",
  },
  {
    hora: "Abertura",
    titulo: "Antepastos natalinos",
    texto:
      "Uma seleção especial abre a experiência enquanto os convidados se acomodam e as luzes do salão anunciam o primeiro ato.",
  },
  {
    hora: "A noite",
    titulo: "Menu cinco tempos e espetáculo",
    texto:
      "Os pratos e o espetáculo Simplesmente Natal se alternam ao longo da celebração. Gastronomia e espetáculo dividem a cena do início ao fim.",
  },
  {
    hora: "O encontro",
    titulo: "Papai Noel",
    texto:
      "Durante a celebração, o Papai Noel entra em cena para entregar os presentes e viver com as crianças um dos momentos mais esperados da noite.",
  },
  {
    hora: "00h",
    titulo: "O último brinde",
    texto:
      "A cortina se fecha à meia-noite. Do lado de fora, o Natal continua pelas luzes de Gramado.",
  },
];

/**
 * Esta seção não usa o shell `Secao` porque a imagem precisa acompanhar
 * também o cabeçalho, ocupando metade da tela de cima a baixo. O shell
 * põe o cabeçalho em largura total, o que quebraria a divisão.
 */
export default function CenaACena() {
  return (
    <section className={s.secao}>
      <div className={s.grade}>
        <div className={s.coluna}>
          <p className="olho">A noite, cena a cena</p>
          <h2 className={`display ${s.tituloSecao}`}>
            Da abertura das portas ao último brinde.
          </h2>
          <p className={s.intro}>
            Veja como a ceia acontece, das 20h à meia-noite.
          </p>

          <ol className={s.linha}>
            {TEMPOS.map((t) => (
              <li key={t.titulo} className={s.tempo}>
                <p className={s.hora}>{t.hora}</p>
                <div className={s.conteudo}>
                  <h3 className={`display ${s.titulo}`}>{t.titulo}</h3>
                  <p className={s.texto}>{t.texto}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className={s.acao}>
            <CtaWhats />
          </p>
        </div>

        <div className={s.midia}>
          <Image
            src={noiteVertical}
            alt="Elenco do espetáculo em cena na escadaria do palco, em figurinos brancos com plumas, sob luz azul e um floco de neve projetado ao fundo."
            className={s.foto}
            sizes="(min-width: 62rem) 50vw, 100vw"
            placeholder="blur"
          />
        </div>
      </div>

    </section>
  );
}
