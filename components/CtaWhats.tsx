import Link from "next/link";
import { linkWhatsapp } from "@/lib/campanha";
import s from "./CtaWhats.module.css";

type Props = {
  children?: React.ReactNode;
  /** "primario" é o dourado sólido. "vazado" acompanha, sem competir. */
  variante?: "primario" | "vazado";
  /** Rótulo acessível quando o texto visível não basta sozinho. */
  rotulo?: string;
};

/**
 * A ação primária da página.
 *
 * Dourado sólido #ebd6a4 sobre texto #761316 = 7,9:1 (AAA).
 * Não use o gradiente completo como fundo de texto: na ponta escura
 * (#9b7c4f) o contraste cai para 2,9:1 e reprova.
 */
export default function CtaWhats({
  children = "Garanta minha mesa",
  variante = "primario",
  rotulo,
}: Props) {
  const href = linkWhatsapp();
  const classe = `${s.cta} ${variante === "vazado" ? s.vazado : s.primario}`;

  if (!href) {
    // Sem número confirmado o botão não tem para onde levar. O aviso visual
    // saiu a pedido, então o alerta agora vive só no console de dev e no
    // README — em produção o botão parece pronto sem estar.
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[CTA] CAMPANHA.contato.whatsapp está vazio: o botão não leva a lugar nenhum. Preencha em lib/campanha.ts."
      );
    }
    return (
      <span
        className={`${classe} ${s.pendente}`}
        role="button"
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={classe}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotulo}
    >
      {children}
    </Link>
  );
}
