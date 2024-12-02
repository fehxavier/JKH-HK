const connection = require('../models/dbConnect');
const db = require('../models/dbConnect');
const Fornecedores = require('../models/Fornecedores');
const { connect } = require('../routes/routes');

const fornecedor = new Fornecedores();

function insertFornecedoresData(req, res) {
    fornecedor.insertFornecedores(req, res, db);
}

function updateFornecedoresData(req, res) {
    fornecedor.updateFornecedores(db, req, res);
}

function deleteFornecedoresData(req, res) {
    fornecedor.deleteFornecedores(db, req, res);
}

async function getAllFornecedoresData(req, res) {
    try {
        const fornecedores = await fornecedor.getAllFornecedores(db);

        // Formatar o JSON conforme esperado pelo frontend
        const formattedFornecedores = fornecedores.map(fornecedor => ({
            id: fornecedor.id,
            nome: fornecedor.nome,
            cpfCnpj: fornecedor.cpf_cnpj,
            telefone: fornecedor.telefone,
            email: fornecedor.email,
            endereco: fornecedor.endereco
        }));

        res.json(formattedFornecedores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar fornecedores' });
    }
}
  
module.exports = { insertFornecedoresData, getAllFornecedoresData, updateFornecedoresData, deleteFornecedoresData };
