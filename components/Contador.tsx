"use client";

import { useEffect, useState } from "react";
import {
  CAMPANHA,
  restanteAteViradaDeLote,
  type Restante,
} from "@/lib/campanha";
import s from "./Contador.module.css";

const UNIDADES = [
  { chave: "dias", rotulo: "Dias" },
  { chave: "horas", rotulo: "Horas" },
  { chave: "minutos", rotulo: "Min" },
  { chave: "segundos", rotulo: "Seg" },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * O relógio de virada de lote — o único componente de cliente da página.
 *
 * O servidor renderiza a contagem do momento do build; o cliente recalcula na
 * montagem e a cada segundo. Sem isso, uma página em cache mostraria um número
 * velho — e urgência falsa é anti-referência declarada da marca.
 *
 * A data-alvo tem fuso de Brasília fixo, então o relógio não muda de significado
 * conforme o fuso de quem visita.
 */
export default function Contador({ inicial }: { inicial: Restante }) {
  const [restante, setRestante] = useState<Restante>(inicial);

  useEffect(() => {
    const atualizar = () => setRestante(restanteAteViradaDeLote());
    atualizar();
    const id = setInterval(atualizar, 1000);
    return () => clearInterval(id);
  }, []);

  const { dias, horas, minutos } = restante;

  return (
    <div className={s.contador}>
      <p className={s.titulo}>
        <span className={s.chamada}>
          {restante.encerrado
            ? `O valor do ${CAMPANHA.lote.numero}º lote foi encerrado`
            : `O valor do ${CAMPANHA.lote.numero}º lote termina em`}
        </span>
      </p>

      {/* O relógio pisca a cada segundo. Anunciar isso a um leitor de tela
          seria ruído contínuo, então ele fica oculto e a informação chega
          por um resumo textual, atualizado no mesmo ritmo mas sem alarde. */}
      <div className={s.relogio} aria-hidden="true">
        {UNIDADES.map(({ chave, rotulo }) => (
          <div key={chave} className={s.bloco}>
            <span suppressHydrationWarning className={s.numero}>
              {pad(restante[chave])}
            </span>
            <span className={s.rotulo}>{rotulo}</span>
          </div>
        ))}
      </div>

      <p className="visualmente-oculto" suppressHydrationWarning>
        {restante.encerrado
          ? `O valor do ${CAMPANHA.lote.numero}º lote foi encerrado.`
          : `Faltam ${dias} dias, ${horas} horas e ${minutos} minutos para o valor do ${CAMPANHA.lote.numero}º lote mudar.`}
      </p>
    </div>
  );
}
