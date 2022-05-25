const db = require('../models');
const Endereco = db.end_endereco;

exports.create = (req,res) => {

    if (!req.body.pro_id) {
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const endereco = {
        end_id: req.params.end_id,
        end_logradouro: req.params.end_logradouro,
        end_numero: req.params.end_numero,
        end_bairro: req.params.end_bairro,
        end_cep: req.params.end_cep,
        end_cidade: req.params.end_cidade,
        end_uf: req.params.end_uf
    }

    Endereco.create(endereco)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Ocorreu um erro.'
        })
    })
}

exports.findAll = (req,res) => {
    Endereco.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Ocorreu um erro.'
        })
    })
}

exports.findOne = (req,res) => {
    const id = req.params.id;
    Endereco.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Ocorreu um erro.'
        })
    })
}