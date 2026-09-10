import { getImageProps } from "next/image";
import ACasaTrilho from "./ACasaTrilho";
import VideoAmbiente from "./VideoAmbiente";
import fundo from "@/public/fotos/casa-fundo.jpg";
import s from "./ACasa.module.css";

/**
 * A casa, percorrida de lado.
 *
 * O foco é o GLAMOUR, não o nome — o convidado precisa sentir a casa antes
 * de ver o preço. A ordem dos quadros é a ordem de uma noite real: a porta,
 * o salão, a cena, a gastronomia. Abre e fecha com texto, para o percurso
 * ter tese e conclusão em vez de virar álbum.
 *
 * Vocabulário conforme o DNA: convidado, anfitrião, noite, cena.
 * A construção "a mesa é palco" está vetada até segunda ordem.
 */
const QUADROS = [
  {
    olho: "A chegada",
    texto:
      "As portas se abrem e a noite começa. A luz baixa, o dourado e a elegância das grandes celebrações recebem você.",
    video: "casa-1-chegada",
    descricao:
      "Fachada do GATZZ à noite: letreiro Art Déco dourado com esculturas de bailarinas e luzes de marquise.",
  },
  {
    olho: "O salão",
    texto:
      "O palco faz parte do ambiente e o ambiente faz parte do espetáculo. Um espetáculo de Arte e Gastronomia diante dos seus olhos e da sua mesa.",
    video: "casa-2-salao",
    descricao:
      "O salão do GATZZ visto do alto: mesas ao redor do palco central, sob luz violeta e cortinas de cristais.",
  },
  {
    olho: "A cena",
    texto:
      "Elenco, figurino e música ao vivo acontecem a poucos metros da sua mesa. Cada ato aproxima o convidado da história.",
    video: "casa-3-cena",
    descricao:
      "O Papai Noel em cena no palco do GATZZ, com a plateia em silhueta à frente.",
  },
  {
    olho: "A gastronomia",
    texto:
      "Os pratos chegam no ritmo do espetáculo. Aqui, o sabor não acompanha a noite: ajuda a contar a história.",
    video: "casa-4-gastronomia",
    descricao:
      "Prato de bacalhau servido diante da árvore de Natal iluminada e de presentes embrulhados.",
  },
];

export default function ACasa() {
  /* O fundo entra por CSS (precisa ficar parado atrás do trilho que desliza),
     mas a URL vem do otimizador: o navegador recebe AVIF, não o JPEG cru. */
  const {
    props: { src: fundoOtimizado },
  } = getImageProps({
    src: fundo,
    alt: "",
    width: 1920,
    height: 1080,
    quality: 70,
  });

  return (
    <section id="a-casa" aria-label="A casa">
      <ACasaTrilho fundo={fundoOtimizado}>
        <div className={`${s.quadro} ${s.placa} ${s.abertura}`}>
          <p className="olho">GATZZ Fondue &amp; Show</p>
          <h2 className={`display ${s.titulo}`}>
            A casa mais glamourosa de Gramado recebe o Natal.
          </h2>
          <p className={s.intro}>
            No GATZZ, você não chega apenas para jantar. Você é nosso convidado
            para celebrar uma noite pensada para você.
          </p>
          <p className={s.dica} aria-hidden="true">
            Continue rolando para percorrer a casa
          </p>
        </div>

        {QUADROS.map((q) => (
          <figure key={q.video} className={`${s.quadro} ${s.card}`}>
            <div className={s.midia}>
              <VideoAmbiente
                src={`/video/${q.video}.mp4`}
                poster={`/video/${q.video}-poster.jpg`}
                width={720}
                height={960}
                descricao={q.descricao}
              />
            </div>
            <figcaption className={s.legenda}>
              <p className="olho">{q.olho}</p>
              <p className={s.legendaTexto}>{q.texto}</p>
            </figcaption>
          </figure>
        ))}

        <div className={`${s.quadro} ${s.placa} ${s.fecho}`}>
          <p className={`display ${s.fechoTexto}`}>
            Gramado tem ceias. Gramado tem espetáculos.
            <strong> O GATZZ tem os dois.</strong>
          </p>
        </div>
      </ACasaTrilho>
    </section>
  );
}
