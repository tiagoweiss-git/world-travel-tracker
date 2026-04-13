# 🌍 Guia Completo — Do Artefato ao Deploy
> Baseado no projeto World Travel Tracker — Apr 2026

---

## FASE 1 — Prototipação no Claude (claude.ai)

**Objetivo:** Validar o visual e a lógica antes de escrever qualquer infraestrutura.

1. Descrever o projeto detalhadamente para o Claude (funcionalidades, design, dados)
2. Iterar o artefato React até o resultado desejado
3. Antes de exportar, pedir ao Claude para **refatorar as funções de dados** em funções isoladas (`loadData`, `saveData`, `createItem`, `updateItem`, `deleteItem`) com comentários indicando onde substituir pelo Supabase
4. Adicionar `"use client";` como primeira linha do componente (obrigatório para Next.js)
5. Copiar o código final pelo botão de cópia do artefato

---

## FASE 2 — Instalações necessárias (apenas na primeira vez)

### Node.js
- Baixar em **nodejs.org** → versão LTS → Instalador Windows (.msi)
- Instalar com as opções padrão (next, next, finish)

### Git
- Baixar em **git-scm.com**
- Instalar com as opções padrão

### Liberar PowerShell para rodar scripts
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# Confirmar com "S"
```

### Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

---

## FASE 3 — Criar o projeto Next.js

```bash
# Criar o projeto (responder as perguntas conforme abaixo)
npx create-next-app@latest nome-do-projeto

# Respostas recomendadas:
# TypeScript → No
# ESLint → Yes
# Tailwind CSS → No
# src/ directory → No
# App Router → Yes
# Turbopack → No
# Customize import alias → No

# Entrar na pasta
cd nome-do-projeto

# Abrir no VS Code
code .
```

---

## FASE 4 — Colar o código do artefato

1. Abrir a pasta `app` no VS Code
2. Clicar em `page.tsx`
3. Selecionar tudo com **Ctrl+A** e apagar com **Delete**
4. Colar o código com **Ctrl+V**
5. Garantir que a **primeira linha** do arquivo é:
```js
"use client";
```
6. Salvar com **Ctrl+S**

---

## FASE 5 — Testar localmente

```bash
npm run dev
```
Abrir o navegador em **http://localhost:3000**

> ⚠️ Login com Google não funciona localmente — só após o deploy no Vercel.

---

## FASE 6 — Subir para o GitHub

### Configurar Git (apenas na primeira vez)
```bash
git config --global user.email "seu@email.com"
git config --global user.name "Seu Nome"
```

### Criar repositório
1. Ir em **github.com** → botão **+** → **New repository**
2. Dar um nome ao repositório
3. Escolher **Public** ou **Private**
4. **Não marcar** nenhuma opção extra (sem README, sem .gitignore)
5. Clicar em **Create repository**

### Enviar o código
```bash
# Inicializar o Git na pasta do projeto
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "primeiro commit - nome do projeto"

# Conectar com o repositório do GitHub (copiar do GitHub)
git remote add origin https://github.com/seu-usuario/nome-do-repo.git

# Definir branch principal
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### Para commits futuros (após alterações)
```bash
git add .
git commit -m "descrição da alteração"
git push
```

---

## FASE 7 — Configurar o Supabase

### Criar conta e projeto
1. Acessar **supabase.com** → entrar com GitHub
2. Clicar em **New project**
3. Preencher:
   - **Name:** nome-do-projeto
   - **Database password:** senha forte (guardar!)
   - **Region:** South America (São Paulo)
4. Aguardar ~2 minutos

### Criar as tabelas (schema.sql)
1. No menu lateral → **SQL Editor** → **New query**
2. Abrir o arquivo `supabase/schema.sql` no VS Code
3. Copiar todo o conteúdo (**Ctrl+A** → **Ctrl+C**)
4. Colar no SQL Editor e clicar em **Run**
5. Resultado esperado: `Success. No rows returned`

