import Secao from "./Secao";
import CtaWhats from "./CtaWhats";
import s from "./Inclusos.module.css";

const INCLUSOS = [
  {
    titulo: "Mesa de antepastos + menu em cinco tempos",
    texto: "Da seleção de abertura ao trio de chocolates.",
  },
  {
    titulo: "Espumantes da Serra Gaúcha",
    texto:
      "Uma seleção especial de espumantes produzidos na principal região vitivinícola do país.",
  },
  {
    titulo: "Refrigerantes e águas",
    texto: "Refrigerantes da linha Coca-Cola e águas durante toda a noite.",
  },
  {
    titulo: "Espetáculo Simplesmente Natal",
    texto:
      "Elenco, figurino e música ao vivo em uma montagem para todas as idades.",
  },
  {
    titulo: "Entrega de presentes pelo Papai Noel",
    texto:
      "Deixe os presentes com a casa durante a tarde do dia 24. Na celebração, o Papai Noel faz a entrega.",
  },
];

export default function Inclusos() {
  return (
    <Secao
      centralizado
      titulo={<>Tudo o que faz parte do seu convite.</>}
      intro="Uma única reserva reúne gastronomia, bebidas, espetáculo ao vivo e a entrega de presentes pelo Papai Noel."
    >
      <ul className={s.lista}>
        {INCLUSOS.map((i) => (
          <li key={i.titulo} className={s.item}>
            <span className={s.marca} aria-hidden="true" />
            <div>
              <h3 className={`display ${s.titulo}`}>{i.titulo}</h3>
              <p className={s.texto}>{i.texto}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className={s.acao}>
        <CtaWhats />
      </p>
    </Secao>
  );
}
