import s from "./Secao.module.css";

type Props = {
  id?: string;
  olho?: string;
  titulo: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  /** Ritmo vertical: alternar o tom evita que a página vire um bloco só. */
  tom?: "vinho" | "escuro" | "vermelho" | "claro";
  /** Container mais largo, para grades de cards. */
  largo?: boolean;
  /** Centraliza o cabeçalho da seção (olho, título e intro) na página. */
  centralizado?: boolean;
};

export default function Secao({
  id,
  olho,
  titulo,
  intro,
  children,
  tom = "vinho",
  largo = false,
  centralizado = false,
}: Props) {
  return (
    <section id={id} className={`${s.secao} ${s[tom]}`}>
      <div
        className={`container ${largo ? s.largo : ""} ${
          centralizado ? s.centralizado : ""
        }`}
      >
        {olho ? <p className="olho">{olho}</p> : null}
        <h2 className={`display ${s.titulo}`}>{titulo}</h2>
        {intro ? <p className={s.intro}>{intro}</p> : null}
        {children ? <div className={s.corpo}>{children}</div> : null}
      </div>
    </section>
  );
}
