# 👨‍💼 Sistema de Gerenciamento de Colaboradores

## 👤 Integrante

**Trícia Britto**

---

## 📖 Descrição do Sistema

O Sistema de Gerenciamento de Colaboradores foi desenvolvido para auxiliar uma empresa no gerenciamento de informações de seus funcionários.

A aplicação permite cadastrar, consultar, atualizar e remover colaboradores por meio de uma API REST integrada ao banco de dados MySQL. Além disso, possui uma interface web simples para cadastro e visualização dos dados armazenados.

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
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   └── database/
│       └── connection.js
│
├── prints-postman/
│   ├── GET-colaboradores.png
│   ├── POST-colaborador.png
│   ├── PUT-colaborador.png
│   └── DELETE-colaborador.png
│
├── prints-sistema/
│   ├── tela-inicial.png
│   ├── cadastro-colaborador.png
│   └── listagem-colaboradores.png
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

A API utiliza a biblioteca **mysql2** para realizar a conexão com o banco de dados MySQL.

Arquivo responsável pela conexão:

```text
src/database/connection.js
```

Todas as informações dos colaboradores são armazenadas diretamente no banco de dados, garantindo persistência dos dados.

---

## 🚀 Funcionamento da API

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

Todas as respostas da API são retornadas em formato JSON.

---

## 🔄 Implementação do CRUD

### ➕ Create

Permite cadastrar novos colaboradores.

### 📖 Read

Permite visualizar os colaboradores cadastrados.

### ✏️ Update

Permite atualizar informações dos colaboradores.

### 🗑️ Delete

Permite remover colaboradores do sistema.

---

## 💻 Funcionamento do Frontend

A interface web permite:

* ✅ Cadastrar colaboradores;
* ✅ Listar colaboradores cadastrados;
* ✅ Enviar informações para a API;
* ✅ Exibir dados armazenados no banco de dados.

A comunicação entre frontend e backend é realizada por meio de requisições HTTP utilizando JavaScript.

---

## 🧪 Testes Realizados no Postman

Todas as rotas da API foram testadas utilizando o Postman.

### Rotas testadas

* ✅ POST – Cadastro de colaborador
* ✅ GET – Listagem de colaboradores
* ✅ PUT – Atualização de colaborador
* ✅ DELETE – Remoção de colaborador

As evidências dos testes estão disponíveis na pasta:

```text
prints-postman/
```

---

## 📸 Evidências do Sistema

As capturas de tela do funcionamento da aplicação estão disponíveis na pasta:

```text
prints-sistema/
```

Incluindo:

* Tela inicial
* Cadastro de colaboradores
* Listagem de colaboradores

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

### 6️⃣ Abrir o frontend

Abra o arquivo:

```text
frontend/index.html
```

em seu navegador.

---

## 📊 Dados Utilizados

O sistema possui registros de colaboradores com informações coerentes para uma empresa real, atendendo aos requisitos da atividade.

---

## 🎯 Considerações Finais

Este projeto foi desenvolvido para aplicar os conhecimentos adquiridos em Node.js, Express, MySQL, APIs REST, CRUD, JSON, integração Frontend/Backend e testes utilizando o Postman.

A aplicação simula um sistema real de gerenciamento de colaboradores, permitindo o armazenamento e gerenciamento eficiente das informações dos funcionários da empresa.
