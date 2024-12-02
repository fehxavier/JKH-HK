const express = require('express');
const path = require('path');
const dataRoutes = require('./routes/routes');
const cors = require('cors');

const app = express();

const db = require('./models/dbConnect');

const Fornecedores = require('./models/Fornecedores');
const fornecedor = new Fornecedores();
fornecedor.init(db);

const Produtos = require('./models/Produtos');
const produto = new Produtos();
produto.init(db);



// Habilita CORS para permitir requisições do front-end
app.use(cors());

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Rotas
app.use('/', dataRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});