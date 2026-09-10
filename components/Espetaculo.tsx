import Secao from "./Secao";
import YouTubeFacade from "./YouTubeFacade";
import s from "./Espetaculo.module.css";

export default function Espetaculo() {
  return (
    <Secao
      id="espetaculo"
      tom="escuro"
      centralizado
      olho="Conheça Simplesmente Natal."
      titulo={<>O espetáculo que você vai assistir.</>}
    >
      <div className={s.video}>
        <div className={s.slot}>
          <YouTubeFacade
            id="zihzN21SK6M"
            titulo="Simplesmente Natal — o espetáculo do GATZZ"
          />
        </div>
      </div>
    </Secao>
  );
}
