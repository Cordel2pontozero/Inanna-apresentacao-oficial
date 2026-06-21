<div align="center">

<img src="https://images.squarespace-cdn.com/content/v1/679647ea404fcd2e5824402c/e4599821-6576-437c-b477-2274244b43c5/Inanna%2BVertical.png" alt="Inanna — Proto-IA Educativa do Laboratório Cordel 2.0" width="620">

# Inanna — A rima humana vence a previsão

### Jogo educativo de cordel, autoria e letramento em inteligência artificial

[![Produção](https://img.shields.io/badge/status-produção-7B2F72)](https://inanna.cordel2pontozero.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Supabase](https://img.shields.io/badge/backend-Supabase-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/deploy-Vercel-111111?logo=vercel)](https://vercel.com/)
[![Autoria](https://img.shields.io/badge/princípio-autoria%20humana-F2A900)](#prever-não-é-criar)

**Quadras · Previsão explicável · Modo Desafio · Maestria · Peleja · Caderno de Sextilhas**

[Experimentar](https://inanna.cordel2pontozero.com) · [Ver apresentação](./docs/APRESENTACAO.md) · [Arquitetura](./docs/ARQUITETURA.md) · [Roadmap](./docs/ROADMAP.md)

</div>

---

## Prever não é criar

Inanna é uma **proto-IA educativa**: um jogo que torna visível como sistemas computacionais tentam prever a próxima palavra. A pessoa escreve um verso; o motor observa contexto, tema, rima e frequência; depois apresenta candidatos e probabilidades.

A escolha continua aberta:

- aceitar uma sugestão;
- inspecionar o vetor que a produziu;
- rejeitar a previsão;
- inventar uma palavra inesperada;
- sustentar a rima com uma escolha própria.

> **A rima da história humana ganha mais pontos do que a previsão da máquina.**

## Nível 1 — A oficina da próxima palavra

A experiência combina literatura de cordel e explicação algorítmica:

1. a pessoa escolhe uma trilha e um tema;
2. escreve um verso;
3. o sistema separa a palavra final;
4. o motor calcula candidatos;
5. a pessoa compara probabilidades;
6. aceita uma sugestão ou mantém a própria escolha;
7. fecha uma quadra de quatro versos;
8. recebe pontuação no Modo Desafio;
9. pode enviar a criação ao placar.

## Um vetor que pode ser lido

O motor preditivo utiliza cinco dimensões:

| Dimensão | Pergunta didática |
|---|---|
| **Tema** | A palavra pertence ao campo escolhido? |
| **Rima esperada** | Ela conversa com o esquema da quadra? |
| **Pista sintática** | O contexto sugere substantivo, verbo ou adjetivo? |
| **Coerência** | A escolha mantém relação com os versos anteriores? |
| **Frequência** | Quanto a palavra aparece no mini-corpus? |

O modal de vetor mostra o detalhamento em vez de esconder o cálculo atrás de uma resposta mágica.

## Pontuação que premia independência

O Modo Desafio observa:

- rima final;
- esquema sorteado;
- forma da quadra;
- criatividade autoral;
- independência da sugestão;
- originalidade lexical;
- ausência de repetição da palavra final.

Repetir a mesma palavra não conta como rima criativa. Uma rima surpresa fora do banco local pode receber reconhecimento adicional.

## Trilha de Maestria

O Nível 2 pode ser liberado por duas rotas:

- cinco quadras perfeitas únicas;
- conquista das oito marcas de maestria.

As marcas reconhecem forma, rima, esquema forte, criatividade, independência, ausência de repetição, ausência de falha e domínio de diferentes esquemas.

## Nível 2 — Peleja com Inanna

A infraestrutura do Nível 2 está implementada e controlada por flags de ambiente. Quando habilitada, a experiência organiza uma peleja em melhor de três:

- tema e esquema sorteados;
- quadra inicial do jogador;
- resposta provocadora da Inanna;
- oportunidade de melhorar a quadra;
- avaliação mecânica e por rubricas;
- decisão do round;
- resultado da peleja.

O frontend conversa com um Worker que mantém prompts e chaves fora do navegador. A geração pode usar Maritaca Sabiá-4, com fallback para Workers AI, e a avaliação combina modelo de linguagem com regras de forma e rima.

**Na configuração pública documentada, a IA generativa e o envio social permanecem desligados por ambiente até ativação controlada.**

## Caderno de Sextilhas

O ecossistema também preserva um espaço de escrita longa:

- folhetos;
- rascunhos;
- textos;
- versões;
- histórico;
- comparação lado a lado;
- status editorial;
- feedback de IA reservado para fase posterior.

A escrita não some depois do jogo: ela pode amadurecer como portfólio.

## Engenharia do jogo

```text
┌──────────────────────────────────────────────────────────────┐
│ Experiência: quadra · vetor · desafio · maestria · peleja    │
├──────────────────────────────────────────────────────────────┤
│ Frontend: HTML · CSS · JavaScript · Vite 7                   │
├──────────────────────────────────────────────────────────────┤
│ Motores: prediction_engine_v2 · banco local de rimas         │
├──────────────────────────────────────────────────────────────┤
│ Dados: Supabase · Postgres · RPCs · views · RLS              │
├──────────────────────────────────────────────────────────────┤
│ IA controlada: Cloudflare Worker · Maritaca · Workers AI     │
├──────────────────────────────────────────────────────────────┤
│ Produção: Vercel · domínio próprio · analytics               │
└──────────────────────────────────────────────────────────────┘
```

Detalhes nerds com função pedagógica:

- Vite 7 e pnpm;
- Supabase para check-in, perfil, quadras, placar e caderno;
- view pública sem e-mail ou campos estatísticos;
- RPCs para perfil e reações;
- Row Level Security;
- importação legada idempotente;
- runtime config por Edge Function;
- motor preditivo local e inspecionável;
- banco lexical de rimas;
- Worker para o Nível 2;
- secrets isolados;
- flags de ativação;
- Vercel Analytics.

## Estado do produto

### Em produção

- check-in;
- perfil de primeiro acesso;
- escolha de tema;
- motor de previsão;
- vetor explicável;
- quadras;
- Modo Desafio;
- pontuação;
- placar;
- reações;
- Trilha de Maestria;
- caderno e versões;
- Supabase + Vercel.

### Implementado com ativação controlada

- peleja em três rounds;
- geração provocadora;
- avaliação por rubricas;
- ditado por voz;
- áudio;
- liberação condicionada à maestria.

### Planejado ou reservado

- feedback generativo no caderno;
- envio social por e-mail;
- léxico local persistente;
- Nível 3 com coerência narrativa e verossimilhança regional;
- expansão comunitária.

## Para quem Inanna foi criada

- escolas e universidades;
- oficinas de cordel e hip-hop;
- bibliotecas e projetos culturais;
- programas de letramento em IA;
- formação de educadores;
- eventos, mostras e laboratórios de escrita;
- comunidades que desejam compreender algoritmos sem abandonar cultura e autoria.

## Apresentação e origem técnica

- [Apresentação institucional](./docs/APRESENTACAO.md)
- [Arquitetura técnica](./docs/ARQUITETURA.md)
- [Roadmap](./docs/ROADMAP.md)
- [SEO e publicação](./docs/SEO_E_REPOSITORIO.md)
- [Repositório técnico de origem](https://github.com/outcast2020/inanna-0.2)
- [Aplicativo em produção](https://inanna.cordel2pontozero.com)

## Identidade e contato

<div align="center">
<img src="https://images.squarespace-cdn.com/content/v1/679647ea404fcd2e5824402c/ee6b5141-5692-4533-9323-31939bc1f471/LOGO%2BCORDEL-COLOR.png" alt="Logomarca Cordel 2.0" width="180">

**Cordel 2.0 Inova Simples (I.S.)**  
Inovação · Criação · Letramento em IA  
Salvador — Bahia — Brasil

[www.cordel2pontozero.com](https://www.cordel2pontozero.com)  
[contato@cordel2pontozero.com](mailto:contato@cordel2pontozero.com)

</div>

## Licenciamento

O código desta vitrine utiliza Licença MIT. Textos institucionais e identidade seguem CC BY-ND 4.0. Os textos criados pelos participantes permanecem de autoria de seus respectivos criadores.
