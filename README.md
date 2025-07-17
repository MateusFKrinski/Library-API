
# Library API

Esta é uma API RESTful desenvolvida com Node.js, Express e MongoDB (utilizando Mongoose) para gerenciamento de livros e autores. O sistema oferece funcionalidades completas de CRUD, suporte a paginação, ordenação e filtros avançados de consulta.

---

## Funcionalidades

- Operações CRUD para recursos de livros e autores
- Conexão com banco de dados MongoDB via Mongoose
- Paginação e ordenação de resultados via parâmetros de consulta
- Filtros dinâmicos em buscas de livros
- Estrutura modular, com organização por responsabilidades

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES6+)

---

## Estrutura de Diretórios

```
project-root/
│
├── src/
│   ├── config/                  
│   │   └── dbConnect.js
│   │
│   ├── controllers/             
│   │   ├── authorController.js
│   │   └── bookController.js
│   │
│   ├── errors/              
│   │   ├── Error404.js
│   │   ├── ErrorMessage.js
│   │   ├── ErrorRequest.js
│   │   └── ErrorValidation.js
│   │
│   ├── middlewares/         
│   │   ├── error404Middleware.js
│   │   ├── errorMiddleware.js
│   │   └── paginationMiddleware.js
│   │
│   ├── models/                 
│   │   ├── Author.js
│   │   ├── Book.js
│   │   ├── globalValidator.js
│   │   └── index.js
│   │
│   ├── routes/                
│   │   ├── authorsRoutes.js
│   │   ├── booksRoutes.js
│   │   └── index.js
│   │
│   └── app.js
│
└── server.js
```

---

## Instalação

1. Clone o repositório:

```bash
git clone -b master git@github.com:MateusFKrinski/Library-API.git
cd Library-API
```

2. Instale as dependências:

```bash
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
DATABASE_URL=<sua_url_mongodb>
```

> Observação: A variável `DATABASE_URL` deve conter a string de conexão com uma instância válida do MongoDB.

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

A API estará disponível em: `http://localhost:8080`

---

## Endpoints de Livros (`/books`)

### GET /books

Retorna uma lista paginada de livros.

**Parâmetros de consulta opcionais:**

| Parâmetro | Descrição                                   |
|-----------|---------------------------------------------|
| `limit`   | Número de itens por página                  |
| `page`    | Página atual                                |
| `field`   | Campo utilizado para ordenação              |
| `order`   | Direção da ordenação (`1` asc, `-1` desc)   |

---

### GET /books/search

Retorna livros com filtros específicos.

**Parâmetros de consulta:**

| Parâmetro     | Descrição                           |
|---------------|-------------------------------------|
| `title`       | Filtrar por título                  |
| `publisher`   | Filtrar por nome da editora         |
| `author_name` | Filtrar por nome do autor           |
| `limit`       | Número de itens por página          |
| `page`        | Página atual                        |
| `field`       | Campo utilizado para ordenação      |
| `order`       | Direção da ordenação (`1` ou `-1`)  |

---

### GET /books/:id

Retorna os dados de um livro específico com base no seu identificador.

---

### POST /books

Cria um novo livro. Requer um corpo de requisição com os dados do livro.

---

### PUT /books/:id

Atualiza os dados de um livro existente com base no identificador fornecido.

---

### DELETE /books/:id

Remove um livro do sistema.

---

## Endpoints de Autores (`/authors`)

### GET /authors

Retorna uma lista paginada de autores.

**Parâmetros de consulta opcionais:**

| Parâmetro | Descrição                                   |
|-----------|---------------------------------------------|
| `limit`   | Número de itens por página                  |
| `page`    | Página atual                                |
| `field`   | Campo utilizado para ordenação              |
| `order`   | Direção da ordenação (`1` asc, `-1` desc)   |

---

### GET /authors/:id

Retorna os dados de um autor específico.

---

### POST /authors

Cria um novo autor. Requer um corpo de requisição com os dados do autor.

---

### PUT /authors/:id

Atualiza os dados de um autor existente.

---

### DELETE /authors/:id

Remove um autor do sistema.

---

## Considerações

- Esta API não implementa autenticação ou controle de acesso.
- O projeto foi estruturado de forma modular, visando facilitar a manutenção, testes e expansão de funcionalidades futuras.
- Todos os erros são tratados e padronizados por middlewares especializados.

---

## Autor

**Mateus Krinski**  
[GitHub: github.com/MateusFKrinski](https://github.com/MateusFKrinski)
