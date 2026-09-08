import {
  CAMPANHA,
  precoFormatado,
  valorParcela,
} from "@/lib/campanha";
import s from "./Bilhete.module.css";

/**
 * O elemento-assinatura da campanha.
 *
 * O KV resolve uma tensão real: 44% de desconto é exatamente o que a marca
 * declara como anti-referência ("panfleto promocional"). Ao colocar o preço
 * dentro de um bilhete de teatro, o desconto deixa de ser oferta e vira
 * ingresso. A página herda esse enquadramento em vez de reinventá-lo.
 */
export default function Bilhete({
  mostrarParcela = true,
}: {
  /** No bloco do convite o parcelamento virou badge à parte. */
  mostrarParcela?: boolean;
} = {}) {
  const { preco, lote } = CAMPANHA;

  return (
    <div className={s.bilhete}>
      <p className={s.cabecalho}>
        Ceia de Natal <span aria-hidden="true">·</span>{" "}
        <span className={s.casa}>GATZZ Fondue &amp; Show</span>
      </p>

      <div className={s.corpo}>
        <p className={s.de}>
          De <s>{precoFormatado(preco.de)}</s> por
        </p>
        <p className={s.por}>
          <span className={s.cifrao}>R$</span>
          <strong className={s.numero}>{preco.por}</strong>
          <span className={s.unidade}>
            por
            <br />
            pessoa
          </span>
        </p>
        {mostrarParcela ? (
          <p className={s.parcela}>
            ou em até {preco.parcelas}x de {valorParcela()}
          </p>
        ) : null}
      </div>

      <div className={s.picote} aria-hidden="true" />

      <p className={s.rodape}>
        <span className={s.loteTag}>{lote.numero}º Lote</span>
        <span className={s.validade}>Valor válido até 30 de setembro</span>
      </p>
    </div>
  );
}
