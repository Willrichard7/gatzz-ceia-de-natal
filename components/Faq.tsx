import Secao from "./Secao";
import s from "./Faq.module.css";

export const PERGUNTAS = [
  {
    p: "É apenas uma ceia ou há um espetáculo completo?",
    r: "Há um espetáculo completo. Simplesmente Natal reúne elenco, figurino e música ao vivo e acontece diante do público, intercalado com os cinco tempos do menu. No GATZZ, o espetáculo não é ambientação: é parte central da noite.",
  },
  {
    p: "A experiência é indicada para crianças?",
    r: "Sim. A classificação é livre e a noite foi criada para envolver adultos e crianças. A entrega de presentes pelo Papai Noel acontece durante a celebração.",
  },
  {
    p: "Como funciona a entrega de presentes pelo Papai Noel?",
    r: "Os responsáveis devem levar os presentes ao GATZZ durante a tarde do dia 24. Durante a celebração, o Papai Noel entra em cena e faz a entrega.",
  },
  {
    p: "O que está incluso no valor?",
    r: "Mesa de antepastos natalinos, menu completo em cinco tempos, espumantes da Serra Gaúcha, refrigerantes da linha Coca-Cola, águas, o espetáculo Simplesmente Natal e a entrega de presentes pelo Papai Noel.",
  },
  {
    p: "Qual é o horário e quanto tempo dura?",
    r: "As portas abrem às 20h, com tolerância de 30 minutos. A experiência se encerra à meia-noite.",
  },
  {
    p: "Como faço a reserva?",
    r: "A reserva é feita pelo WhatsApp da casa. A compra deve ser concluída com pelo menos duas horas de antecedência em relação ao horário da reserva.",
  },
  {
    p: "Posso trocar de mesa depois de reservar?",
    r: "Não. Após a confirmação da reserva, não é possível mudar a mesa escolhida.",
  },
  {
    p: "O GATZZ tem estacionamento?",
    r: "Sim. Se você pretende consumir bebidas alcoólicas, prefira táxi ou transporte por aplicativo para aproveitar a noite com tranquilidade.",
  },
  {
    p: "O espaço é acessível?",
    r: "Sim. Se houver alguma necessidade específica, informe a equipe no momento da reserva para que a casa prepare a melhor acomodação.",
  },
  {
    p: "O valor muda?",
    r: "Sim. As vendas acontecem por lotes e o valor aumenta a cada virada. O preço desta página corresponde ao 2º lote e é válido até 30 de setembro.",
  },
];

export default function Faq() {
  return (
    <Secao
      id="duvidas"
      tom="escuro"
      olho="Antes de reservar"
      titulo={<>Tudo o que você precisa saber para a noite.</>}
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
