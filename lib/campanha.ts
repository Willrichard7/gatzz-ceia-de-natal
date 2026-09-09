/**
 * Fonte única de verdade da campanha.
 *
 * A virada de lote é uma edição AQUI — nunca uma alteração de componente.
 * Calendário oficial: Lote 2 (set) → Lote 3 (01/10) → Lote 4 (01/11) → Lote 5 (01/12, final).
 */

export const CAMPANHA = {
  lote: {
    numero: 2,
    /** Virada para o Lote 3. Fuso de Brasília explícito: o contador não pode
     *  depender do relógio do visitante para saber QUANDO o lote vira. */
    viraEm: "2026-09-30T23:59:59-03:00",
  },

  preco: {
    de: 1598,
    por: 998,
    unidade: "por pessoa",
    parcelas: 10,
  },

  ceia: {
    /** Noite de 24 para 25/12. */
    dataISO: "2026-12-24T20:00:00-03:00",
    fimISO: "2026-12-25T00:00:00-03:00",
    dataExtenso: "24 de dezembro",
    entrada: "20h",
    tolerancia: "30 minutos",
    encerramento: "00h",
    antecedenciaMinima: "2 horas",
  },

  local: {
    nome: "GATZZ Fondue & Show",
    cidade: "Gramado",
    estado: "RS",
    // TODO(operação): endereço completo para o JSON-LD e o rodapé.
    endereco: null as string | null,
  },

  contato: {
    // TODO(operação): número real. Formato: DDI+DDD+número, só dígitos. Ex.: "5554999999999"
    whatsapp: null as string | null,
    mensagem:
      "Olá! Quero garantir minha mesa para a Ceia de Natal GATZZ (Lote 2).",
  },

  operacional: {
    estacionamento: true,
    acessibilidade: true,
    classificacao: "Livre para todas as idades",
    realocacaoDeMesa: false,
  },
} as const;

/** Link do WhatsApp, ou null enquanto o número não estiver confirmado. */
export function linkWhatsapp(): string | null {
  const { whatsapp, mensagem } = CAMPANHA.contato;
  if (!whatsapp) return null;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function precoFormatado(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

export function valorParcela(): string {
  return precoFormatado(CAMPANHA.preco.por / CAMPANHA.preco.parcelas);
}

export function descontoPercentual(): number {
  const { de, por } = CAMPANHA.preco;
  return Math.round((1 - por / de) * 100);
}

export type Restante = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  encerrado: boolean;
};

/**
 * Tempo restante até a virada do lote, quebrado em dias/horas/min/seg.
 *
 * Recebe `agora` para ser determinística e testável — e para que o servidor
 * renderize a mesma estrutura que o cliente irá recalcular na montagem.
 */
export function restanteAteViradaDeLote(agora: Date = new Date()): Restante {
  const alvo = new Date(CAMPANHA.lote.viraEm).getTime();
  let ms = alvo - agora.getTime();

  if (ms <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, encerrado: true };
  }

  const dias = Math.floor(ms / 86_400_000);
  ms -= dias * 86_400_000;
  const horas = Math.floor(ms / 3_600_000);
  ms -= horas * 3_600_000;
  const minutos = Math.floor(ms / 60_000);
  ms -= minutos * 60_000;
  const segundos = Math.floor(ms / 1000);

  return { dias, horas, minutos, segundos, encerrado: false };
}
