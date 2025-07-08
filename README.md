# NLW Agents - Backend API

Backend da aplicação NLW Agents desenvolvida durante o evento da Rocketseat. Uma API REST moderna construída com Node.js e TypeScript.

## 🛠️ Stack Tecnológica

- **Node.js** com TypeScript nativo (`--experimental-strip-types`)
- **Fastify** - Framework web performático com type safety
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** com extensão **pgvector** para embeddings
- **Zod** - Validação e serialização de schemas
- **Docker** - Containerização do banco de dados

## 🏗️ Arquitetura e Padrões

- **REST API** com validação automática de tipos
- **Schema-first** com Zod para request/response validation
- **Type Provider** para integração Fastify + Zod
- **Database Schema** com Drizzle para migrations
- **Environment Variables** com validação Zod
- **Code Quality** com Biome (linting + formatação)

## 🚀 Setup e Configuração

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

### 1. Instalação

```bash
# Instalar dependências
npm install
```

### 2. Configuração do Banco

```bash
# Iniciar PostgreSQL com Docker
docker-compose up -d

# Executar migrations
npm run db:migrate

# Popular banco com dados (opcional)
npm run db:seed
```

### 3. Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
PORT=3333
DATABASE_URL=postgres://docker:docker@localhost:5432/agents
```

### 4. Desenvolvimento

```bash
# Iniciar servidor em desenvolvimento
npm run dev

# Ou em produção
npm run start
```

## 📋 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento com watch mode
npm run start        # Produção
npm run db:generate  # Gerar migrations
npm run db:migrate   # Executar migrations
npm run db:seed      # Popular banco de dados
npm run db:studio    # Interface visual do banco
```

## 🗄️ Banco de Dados

### PostgreSQL com pgvector

- **Host**: localhost:5432
- **Database**: agents
- **User/Password**: docker/docker

### Schema Principal

```sql
-- Exemplo: tabela de salas
CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🌐 API Endpoints

Base URL: `http://localhost:3333`

### Rooms

- `GET /rooms` - Listar salas

## 🔧 Funcionalidades

- **Type Safety** - TypeScript nativo sem transpilação
- **Validação Automática** - Schemas Zod integrados ao Fastify
- **Hot Reload** - Watch mode para desenvolvimento
- **CORS** - Configurado para frontend local
- **Database Toolkit** - Drizzle ORM com migrations

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── schema/          # Schemas do banco
│   ├── migrations/      # Migrations SQL
│   ├── connection.ts    # Conexão DB
│   └── seed.ts         # Seeds
├── http/
│   └── routes/         # Rotas da API
├── env.ts              # Validação de env vars
└── server.ts           # Configuração do servidor
```

---

🚀 **Desenvolvido durante o NLW da Rocketseat**
