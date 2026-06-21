# Arquitetura técnica da Inanna

## Visão

A Inanna combina dois princípios:

- o fluxo principal deve ser explicável e não generativo;
- recursos generativos devem ficar isolados, governados e desligáveis.

## Arquitetura de alto nível

```text
navegador / Vite
   ↓
app.js + prediction_engine_v2.js + cordel_rhyme_bank.js
   ↓
supabase-client.js
   ↓
Supabase: Postgres + RPCs + views + RLS
   ↓
placar + perfil + quadras + maestria + caderno
```

Nível 2, quando habilitado:

```text
frontend
   ↓
inanna-level2-agent / Cloudflare Worker
   ├── Maritaca Sabiá-4
   ├── fallback Workers AI
   ├── rubricas com Llama 3.1 8B
   └── Supabase service role fora do navegador
```

## Frontend

Arquivos centrais:

- `index.html`;
- `styles.css`;
- `app.js`;
- `prediction_engine_v2.js`;
- `cordel_rhyme_bank.js`;
- `supabase-client.js`.

Build:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

O build usa Vite 7 e copia ativos estáticos para `dist`.

## Motor preditivo

O motor calcula cinco dimensões:

1. compatibilidade temática;
2. rima esperada;
3. pista sintática;
4. coerência da quadra;
5. frequência local.

Ele inclui:

- normalização de tokens;
- vocabulário por tema;
- detecção sintática;
- busca por finais de três, duas e uma letra;
- palavra-alvo conforme esquema;
- breakdown para o modal de vetor.

O banco de rimas complementa o vocabulário sem esconder o raciocínio.

## Pontuação

O frontend calcula a pontuação depois do quarto verso. O backend valida os dados na gravação.

Critérios:

- rima final;
- forma;
- criatividade;
- independência;
- originalidade;
- bônus de esquema;
- penalidade por repetição.

Coerência narrativa e verossimilhança regional ficam reservadas ao Nível 3.

## Supabase

Migrations documentadas criam e evoluem:

- participantes;
- perfil estatístico;
- quadras;
- reações;
- view pública do placar;
- progresso;
- jogadores do Nível 2;
- sessões;
- rounds;
- votos;
- folhetos;
- textos;
- versões;
- espaço futuro para feedback e léxico local.

## Privacidade

A view `placar_publico` não expõe:

- e-mail;
- campos estatísticos;
- dados privados do check-in.

Ela publica apenas:

- autoria pública;
- quadra;
- pontos;
- breakdown;
- timestamp;
- origem legada;
- reações.

Políticas RLS restringem gravação ao participante identificado e mantêm o caderno isolado.

## Primeiro acesso

Se um e-mail ainda não existir no Supabase, o frontend pode consultar um Apps Script administrativo.

Esse serviço:

1. lê a aba privada `USERS`;
2. faz upsert em `public.participantes`;
3. devolve identidade mínima;
4. não expõe a planilha por link público.

Nos acessos seguintes, a resolução ocorre diretamente no Supabase.

## Migração legada

O importador foi desenhado para ser idempotente:

- dry run;
- parsing;
- upsert;
- detecção de duplicidade;
- segunda execução sem reinserção.

O histórico documentado registra 18 participantes e 44 quadras importadas sem erro.

## Nível 2

O Worker mantém fora do frontend:

- service role do Supabase;
- chave da Maritaca;
- token administrativo;
- segredo Turnstile;
- prompts;
- lógica de avaliação.

A ativação é controlada por variáveis `VITE_*` no frontend e secrets na Cloudflare.

## Produção

- hospedagem: Vercel;
- domínio: `inanna.cordel2pontozero.com`;
- backend: Supabase;
- analytics: Vercel Analytics;
- runtime config: Supabase Edge Function;
- GitHub: versionamento e integração de deploy.

## Princípio técnico

> O motor explicável deve permanecer funcional mesmo quando a camada generativa estiver desligada.
