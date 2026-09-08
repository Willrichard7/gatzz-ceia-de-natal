import Secao from "./Secao";
import s from "./Faq.module.css";

export const PERGUNTAS = [
  {
    p: "É só um jantar ou tem espetáculo de verdade?",
    r: "Tem espetáculo de verdade. Simplesmente Natal é uma montagem com elenco, figurino e música, apresentada à sua frente e intercalada com os tempos do jantar. O GATZZ é uma casa de fondue e show — o espetáculo é parte do produto, não música ambiente.",
  },
  {
    p: "É indicado para crianças?",
    r: "Sim. A classificação é livre, para todas as idades, e o Papai Noel faz a entrega dos presentes durante a celebração. A experiência foi construída para prender adultos e crianças ao mesmo tempo.",
  },
  {
    p: "Como funciona a entrega de presentes pelo Papai Noel?",
    r: "Os responsáveis que quiserem devem levar os presentes ao GATZZ no período da tarde do dia 24. Durante a celebração, o Papai Noel entra em cena e faz a entrega.",
  },
  {
    p: "O que está incluso no valor?",
    r: "Menu completo em cinco tempos, mesa de antepastos natalinos, seleção de espumantes da Serra Gaúcha, refrigerantes da linha Coca-Cola, águas, o espetáculo Simplesmente Natal e a entrega de presentes pelo Papai Noel.",
  },
  {
    p: "Qual o horário e quanto dura?",
    r: "As portas abrem às 20h, com tolerância de 30 minutos, e a noite se encerra à meia-noite.",
  },
  {
    p: "Como funciona a reserva?",
    r: "A reserva é feita pelo WhatsApp da casa, e a compra deve ser realizada com no mínimo 2 horas de antecedência em relação ao horário da reserva.",
  },
  {
    p: "Posso trocar de mesa depois de reservar?",
    r: "Não. Uma vez confirmada, não é possível realizar a realocação de mesa.",
  },
  {
    p: "Tem estacionamento?",
    r: "Sim. Mas bons drinks vão bem com uma dose extra de despreocupação: para aproveitar ao máximo, deixe o carro na garagem e pegue carona. É melhor não dirigir depois do espetáculo — você vai sair embriagado de emoção.",
  },
  {
    p: "O espaço é acessível?",
    r: "Sim, a casa é acessível. Se houver alguma necessidade específica, avise no momento da reserva para que a equipe prepare a melhor acomodação.",
  },
  {
    p: "O valor muda?",
    r: "Sim, a campanha funciona em lotes e o valor sobe a cada virada. O valor desta página é o do 2º lote e vale até 30 de setembro.",
  },
];

export default function Faq() {
  return (
    <Secao
      id="duvidas"
      tom="escuro"
      olho="Antes de reservar"
      titulo={<>As perguntas que todo mundo faz.</>}
    >
      <div className={s.lista}>
        {PERGUNTAS.map((item) => (
          <details key={item.p} className={s.item} name="faq">
            <summary className={s.pergunta}>
              <span>{item.p}</span>
              <span className={s.sinal} aria-hidden="true" />
            </summary>
            <p className={s.resposta}>{item.r}</p>
          </details>
        ))}
      </div>
    </Secao>
  );
}
