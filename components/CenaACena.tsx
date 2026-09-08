import CtaWhats from "./CtaWhats";
import Image from "next/image";
import noiteVertical from "@/public/fotos/a-noite-vertical.jpg";
import s from "./CenaACena.module.css";

const TEMPOS = [
  {
    hora: "20h",
    titulo: "As portas abrem",
    texto:
      "Tolerância de 30 minutos. Chegue com folga e use esse tempo para as fotos — o cenário foi construído para isso.",
  },
  {
    hora: "Abertura",
    titulo: "Mesa de antepastos natalinos",
    texto:
      "Uma seleção especial que dá início à experiência, enquanto a casa se acomoda e as luzes baixam.",
  },
  {
    hora: "A noite",
    titulo: "Cinco tempos e o espetáculo",
    texto:
      "Os pratos são servidos intercalados com Simplesmente Natal. O jantar acompanha o espetáculo, não o contrário.",
  },
  {
    hora: "O encontro",
    titulo: "O Papai Noel entra em cena",
    texto:
      "A entrega dos presentes acontece durante a celebração, com as crianças na plateia e os pais com o celular na mão.",
  },
  {
    hora: "00h",
    titulo: "Encerramento",
    texto:
      "A noite termina à meia-noite — e o Natal continua lá fora, em Gramado.",
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
            Das 20h à meia-noite, sem tempo morto.
          </h2>
          <p className={s.intro}>
            A ordem da noite, para você já chegar sabendo o que esperar.
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
