# Arquitetura técnica da IZA

## Princípio arquitetural

A arquitetura da IZA foi desenhada para separar quatro responsabilidades:

1. condução conversacional;
2. persistência do percurso;
3. análise e scoring;
4. curadoria do presente literário.

Nenhuma dessas camadas recebe autorização para assumir a autoria do texto.

## Fluxo de alto nível

```text
check-in
   ↓
sessão + perfil
   ↓
presença A/B/C/D/H
   ↓
trilha iniciante/intermediária/inspirada
   ↓
mensagens + eventos + memória curta
   ↓
síntese + perfil semântico
   ↓
curadoria do presente literário
   ↓
ledger de scoring em dark launch
```

## Frontend

A experiência utiliza HTML, CSS e JavaScript, com:

- máquina de estados;
- controle de trilha e passo;
- histórico de telas;
- persistência local para retomada;
- exportação de transcript;
- renderização de síntese e presente;
- regras separadas em `rules.js`.

O estado concentra identidade, presença, mistura híbrida, trilha, turnos, rubrica, síntese e flags operacionais.

## Motor conversacional

`rules.js` organiza:

- perguntas socráticas;
- marcadores temáticos;
- memória curta por regra;
- pesos por presença;
- pesos por trilha;
- variações de abertura, espelhamento e fechamento.

Trata-se de um motor deliberadamente limitado e inspecionável.

## Backend atual

A Fase 1 consolidou Supabase como backend principal para:

- perfis;
- sessões;
- mensagens;
- eventos;
- perfis semânticos;
- presentes literários;
- progresso;
- ledger de progresso.

Apps Script permanece como fallback congelado do presente literário e referência histórica.

## Scoring em dark launch

A função de scoring registra:

- qualidade da sessão;
- resumo de motivos;
- rubrica;
- diagnósticos;
- unidades potenciais de desbloqueio;
- versão do cálculo.

O modo atual mantém `applied_to_public_progress = false`. Portanto, a auditoria acontece sem alterar a experiência pública.

## Presente literário

O motor de curadoria:

- normaliza palavras-chave e síntese;
- descarta termos fracos;
- indexa base poética;
- calcula interseções lexicais e temáticas;
- aplica desempate;
- bloqueia correspondência baseada apenas em sinais frágeis;
- bloqueia repetição recente do poema ou excesso de repetição de autoria;
- aciona fallback limpo.

Versões operacionais documentadas:

- `normalizer_v1.2`;
- `literary_gift_guardrails_v0.7.1`.

## Segurança e governança

- Row Level Security nas tabelas centrais;
- revisão controlada do presente;
- fallback separado;
- ledger auditável;
- advanced chat desligado;
- progressão pública desligada;
- secrets restritos ao backend;
- testes de replay e smoke;
- auditorias SQL de configuração.

## Estado operacional

```text
literary_gift_engine_config.mode = controlled_production
literary_gift_engine_config.review_mode = true
literary_gift_engine_config.fallback_engine = apps_script
score-writing.scoring_mode = dark_launch
applied_to_public_progress = false
advanced-chat = off
```

## Critério de evolução

Uma funcionalidade só deve avançar de fase quando demonstrar:

- estabilidade técnica;
- coerência pedagógica;
- ausência de regressão;
- proteção dos dados;
- explicabilidade suficiente;
- possibilidade de revisão humana.
