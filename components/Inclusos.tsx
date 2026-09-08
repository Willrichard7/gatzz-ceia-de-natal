import Secao from "./Secao";
import CtaWhats from "./CtaWhats";
import s from "./Inclusos.module.css";

const INCLUSOS = [
  {
    titulo: "Menu completo em 5 tempos",
    texto: "Da mesa de antepastos natalinos ao trio de chocolates.",
  },
  {
    titulo: "Espumantes da Serra Gaúcha",
    texto:
      "Seleção especial de uma das marcas mais reconhecidas do Rio Grande do Sul, a maior região produtora de vinhos e espumantes do país.",
  },
  {
    titulo: "Refrigerantes e águas",
    texto: "Linha Coca-Cola e águas inclusas durante toda a noite.",
  },
  {
    titulo: "Espetáculo Simplesmente Natal",
    texto:
      "Uma noite preparada para celebrar toda a magia e a emoção do Natal. Classificação livre.",
  },
  {
    titulo: "Entrega de presentes pelo Papai Noel",
    texto:
      "Deixe os presentes no GATZZ durante a tarde e o Papai Noel faz a entrega durante a celebração.",
  },
];

export default function Inclusos() {
  return (
    <Secao
      centralizado
      titulo={<>O que está incluso</>}
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
