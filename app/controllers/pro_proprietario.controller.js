const db = require('../models');
const Proprietario = db.pro_proprietario;

exports.create = (req,res) => {

    if (!req.body.pro_id) {
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const proprietario = {
        pro_id: req.body.pro_id,
        pro_nome: req.body.pro_nome,
        pro_dt_nascimento: req.body.pro_dt_nascimento,
        pro_cpf: req.body.pro_cpf,
        pro_email: req.body.pro_email,
        pro_senha: req.body.pro_senha
    }

    Proprietario.create(proprietario)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || `Não foi possível criar o proprietário ${pro_nome}`
        })
    })
}

exports.findAll = (req,res) => {
    Proprietario.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Ocorreu um erro.'
        })
    })
}

exports.findOne = (req,res) => {
    const id = req.params.id;
    Proprietario.findByPK(id)
    .then(data => {
        if (data) {
            res.send(data)
        } else {
            res.status(404).send({
                message: `Não foi possível encontrar o proprietário com id ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Ocorreu um erro.'
        })
    })
}






