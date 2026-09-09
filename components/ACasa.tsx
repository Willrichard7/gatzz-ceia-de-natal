import ACasaTrilho from "./ACasaTrilho";
import s from "./ACasa.module.css";

/**
 * A casa, percorrida de lado.
 *
 * O foco é o GLAMOUR, não o nome — o convidado precisa sentir a casa antes
 * de ver o preço. A ordem dos quadros é a ordem de uma noite real: a porta,
 * o salão, a cena, a gastronomia, o brinde. Abre e fecha com texto, para o
 * percurso ter tese e conclusão em vez de virar álbum.
 *
 * Vocabulário conforme o DNA: convidado, anfitrião, noite, cena, brinde.
 * A construção "a mesa é palco" está vetada até segunda ordem.
 */
const QUADROS = [
  {
    olho: "A chegada",
    texto:
      "A porta abre e a noite já está acontecendo. Luz baixa, dourado e o brilho da alta sociedade dos anos 20.",
    arquivo: "casa-1-chegada.jpg",
    pauta:
      "Fachada ou hall de entrada à noite, luz quente, detalhe Art Déco em evidência.",
  },
  {
    olho: "O salão",
    texto:
      "Veludo, geometria e ouro velho. Cada assento foi pensado para ver a cena — aqui não existe lugar ruim.",
    arquivo: "casa-2-salao.jpg",
    pauta:
      "Salão cheio visto de um ponto alto, com a casa ocupada e o palco ao fundo.",
  },
  {
    olho: "A cena",
    texto:
      "Elenco, figurino e música ao vivo a poucos metros. Pelo eixo do jazz, nenhuma noite se repete igual.",
    arquivo: "casa-3-cena.jpg",
    pauta:
      "Elenco em performance, figurino em destaque, luz de espetáculo.",
  },
  {
    olho: "A gastronomia",
    texto:
      "Fondue e alta gastronomia servidos no ritmo do espetáculo. O sabor nunca é coadjuvante.",
    arquivo: "casa-4-gastronomia.jpg",
    pauta:
      "Réchaud de fondue em serviço ou prato sendo finalizado, com o salão desfocado atrás.",
  },
  {
    olho: "O brinde",
    texto:
      "Um brinde à vida, à música e às histórias que aquecem o coração. É assim que a casa recebe.",
    arquivo: "casa-5-brinde.jpg",
    pauta: "Taças erguidas por convidados, sorrisos, luz de celebração.",
  },
];

export default function ACasa() {
  return (
    <section id="a-casa" aria-label="A casa">
      <ACasaTrilho>
        <div className={`${s.quadro} ${s.abertura}`}>
          <p className="olho">A casa</p>
          <h2 className={`display ${s.titulo}`}>
            O glamour dos anos 20, vivido hoje.
          </h2>
          <p className={s.intro}>
            Art Déco na arquitetura, veludo, luz baixa e trilha ao vivo. Aqui
            ninguém é cliente — é convidado. E a noite começa no instante em
            que a porta abre.
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
            Gramado tem fondues. Gramado tem espetáculos.
            <strong> O GATZZ tem os dois na mesma noite.</strong>
          </p>
        </div>
      </ACasaTrilho>
    </section>
  );
}
