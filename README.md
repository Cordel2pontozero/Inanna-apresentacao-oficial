<div align="center">

<img src="https://images.squarespace-cdn.com/content/v1/679647ea404fcd2e5824402c/1938d5a3-1a0c-4427-af11-28af5cdc051d/IZA%2Bcapa.png" alt="IZA — Chatbot Reflexivo do Laboratório Cordel 2.0" width="720">

# IZA — Perguntar para pensar. Pensar para escrever.

### Chatbot reflexivo brasileiro para escrita guiada, autoria e letramento em IA

[![Status](https://img.shields.io/badge/status-controlled%20production-B55A30)](#estado-do-produto)
[![Supabase](https://img.shields.io/badge/backend-Supabase-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![JavaScript](https://img.shields.io/badge/frontend-JavaScript-F7DF1E?logo=javascript&logoColor=111111)](https://developer.mozilla.org/docs/Web/JavaScript)
[![IA responsável](https://img.shields.io/badge/IA-autoria%20humana-6F3E56)](#ia-com-limites-visíveis)
[![Conteúdo](https://img.shields.io/badge/conteúdo-CC%20BY--ND%204.0-B55A30)](LICENSE.md)

**Presenças conversacionais · Trilhas de escrita · Síntese da jornada · Presente literário**

[Ver apresentação](./docs/APRESENTACAO.md) · [Arquitetura](./docs/ARQUITETURA.md) · [Roadmap](./docs/ROADMAP.md) · [Laboratório Cordel 2.0](https://www.cordel2pontozero.com/laboratorio)

</div>

---

## IZA não escreve por você

IZA é uma experiência de escrita reflexiva inspirada na história de **ELIZA** e na força pedagógica da **maiêutica socrática**. Seu papel não é produzir uma resposta pronta: é perguntar a partir do que a pessoa diz, devolver pistas e ajudar o texto a encontrar um centro.

> **A conversa não substitui a autoria. Ela cria espaço para que a autoria apareça.**

## Uma experiência com presença

A pessoa pode escolher como deseja ser acompanhada — ou responder a um teste breve que combina as presenças:

| Presença | Como acompanha |
|---|---|
| **Discreta** | Intervém pouco e preserva silêncio e tempo de elaboração. |
| **Calorosa** | Acolhe imagens, afetos e hesitações sem assumir o texto. |
| **Firme** | Faz perguntas diretas e chama atenção para decisões de escrita. |
| **Minimalista** | Reduz a intervenção ao essencial. |
| **Híbrida** | Combina pesos das quatro presenças a partir de cinco respostas. |

Cada presença altera abertura, espelhamento, fechamento, peso das regras e tom das perguntas.

## Três trilhas de escrita

### Iniciante

Um percurso orientado que ajuda a localizar núcleo, centro, atrito, cena e frase final.

### Intermediária

Aprofunda tema, concretude, contraste, síntese e forma final.

### Inspirada

Abre uma conversa mais livre, com memória curta e mínimo de sete rodadas antes do encerramento.

## Da conversa ao texto

Ao final da jornada, a plataforma pode organizar:

- síntese da experiência;
- palavras-chave;
- transcript completo;
- checklist e rubrica;
- texto final destacado;
- **presente literário** relacionado às imagens e aos temas da conversa.

O presente literário não é uma recompensa aleatória. Um motor de curadoria normaliza os termos da jornada, consulta uma base poética, pontua correspondências e aplica guardrails contra combinações fracas ou repetições recentes.

## IA com limites visíveis

A arquitetura atual separa camadas para que automação não vire autoridade:

```text
pessoa autora
    ↓ traz memória, desejo, conflito e linguagem
presença conversacional
    ↓ pergunta, espelha e organiza o percurso
motor de regras
    ↓ aplica marcadores socráticos e pesos por trilha
perfil semântico
    ↓ registra sinais sem assumir a escrita
curadoria literária
    ↓ oferece um fragmento, com guardrails e fallback
pessoa autora
    ↓ decide o que permanece, muda ou recomeça
```

A camada avançada de conversa generativa permanece desligada na produção controlada. O progresso público, personas e desbloqueios também não são alterados pelo scoring em dark launch.

## Engenharia por trás da delicadeza

```text
┌──────────────────────────────────────────────────────────────┐
│ Experiência: presenças · trilhas · síntese · presente        │
├──────────────────────────────────────────────────────────────┤
│ Frontend: HTML · CSS · JavaScript · máquina de estados       │
├──────────────────────────────────────────────────────────────┤
│ Regras: marcadores socráticos · memória curta · pesos        │
├──────────────────────────────────────────────────────────────┤
│ Backend: Supabase · Postgres · Edge Functions · RLS          │
├──────────────────────────────────────────────────────────────┤
│ Segurança: guardrails · fallback · ledger · dark launch      │
└──────────────────────────────────────────────────────────────┘
```

Detalhes técnicos que importam:

- Supabase como backend principal de sessões, mensagens, eventos e perfis;
- Apps Script preservado como fallback congelado do presente literário;
- máquina de estados no frontend;
- regras conversacionais versionáveis;
- persistência e retomada da sessão;
- normalizador semântico versionado;
- bloqueio de matches literários fracos;
- cooldown de poema e autoria;
- ledger auditável para scoring;
- relatórios de smoke test, replay e auditoria;
- Row Level Security nas tabelas centrais.

## Estado do produto

### Disponível em produção controlada

- check-in e identidade de participante;
- quatro presenças fixas e uma híbrida;
- trilhas iniciante, intermediária e inspirada;
- motor de regras socráticas;
- retomada da jornada;
- síntese, palavras-chave e transcript;
- presente literário com guardrails;
- backend Supabase;
- auditoria de scoring em dark launch.

### Deliberadamente desligado

- barra pública de progresso;
- desbloqueios e personas públicas;
- aplicação automática do scoring ao progresso;
- conversa avançada com Maritaca.

### Próximos passos

- piloto vivo com observação humana;
- barra beta de progresso;
- desbloqueios graduais;
- personas;
- conversa avançada somente após validação pedagógica e operacional.

## Para quem a IZA foi pensada

- escolas, universidades e bibliotecas;
- oficinas de escrita e projetos culturais;
- formação inicial e continuada de educadores;
- laboratórios de autoria;
- iniciativas de saúde narrativa e expressão, sem função clínica;
- programas de letramento em inteligência artificial.

## Apresentação e origem técnica

- [Apresentação institucional](./docs/APRESENTACAO.md)
- [Arquitetura técnica](./docs/ARQUITETURA.md)
- [Roadmap](./docs/ROADMAP.md)
- [SEO e publicação](./docs/SEO_E_REPOSITORIO.md)
- [Repositório técnico de origem](https://github.com/outcast2020/iza-app)

A versão web desta vitrine está em [`index.html`](./index.html) e pode ser publicada pelo GitHub Pages.

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

O código desta vitrine utiliza Licença MIT. Textos institucionais e identidade seguem CC BY-ND 4.0. Consulte [LICENSE.md](LICENSE.md).
