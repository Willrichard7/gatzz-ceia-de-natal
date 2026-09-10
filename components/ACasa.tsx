import ACasaTrilho from "./ACasaTrilho";
import s from "./ACasa.module.css";

/**
 * A casa, percorrida de lado.
 *
 * O foco é o GLAMOUR, não o nome — o convidado precisa sentir a casa antes
 * de ver o preço. A ordem dos quadros é a ordem de uma noite real: a porta,
 * o salão, a cena, a gastronomia. Abre e fecha com texto, para o
 * percurso ter tese e conclusão em vez de virar álbum.
 *
 * Vocabulário conforme o DNA: convidado, anfitrião, noite, cena, brinde.
 * A construção "a mesa é palco" está vetada até segunda ordem.
 */
const QUADROS = [
  {
    olho: "A chegada",
    texto:
      "As portas se abrem e a noite começa. A luz baixa, o dourado e a elegância das grandes celebrações recebem você.",
    arquivo: "casa-1-chegada.jpg",
    pauta:
      "Fachada ou hall de entrada à noite, luz quente, detalhe Art Déco em evidência.",
  },
  {
    olho: "O salão",
    texto:
      "O palco faz parte do ambiente e o ambiente faz parte do espetáculo. Um espetáculo de Arte e Gastronomia diante dos seus olhos e da sua mesa.",
    arquivo: "casa-2-salao.jpg",
    pauta:
      "Salão cheio visto de um ponto alto, com a casa ocupada e o palco ao fundo.",
  },
  {
    olho: "A cena",
    texto:
      "Elenco, figurino e música ao vivo acontecem a poucos metros da sua mesa. Cada ato aproxima o convidado da história.",
    arquivo: "casa-3-cena.jpg",
    pauta:
      "Elenco em performance, figurino em destaque, luz de espetáculo.",
  },
  {
    olho: "A gastronomia",
    texto:
      "Os pratos chegam no ritmo do espetáculo. Aqui, o sabor não acompanha a noite: ajuda a contar a história.",
    arquivo: "casa-4-gastronomia.jpg",
    pauta:
      "Réchaud de fondue em serviço ou prato sendo finalizado, com o salão desfocado atrás.",
  },
];

export default function ACasa() {
  return (
    <section id="a-casa" aria-label="A casa">
      <ACasaTrilho>
        <div className={`${s.quadro} ${s.abertura}`}>
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
          <figure key={q.arquivo} className={s.quadro}>
            {/* TODO(assets): trocar por next/image com import estático e
                `sizes="(min-width: 62rem) 22rem, 78vw"`. */}
            <div
              className={s.pendente}
              role="img"
              aria-label={`Espaço reservado para foto: ${q.pauta}`}
            >
              <span className={s.selo}>Foto pendente</span>
              <span className={s.arquivo}>{q.arquivo}</span>
              <span className={s.pauta}>{q.pauta}</span>
            </div>
            <figcaption className={s.legenda}>
              <p className="olho">{q.olho}</p>
              <p className={s.legendaTexto}>{q.texto}</p>
            </figcaption>
          </figure>
        ))}

        <div className={`${s.quadro} ${s.fecho}`}>
          <p className={`display ${s.fechoTexto}`}>
            Gramado tem ceias. Gramado tem espetáculos.
            <strong> O GATZZ tem os dois.</strong>
          </p>
        </div>
      </ACasaTrilho>
    </section>
  );
}
