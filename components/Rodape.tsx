import { CAMPANHA } from "@/lib/campanha";
import { LogoGatzz } from "./Marca";
import s from "./Rodape.module.css";

export default function Rodape() {
  const { local } = CAMPANHA;

  return (
    <footer className={s.rodape}>
      <div className={`container ${s.conteudo}`}>
        <LogoGatzz className={s.logo} titulo="GATZZ Fondue & Show" />
        <p className={`display ${s.cidade}`}>
          {local.cidade} — {local.estado}
        </p>
      </div>
    </footer>
  );
}
