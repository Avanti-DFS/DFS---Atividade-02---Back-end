# Desenvolvimento de API REST para Gerenciamento de Eventos Culturais com Node.js, Express, PostgreSQL e Prisma ORM
## Desafio back-end | Bootcamp Desenvolvimento Full Stack | Instituto Atlântico Avanti
Desenvolvimento de API REST para Gerenciamento de Eventos Culturais com Node.js, Express, PostgreSQL e Prisma ORM. Inclui modelagem de dados e operações CRUD.  
<br>
**Equipe docente:**  
- **Professora:** Jheyele Raquel  
- **Facilitador**: Joeldo Olinda da Silva
<br>

___

## Documentação da API REST
A documentação fornece informações detalhadas sobre a utilização desta API REST, abrangendo suas rotas, métodos e as respostas esperadas.

***

### Guia de Configuração do Ambiente para Uso da API REST

___

#### Passo 01
Clone o repositório:  
```
https://github.com/Avanti-DFS/DFS---Atividade-02---Back-end.git
```
<br>

#### Passo 02
Instale as dependências do projeto:  
```
npm install
```
<br>

#### Passo 03
Atualize o arquivo **`.env`** na raiz do projeto, ajustando os parâmetros da variável de ambiente **`DATABASE_URL`**, que contém a URL de conexão com o banco de dados PostgreSQL, de acordo com as especificações fornecidas. Isso permitirá a correta configuração da conexão com o banco de dados.
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
A seguir estão os detalhes dos parâmetros que precisam ser ajustados para que a conexão com o banco de dados ocorra corretamente:  
- **`postgresql://`**: indica o tipo de banco de dados, que é o PostgreSQL.
- **`johndoe:randompassword`**: representa o nome de usuário (**`johndoe`**) e a senha (**`randompassword`**) usados para autenticar no banco de dados. Substitua-os pelo seu nome de usuário e senha do banco de dados PostgreSQL.
- **`@localhost:5432`**: especifica o host (**`localhost`**) e a porta (**`5432`**) em que o banco de dados está sendo executado. Nesse projeto, o banco de dados está sendo executado na máquina local (**`localhost`**) e usando a porta padrão do PostgreSQL (**`5432`**).
- **`mydb`**: é o nome do banco de dados ao qual deseja se conectar. Substitua-o pelo nome do banco de dados utilizado na aplicação.
- **`?schema=public`**: indica o esquema do banco de dados que será usado. Neste projeto, está sendo especificado o esquema público.  
<br>

#### Passo 04
Execute o comando **`generate`** fornecido pela ferramenta Prisma usando o **`npx`**:  
```
npx prisma generate
```
Esse comando cria automaticamente artefatos de código essenciais para o funcionamento do aplicativo, usando o Prisma.  
<br>

#### Passo 05
Como último passo, execute o comando **`db push`** fornecido pela ferramenta Prisma usando o **`npx`**, para enviar as alterações feitas no esquema do banco de dados com o Prisma para o seu banco de dados real:
```
npx prisma db push
```
Isso garantirá que a estrutura do banco de dados seja atualizada de acordo com as modificações realizadas no esquema do Prisma, mantendo-os sincronizados.  
<br>

___

### Endpoints da API REST

___

#### Entidade Locais:  
##### GET /locais
- **Exemplo de URL:** http://localhost:3000/locais
- **Descrição:** Retorna todos os locais armazenados no banco de dados.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### GET /locais/:id
- **Exemplo de URL:** http://localhost:3000/locais/:id
- **Descrição:** Retorna as informações de um local específico com base no seu id.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### POST /locais**
- **Exemplo de URL:** http://localhost:3000/locais
- **Descrição:** Insere um novo local no banco de dados.
- **Corpo da requisição:** em JSON:
```json
{
    "nome": String,
    "endereco": String
}
```
- **Exemplo de corpo da requisição:**
```json
{
    "nome": "Local A",
    "endereco": "Endereço do Local A"
}
```
- **Resposta (em caso de sucesso):** application/json, HTTP Status 201 (Created).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### PUT /locais/:id

- **Exemplo de URL:** http://localhost:3000/locais/:id
- **Descrição:** Atualiza o registro de um local no banco de dados a partir do seu id.
- **Corpo da requisição:** em JSON:
```json
{
    "nome": String,
    "endereco": String
}
```
- **Exemplo de corpo da requisição:**
```json
{
    "nome": "Local B",
    "endereco": "Novo endereço do Local B"
}
```
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### DELETE /locais/:id
- **Exemplo de URL:** http://localhost:3000/locais/:id
- **Descrição:** Exclui um local pelo seu id.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 204 (No Content).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

