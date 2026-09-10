import Image from "next/image";
import Link from "next/link";
import banner from "@/public/fotos/ano-novo.jpg";
import s from "./AnoNovo.module.css";

/* TODO(dev): URL da landing page da Ceia de Ano Novo. Enquanto for null, o
   botão renderiza inerte — um link para "#" seria pior que nenhum link. */
const URL_ANO_NOVO: string | null = null;

/**
 * Cross-sell da Ceia de Ano Novo.
 *
 * O funil trata Natal e Ano Novo como produtos independentes, então esta
 * chamada é complementar: aparece depois da oferta principal e usa botão
 * secundário, para não disputar a ação primária da página.
 */
export default function AnoNovo() {
  return (
    <section className={s.secao}>
      <div className={`container ${s.conteudo}`}>
        <h2 className={`display ${s.titulo}`}>
          Tenha um ano novo espetacular!
        </h2>

        <p className={s.texto}>Conheça também a Ceia de Ano-Novo do GATZZ.</p>

        <div className={s.card}>
          <Image
            src={banner}
            alt="Ceia de Ano Novo do GATZZ Fondue & Show: dois pratos emplatados sobre fundo champanhe dourado."
            className={s.banner}
            sizes="(min-width: 75rem) 1104px, 100vw"
            placeholder="blur"
          />
        </div>

        {URL_ANO_NOVO ? (
          <Link href={URL_ANO_NOVO} className={s.botao}>
            Ver a ceia de Ano-Novo
          </Link>
        ) : (
          <span className={s.botao} role="button" aria-disabled="true">
            Ver a ceia de Ano-Novo
          </span>
        )}
      </div>
    </section>
  );
}
