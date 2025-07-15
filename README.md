# API de Livros Simples

Esta é uma API REST simples para gerenciar livros e autores, construída com Node.js, Express e MongoDB usando Mongoose.

## Funcionalidades

* CRUD de livros (`Book`)
* CRUD de autores (`Author`)
* Conexão com banco de dados MongoDB via Mongoose

## Tecnologias Utilizadas

* Node.js
* Express.js
* MongoDB + Mongoose
* JavaScript
* dotenv

## Estrutura de Pastas

```
src/
│
├── config/              
│   └── dbConnect.js
│
├── controllers/         
│   ├── authorController.js
│   └── bookController.js
│
├── models/              
│   ├── Author.js
│   └── Book.js
│
├── routes/              
│   ├── authorsRoutes.js
│   ├── booksRoutes.js
│   └── index.js         
│
├── app.js               
└── server.js            
```

## Instalação e Uso

1. Clone o repositório:

```bash
git clone git@github.com:MateusFKrinski/Simple-Book-API.git
cd Simple-Book-API
```

2. Instale as dependências:

```bash
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```env
DATABASE_URL=<sua_url>
```

4. Inicie o servidor:

```bash
yarn dev
```

5. Acesse a API em: `http://localhost:8080`

## Rotas

### Autores

* `GET /authors`
* `GET /authors/:id`
* `POST /authors`
* `PUT /authors/:id`
* `DELETE /authors/:id`

### Livros

* `GET /books`
* `GET /books/search?publisher=`
* `GET /books/:id`
* `POST /books`
* `PUT /books/:id`
* `DELETE /books/:id`

## Notas

* Esta API não possui autenticação (ideal para aprendizado e testes).
* O código está modularizado para fácil manutenção e expansão.