___

#### Entidade Categorias:  
##### GET /categorias
- **Exemplo de URL:** http://localhost:3000/categorias
- **Descrição:** Retorna todas as categorias armazenadas no banco de dados.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### GET /categoria/:id
- **Exemplo de URL:** http://localhost:3000/categoria/:id
- **Descrição:** Retorna as informações de uma categoria específica com base no seu id.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### POST /categoria**
- **Exemplo de URL:** http://localhost:3000/categoria
- **Descrição:** Cria uma nova categoria no banco de dados.
- **Corpo da requisição:** em JSON:
```json
{
    "categoria": String
}
```
- **Exemplo de corpo da requisição:**
```json
{
    "categoria": "Nome da Nova Categoria"
}
```
- **Resposta (em caso de sucesso):** application/json, HTTP Status 201 (Created).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### PUT /categoria/:id

- **Exemplo de URL:** http://localhost:3000/categoria/:id
- **Descrição:** Atualiza o registro de uma categoria no banco de dados a partir do seu id.
- **Corpo da requisição:** em JSON:
```json
{
    "categoria": String
}
```
- **Exemplo de corpo da requisição:**
```json
{
    "categoria": "Nome Atualizado da Categoria"
}
```
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### DELETE /categoria/:id
- **Exemplo de URL:** http://localhost:3000/categoria/:id
- **Descrição:** Exclui uma categoria pelo seu id.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 204 (No Content).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

___

#### Entidade Eventos:  
##### GET /eventos
- **Exemplo de URL:** http://localhost:3000/eventos
- **Descrição:** Retorna todas os eventos armazenadas no banco de dados.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### GET /evento/:id
- **Exemplo de URL:** http://localhost:3000/evento/:id
- **Descrição:** Retorna as informações de um evento específico com base no seu id.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### POST /evento**
- **Exemplo de URL:** http://localhost:3000/evento
- **Descrição:** Cria um novo evento no banco de dados.
- **Corpo da requisição:** em JSON:
```json
{
    "nome": String,
    "data": DateTime,
    "descricao": String,
    "categoria": String,,
    "categoria_id": String,,
    "local": Local String,,
    "local_id": String,
}
```
- **Exemplo de corpo da requisição:**
```json
{
    "nome": "Evento A",
    "data": "Data do evento A",
    "descricao": "Descrição do Evento A",
    "categoria": "Categoria do Evento A" ,
    "categoria_id": "e657fd8b-2f5f-4e94-b7cc-d5846d3f0597",
    "local": "Local do Evento A,
    "local_id": "f4d11558-8c37-40e8-9eb1-82781b49e1af" 
}
```
- **Resposta (em caso de sucesso):** application/json, HTTP Status 201 (Created).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### PUT /eventos/:id

- **Exemplo de URL:** http://localhost:3000/evento/:id
- **Descrição:** Atualiza o registro de um evento no banco de dados a partir do seu id.
- **Corpo da requisição:** em JSON:
```json
{
    "nome": String,
    "data": DateTime,
    "descricao": String,
    "categoria": String,,
    "categoria_id": String,,
    "local": Local String,,
    "local_id": String,
}
```
- **Exemplo de corpo da requisição:**
```json
{
    "nome": "Evento A",
    "data": "Data do evento A",
    "descricao": "Descrição do Evento A",
    "categoria": "Categoria do Evento A" ,
    "categoria_id": "e657fd8b-2f5f-4e94-b7cc-d5846d3f0597",
    "local": "Local do Evento A,
    "local_id": "f4d11558-8c37-40e8-9eb1-82781b49e1af" 
}
```
- **Resposta (em caso de sucesso):** application/json, HTTP Status 200 (OK).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

##### DELETE /eventos/:id
- **Exemplo de URL:** http://localhost:3000/evento/:id
- **Descrição:** Exclui um evento pelo seu id.
- **Resposta (em caso de sucesso):** application/json, HTTP Status 204 (No Content).
- **Resposta (em caso de recurso não encontrado):** application/json, HTTP Status 404 (Not Found).
- **Resposta (em caso de falha):** application/json, HTTP Status 500 (Internal Server Error).
<br>

___






