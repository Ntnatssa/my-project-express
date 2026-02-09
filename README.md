# 🚀 API de Treinamento Express.js

Esta é uma API RESTful desenvolvida para fins educacionais, focada em ensinar as melhores práticas de desenvolvimento com Node.js, Express e persistência de dados.

## 🛠️ Tecnologias Utilizadas

* **Node.js & Express**: Base do servidor.
* **Sequelize & SQLite**: Banco de dados relacional e ORM.
* **Zod**: Validação de esquemas e dados de entrada.
* **Dotenv**: Gerenciamento de variáveis de ambiente.
* **Middleware Pattern**: Tratamento global de erros e autenticação simulada.

## 🏗️ Estrutura do Projeto

src/
├── config/       # Conexão com banco de dados
├── controllers/  # Lógica de negócio
├── middlewares/  # Filtros de autenticação, validação e erro
├── models/       # Definição das tabelas (Sequelize)
├── routes/       # Definição dos endpoints
├── utils/        # Funções auxiliares (ex: catchAsync)
└── validators/   # Esquemas de validação do Zod

## ⚙️ Como Rodar o Projeto

1. **Clone o repositório:**
```bash
git clone [https://github.com/SEU_USUARIO/meu-projeto-express.git](https://github.com/SEU_USUARIO/meu-projeto-express.git)

2. **Instale as dependências:**
```bash
npm install

3. **Configure o ambiente: Crie um arquivo .env na raiz e adicione:**
```bash
PORT=3000

4. **Inicie o servidor:**
```bash
npm start
ou
npm run dev

## 📡 Guia da API (Endpoints)
Todas as rotas da API requerem o header de autenticação: Authorization: senha123
Método	Rota	Descrição
GET	/api/users	Lista todos os usuários cadastrados no SQLite.
POST	/api/users	Cria um novo usuário (Valida nome e email).
PUT	/api/users/:id	Atualiza dados de um usuário pelo ID.
DELETE	/api/users/:id	Remove um usuário permanentemente.

## 🛡️ Tratamento de Erros e Validação
A API está preparada para responder com status codes semânticos:
400 Bad Request: Quando a validação do Zod falha (ex: email inválido).
401 Unauthorized: Quando o header de autorização está ausente ou incorreto.
404 Not Found: Quando o ID do usuário não existe no banco de dados.
500 Internal Error: Erros inesperados tratados pelo Middleware Global.

Desenvolvido como material de apoio para treinamento em Node.js.