# Documentação Técnica do Motors Shop

Projeto final do módulo M6 da Kenzie Academy Brasil.

## Introdução

Motors Shop é um projeto de um site de vendas de carros, que permite aos usuários criar, visualizar, editar e excluir anúncios de veículos com preço, detalhes do veículo e informações de contato do vendedor. Este projeto foi criado para praticar a implementação de um CRUD (Create, Read, Update, Delete) usando React no frontend e Node no backend.

## Tecnologias e Bibliotecas

O projeto utiliza as seguintes tecnologias e bibliotecas:

### Frontend

- React: Biblioteca para construir interfaces de usuário.
- React Route: Biblioteca de roteamento para React.
- Styled-components: Biblioteca para estilizar componentes React usando tagged template literals.
- React Icons: Biblioteca de ícones para projetos React.
- React Hook Form: Bibliotea para gerenciar formulários com hooks em projetos React.
- @hookform/resolvers: Biblioteca para criar resolvers de validação para o React Hook Form.
- Zod: Biblioteca de validação de dados e parsing.
- React Hot Toast: Biblioteca para adicionar notificações e toasts ao seu projeto React.

### Backend

### Tecnologias e bibliotecas

- Node.js: Plataforma de tempo de execução do lado do servidor para executar JavaScript.
- Express: Framework para desenvolvimento de aplicativos web e APIs em Node.js.
- TypeORM: ORM (Object-Relational Mapping) para JavaScript e TypeScript, permite trabalhar com bancos de dados usando uma API orientada a objetos.
- PostgreSQL: Banco de dados relacional e open-source.
- SQLite: Banco de dados SQL embutido e leve.
- bcryptjs: Biblioteca para criptografar senhas e outros dados sensíveis usando o algoritmo bcrypt.
- jsonwebtoken: Biblioteca para trabalhar com tokens JSON Web Token (JWT) para autenticação e autorização.
- dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- cors: Middleware para habilitar o CORS (Cross-Origin Resource Sharing) no aplicativo Express.
- uuid: Biblioteca para gerar identificadores únicos (UUIDs).
- zod: Biblioteca de validação de dados e análise para JavaScript e TypeScript.
- nodemailer: Biblioteca para enviar e-mails de dentro do aplicativo Node.js.
- mailgen: Biblioteca para gerar e-mails responsivos em HTML e texto simples.

### Ferramentas de Desenvolvimento

- Vite: Ferramenta de build e servidor de desenvolvimento.
- TypeScript (^4.9.3): Superset do JavaScript que adiciona tipos estáticos.

## Arquitetura

### Arquitetura

A arquitetura do projeto "Motors Shop" é dividida em duas partes principais: frontend e backend. O frontend é construído usando React, enquanto o backend utiliza Node.js, Express e TypeScript.

#### Frontend (React)

O frontend segue a arquitetura baseada em componentes oferecida pelo React. Os principais componentes incluem:

- Página inicial: Exibe os anúncios de veículos disponíveis.
- Página de detalhes do veículo: Mostra as informações detalhadas de um veículo específico.
- Página de cadastro: Permite que os usuários se cadastrem na plataforma.
- Página de login: Permite que os usuários façam login na plataforma.
- Página de perfil: Exibe e permite a edição das informações do usuário.
- Página de criação de anúncio: Permite aos usuários criar novos anúncios de veículos.

#### Backend (Node.js, Express e TypeScript)

O backend é construído com base no padrão de arquitetura MVC (Model-View-Controller) e segue as seguintes estruturas:

- Services: Contêm a lógica de negócios e a interação com os Models, isolando essa camada dos Controllers.
- Controllers: Coordenam a interação entre os Services e as respostas JSON enviadas ao frontend.
- Middlewares: Funções intermediárias que executam ações específicas (autenticação, tratamento de erros, etc.) antes de enviar a resposta final ao cliente.
- Routers: Gerenciam as rotas da aplicação, direcionando as requisições HTTP para os Controllers apropriados.

O backend se comunica com um banco de dados PostgreSQL para armazenar as informações dos usuários e anúncios de veículos.

## Como baixar e executar o projeto Motors Shop

Siga estas etapas para baixar e executar o projeto Motors Shop em seu computador local:

### Pré-requisitos

Certifique-se de ter instalado em seu computador:

- Node.js (versão 14 ou superior)
- Yarn (opcional, mas recomendado)
- Git

### Passo 1: Clonar o repositório Frontend

Abra um terminal e execute o seguinte comando para clonar o repositório do projeto Motors Shop:

```bash
git clone git@github.com:projeto-fullstack-M6/motors-shop.git
```

Este comando criará uma pasta chamada motors-shop contendo os arquivos do projeto.

### Passo 1.1: Clonar o repositório Backend

Abra um terminal e execute o seguinte comando:

```bash
git clone git@github.com:projeto-fullstack-M6/motors-API.git
```

Este comando criará uma pasta chamada motors-API contendo os arquivos do projeto.

## Passo 2: Instalar as dependências

Navegue até a pasta do projeto e instale as dependências do frontend.
execute:

```bash
cd motors-shop
npm install
```

```bash
cd motors-API
npm install

```

## Passo 3: Configurar o banco de dados

Configure o banco de dados PostgreSQL seguindo as instruções específicas do seu sistema operacional e crie um banco de dados chamado motors_shop.

Atualize o arquivo .env na pasta backend com as informações de conexão do seu banco de dados.

## Passo 4: Executar as migrações

Na pasta backend, execute o seguinte comando para criar as tabelas no banco de dados:

```bash
npm run typeorm migration:run

```

## Passo 5: Executar o projeto

Agora você pode executar o frontend e o backend do projeto Motors Shop. Abra dois terminais e navegue até as pastas frontend e backend. Em cada terminal, execute o seguinte comando:

Para o frontend:

```bash
npm run dev

```

Para o backend:

```bash
npm dev

```

Agora você pode começar a explorar o projeto Motors Shop!
