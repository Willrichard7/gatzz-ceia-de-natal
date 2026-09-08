import Secao from "./Secao";
import Bilhete from "./Bilhete";
import CtaWhats from "./CtaWhats";
import Contador from "./Contador";
import {
  CAMPANHA,
  restanteAteViradaDeLote,
  valorParcela,
} from "@/lib/campanha";
import s from "./Convite.module.css";

export default function Convite() {
  const { preco } = CAMPANHA;

  return (
    <Secao
      id="convite"
      tom="vermelho"
      centralizado
      titulo={<>Garanta sua mesa com o valor do 2º lote.</>}
    >
      {/* Bilhete, relógio e botão na mesma largura e no mesmo eixo:
          um bloco só, em vez de três elementos soltos. */}
      <div className={s.coluna}>
        <div className={s.cartao}>
          <Bilhete mostrarParcela={false} />

          <p className={s.badge}>
            <span className={s.badgeTopo}>ou em até</span>
            <strong className={s.badgeValor}>{preco.parcelas}x</strong>
            <span className={s.badgeBase}>de {valorParcela()}</span>
          </p>
        </div>

        <Contador inicial={restanteAteViradaDeLote()} />

        <div className={s.acao}>
          <CtaWhats />
        </div>
      </div>
    </Secao>
  );
}
