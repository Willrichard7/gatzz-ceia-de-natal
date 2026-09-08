# Ceia de Natal GATZZ — Um Show de Natal

Landing page de campanha. Next 15 (App Router) + TypeScript + CSS Modules.
A página é totalmente pré-renderizada como HTML estático.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

---

## 🔴 Bloqueio único para ir ao ar

**O número do WhatsApp não está configurado.** Sem ele a página não tem nenhuma
ação clicável — os CTAs renderizam visíveis mas inertes.

⚠️ **O aviso visual no botão foi removido a pedido.** Antes o CTA exibia
"WhatsApp a configurar" logo abaixo do rótulo; agora ele parece pronto sem
estar. O único alerta que restou é um `console.warn` em desenvolvimento — em
produção não há sinal nenhum. **Não publique antes de preencher o número.**

Abra `lib/campanha.ts` e preencha:

```ts
contato: {
  whatsapp: "5554999999999",   // DDI + DDD + número, só dígitos
  mensagem: "Olá! Quero garantir minha mesa para a Ceia de Natal GATZZ (Lote 2).",
}
```

---

## Virada de lote

`lib/campanha.ts` é a fonte única de verdade. A virada para o Lote 3 em 01/10
é **uma edição de duas linhas** — nenhum componente é tocado:

```ts
lote: { numero: 3, viraEm: "2026-10-31T23:59:59-03:00" },
preco: { de: 1598, por: <novo valor>, ... },
```

O contador de dias, o selo verde no bilhete, o texto "válido até" e o
`schema.org/Offer` leem daí. Calendário: Lote 2 (set) → 3 (out) → 4 (nov) →
5 (dez, final).

---

## Pendências

| # | Item | Onde |
| - | ---- | ---- |
| 1 | **Número do WhatsApp** | `lib/campanha.ts` → `contato.whatsapp` |
| 2 | Domínio de produção | `app/layout.tsx` → `SITE` |
| 3 | Endereço completo | `lib/campanha.ts` → `local.endereco` (também alimenta o JSON-LD) |
| 4 | Imagem Open Graph 1200×630 | `public/og-ceia-de-natal.jpg` |
| 5 | Fonte **Mostra Nuova** (.woff2 + licença web) | `app/layout.tsx` |
| 6 | Hex oficial do verde da fita "2º Lote" | `app/globals.css` → `--verde` |
| 7 | Depoimentos reais, se a operação aprovar | nova seção |
| 8 | **Nomes e descrições dos 3 pratos veganos** | `components/Vegano.tsx` → `PRATOS` |

### Já entregues

A montagem 21:9 da segunda seção está em `public/fotos/montagem-espetaculo.jpg`
(2560×1097). **Ela traz a chamada da campanha embutida na arte** — por isso o
`alt` reproduz o texto ("muito mais que uma ceia, é Um Show de Natal"), senão a
mensagem some para quem usa leitor de tela e para a indexação.

Em tela estreita a caixa vira retrato (390×608) e o `cover` corta 72% da
largura. Funciona porque a arte foi composta centralizada: o elenco, o prato e
o lockup inteiro cabem nos 27,5% centrais. **Qualquer substituição precisa
respeitar essa área de segurança.**

As 3 fotos dos pilares ("Uma experiência completa em uma noite!") estão em
`public/fotos/` como `pilar-gastronomia.jpg`, `pilar-espetaculo.jpg` e
`pilar-papai-noel.jpg`.

As 3 fotos veganas estão em `public/fotos/` (`vegano-1.jpg` a `vegano-3.jpg`).
⚠️ **Os arquivos de origem se chamavam "Menu GATZZ Ano Novo_Veg-…"** — confirmar
com a operação se são os pratos da Ceia de Natal ou se vieram do menu de Ano
Novo por engano. Os nomes e descrições dos pratos continuam pendentes em
`components/Vegano.tsx`, e a correspondência foto ↔ prato não foi confirmada:
elas entraram na ordem dos arquivos (020, 028, 048).