### Popular dados iniciais (seed.sql) — se houver
1. **SQL Editor** → **New query** (nova aba)
2. Repetir o processo com o arquivo `supabase/seed.sql`
3. Atenção: corrigir erros de caracteres especiais (ex: `"Xi'an"` → `'Xi''an'`)

### Pegar as credenciais
1. **Settings → Data API** → copiar a **Project URL**
2. **Settings → API Keys** → copiar a **Publishable key**

> ⚠️ Nunca compartilhe essas chaves publicamente!

---

## FASE 8 — Deploy no Vercel

### Criar conta
1. Acessar **vercel.com** → entrar com GitHub

### Fazer o deploy
1. Clicar em **Add New Project**
2. Selecionar o repositório do GitHub
3. Clicar em **Import**
4. **Antes de clicar em Deploy**, adicionar as variáveis de ambiente:

| Nome | Valor |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Publishable key do Supabase |

5. Clicar em **Deploy**
6. Aguardar ~2 minutos
7. Anotar a URL gerada (ex: `nome-do-projeto.vercel.app`)

---

## FASE 9 — Configurar autenticação com Google

### No Google Cloud Console (console.cloud.google.com)

1. Criar um novo projeto
2. Menu lateral → **APIs e serviços** → **Credenciais**
3. Configurar a tela de consentimento:
   - Clicar em **Configurar tela de consentimento**
   - Tipo: **Externo**
   - Nome do app, email de suporte e contato
   - Salvar
4. Criar credencial OAuth:
   - **+ Criar credenciais** → **ID do cliente OAuth**
   - Tipo: **Aplicativo da Web**
   - Nome: nome do projeto
   - **URIs de redirecionamento autorizados:**
     ```
     https://SEU-PROJETO.supabase.co/auth/v1/callback
     ```
   - Criar e **guardar o Client ID e Client Secret**

### No Supabase

**Authentication → URL Configuration:**
- **Site URL:** `https://nome-do-projeto.vercel.app`
- **Redirect URLs:** `https://nome-do-projeto.vercel.app/**`
- Salvar

**Authentication → Providers → Google:**
- Ativar o toggle
- Colar o **Client ID** e **Client Secret** do Google Cloud
- Salvar

### Aguardar ~5 minutos e testar o login

---

## FASE 10 — Usando o Claude Code para evoluções

```bash
# Entrar na pasta do projeto
cd nome-do-projeto

# Iniciar o Claude Code
claude

# Na primeira vez: autenticar seguindo o link que aparece no terminal
```

A partir daí, conversar em português com o Claude Code para:
- Integrar com o Supabase
- Adicionar novas funcionalidades
- Corrigir erros
- Fazer refatorações

Após alterações feitas pelo Claude Code, sempre commitar:
```bash
git add .
git commit -m "descrição da alteração"
git push
```
O Vercel faz o redeploy automaticamente após cada push! 🚀

---

## Resumo das contas necessárias

| Serviço | URL | Para quê | Custo |
|---------|-----|----------|-------|
| GitHub | github.com | Versionar código | Grátis |
| Vercel | vercel.com | Publicar o site | Grátis |
| Supabase | supabase.com | Banco de dados + Auth | Grátis |
| Google Cloud | console.cloud.google.com | Login com Google | Grátis |

---

## Dicas importantes

- **Nunca** compartilhe chaves de API publicamente (nem no chat!)
- Sempre fazer `git push` após alterações para o Vercel atualizar automaticamente
- O arquivo `.env.local` guarda as variáveis de ambiente localmente — nunca commitar esse arquivo
- Erros no terminal são normais — copiar a mensagem e perguntar ao Claude
- O fluxo **artefato → VS Code → Claude Code** é ideal para aprender progressivamente

---

*Gerado após a sessão de criação do World Travel Tracker — Abril 2026*