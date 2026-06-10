# 👨‍💼 Sistema de Gerenciamento de Colaboradores

## 👤 Integrante

**Trícia Britto**

---

## 📖 Descrição do Sistema

O Sistema de Gerenciamento de Colaboradores foi desenvolvido para auxiliar uma empresa no gerenciamento das informações de seus funcionários.

A aplicação permite cadastrar, listar, atualizar e remover colaboradores por meio de uma API REST integrada ao banco de dados MySQL. Além disso, possui uma interface web simples para facilitar a visualização e o gerenciamento dos dados.

---

## 🛠️ Tecnologias Utilizadas

### ⚙️ Backend

* Node.js
* Express.js
* MySQL2
* JSON

### 🎨 Frontend

* HTML5
* CSS3
* JavaScript

### 🗄️ Banco de Dados

* MySQL

### 🧪 Ferramentas de Teste

* Postman

---

## 📁 Estrutura do Projeto

```text
Sistema-de-gerenciamento-de-colaboradores/
│
├── frontend/
│
├── src/
│   └── database/
│       └── connection.js
│
├── prints/
│   ├── estrutura.png
│   ├── mysql.png
│   ├── postman-delete.png
│   ├── postman-get.png
│   ├── postman-post.png
│   ├── postman-put.png
│   └── tela.png
│
├── database.sql
├── server.js
├── package.json
└── README.md
```

---

## 🗃️ Estrutura do Banco de Dados

### Banco de Dados

```sql
empresa
```

### Tabela: colaboradores

| Campo         | Tipo    |
| ------------- | ------- |
| id            | INT     |
| nome_completo | VARCHAR |
| idade         | INT     |
| cargo         | VARCHAR |
| salario       | DECIMAL |
| tempo_empresa | INT     |
| data_admissao | DATE    |
| setor         | VARCHAR |
| status        | VARCHAR |

---

## 🔗 Integração com MySQL

A API utiliza a biblioteca **mysql2** para estabelecer conexão com o banco de dados MySQL.

O arquivo responsável pela conexão é:

```text
src/database/connection.js
```

Todas as operações de cadastro, consulta, atualização e exclusão são realizadas diretamente no banco de dados, garantindo persistência das informações.

---

## 🚀 Funcionamento da API

A API segue o padrão REST e disponibiliza as seguintes rotas:

### ➕ Cadastrar colaborador

```http
POST /colaboradores
```

### 📋 Listar colaboradores

```http
GET /colaboradores
```

### ✏️ Atualizar colaborador

```http
PUT /colaboradores/:id
```

### 🗑️ Remover colaborador

```http
DELETE /colaboradores/:id
```

Todas as respostas são retornadas em formato JSON.

---

## 🔄 Implementação do CRUD

### ➕ Create

Cadastro de novos colaboradores.

### 📖 Read

Listagem de colaboradores cadastrados.

### ✏️ Update

Atualização dos dados dos colaboradores.

### 🗑️ Delete

Remoção de colaboradores do sistema.

---

## 💻 Funcionamento do Frontend

A interface web permite:

* ✅ Cadastrar colaboradores;
* ✅ Listar colaboradores cadastrados;
* ✅ Enviar dados para a API;
* ✅ Exibir informações armazenadas no banco de dados.

A comunicação entre frontend e backend é realizada através de requisições HTTP utilizando JavaScript.

---

## 🧪 Testes Realizados no Postman

Foram realizados testes em todas as rotas da API:

* ✅ POST – Cadastro de colaborador
* ✅ GET – Listagem de colaboradores
* ✅ PUT – Atualização de colaborador
* ✅ DELETE – Remoção de colaborador

As evidências dos testes podem ser encontradas na pasta:

```text
prints/
```

Arquivos:

* postman-post.png
* postman-get.png
* postman-put.png
* postman-delete.png

---

## 📸 Evidências do Sistema

As capturas de tela do sistema estão disponíveis na pasta:

```text
prints/
```

Arquivos:

* tela.png
* mysql.png
* estrutura.png

---

## ▶️ Instruções para Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/tricibritto/Sistema-de-gerenciamento-de-colaboradores.git
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Criar o banco de dados

Execute o arquivo:

```text
database.sql
```

no MySQL Workbench.

### 4️⃣ Configurar a conexão

Verifique as credenciais do banco de dados no arquivo:

```text
src/database/connection.js
```

### 5️⃣ Iniciar o servidor

```bash
node server.js
```

ou

```bash
npm start
```

### 6️⃣ Executar o Frontend

Abra o arquivo HTML localizado na pasta `frontend` em seu navegador.

---

## 📊 Dados Utilizados

O sistema possui mais de 10 colaboradores cadastrados, contendo informações coerentes com um ambiente empresarial real, atendendo aos requisitos da atividade.

---

## 🎯 Considerações Finais

Este projeto foi desenvolvido com o objetivo de aplicar os conhecimentos adquiridos em Node.js, Express, MySQL, APIs REST, CRUD, JSON, integração Frontend/Backend e testes utilizando o Postman.

A aplicação simula um sistema real de gerenciamento de colaboradores, permitindo o armazenamento e gerenciamento eficiente das informações dos funcionários de uma empresa.