As 6 fotos do menu estão em `public/fotos/` (`menu-0-antepastos.jpg` a
`menu-5-chocolates.jpg`), em 1200×900. **Vieram em 4:3, não no 3:4 que eu havia
especificado** — e o card foi adaptado para 4:3 em vez de cortar as fotos:
recortar tiraria 44% da largura e destruiria composições largas como a mesa de
antepastos e o bacalhau. Se um dia vierem versões verticais, é só voltar o
`aspect-ratio` em `Menu.module.css`.

### Ainda falta

- **Imagem Open Graph**, 1200×630, em `public/og-ceia-de-natal.jpg`.
- **Nomes e descrições dos 3 pratos veganos** (`components/Vegano.tsx`).
- **URL da landing page da Ceia de Ano Novo** (`components/AnoNovo.tsx` →
  `URL_ANO_NOVO`). Enquanto for `null`, o botão renderiza inerte de propósito:
  um link para `#` seria pior que link nenhum.

A vertical da seção "A noite, cena a cena" está em `public/fotos/a-noite-vertical.jpg`
(1440×1920). Ela é `position: sticky` no desktop, presa à altura da janela.
Isso não é enfeite: quando acompanhava a altura do texto, em 1024px a caixa
virava 512×1491 — proporção 0,34, mais estreita que 1:3, que nenhuma foto
sobrevive. Presa, a caixa fica entre 0,57 e 0,89 conforme a janela.

### Sobre a tipografia

O guia da campanha pede **Mostra Nuova** (título) e **Montserrat Medium** (texto).
Montserrat entra idêntica à especificação. Mostra Nuova é comercial e exige
licença de webfont — enquanto não chega, dois substitutos livres cobrem os papéis:

- `--fonte-display` → **Playfair Display**, a didone que ecoa o lettering
- `--fonte-deco` → **Josefin Sans**, stand-in da geométrica déco

Os papéis estão isolados em variáveis CSS: trocar para `next/font/local`
não toca nenhum componente.

---

## Decisões que valem saber

**O bilhete.** O desconto de 44% (`de R$1.598 por R$898`) é exatamente o que o
DNA da marca declara como anti-referência: "estética de panfleto promocional".
O KV resolve isso colocando o preço dentro de um bilhete de teatro — o desconto
deixa de ser oferta e vira ingresso. A página herda esse enquadramento.

**Contraste.** O gradiente dourado oficial (`#EBD6A4 → #9B7C4F`) **reprova como
fundo de texto**: na ponta escura, texto `#761316` dá 2,9:1. Por isso o CTA usa
`#EBD6A4` sólido (7,9:1) e o gradiente fica restrito a filetes, molduras e a
borda do bilhete. Não mude isso sem refazer a conta.

**Sem linhas douradas.** Os filetes que separavam as seções foram removidos, e
os separadores estruturais (listas, FAQ, tabela do convite) usam `--separador`,
um branco a 15%. O dourado ficou reservado para ação, moldura e o bilhete —
não use dourado em linha ao adicionar seções novas.

**"Sua" x "minha".** O título do convite diz "Garanta **sua** mesa" e o botão
diz "Garanta **minha** mesa". Não é inconsistência: a página fala com o leitor,
o botão fala pelo leitor.

**Movimento.** `prefers-reduced-motion` pausa o vídeo do hero — CSS não pausa
vídeo, então isso exige JS de verdade (`components/PalcoVideo.tsx`).

**Vídeos.** Três, e nenhum pesa no carregamento inicial:

- **Hero** — original 9,4 MB → **878 KB**, recortado para 4:5, sem áudio.
- **"Essa, é uma noite…"** — original 61 MB em HEVC → **2,6 MB** (H.264,
  608×1080, sem áudio). Só baixa quando o `IntersectionObserver` avisa que
  está a 300px da tela (`components/VideoAmbiente.tsx`). Se o áudio importar,
  ele precisa virar player com controles: autoplay só é permitido mudo.
- **Espetáculo (YouTube)** — não usa `<iframe>` direto. Um iframe do YouTube
  puxa centenas de kB de script e abre conexão com o Google no primeiro paint,
  para todo visitante, inclusive quem nunca dá play. A página mostra a capa e
  só monta o player no clique, pelo domínio `-nocookie`
  (`components/YouTubeFacade.tsx`).

Os três pausam sob `prefers-reduced-motion` — CSS não pausa vídeo, isso exige JS.
