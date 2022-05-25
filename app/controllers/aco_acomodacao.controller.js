const db = require('../models');
const Acomodacao = db.aco_acomodacao;

exports.create = (req, res) => {

    if (!req.body.aco_id) {
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const acomodacao = {
        aco_id: req.body.aco_id,
        aco_capacidade: req.body.aco_capacidade,
        aco_capacidade_garagem: req.body.aco_capacidade_garagem,
        aco_qnt_banheiros: req.body.aco_qnt_banheiros,
        aco_qtd_quartos: req.body.aco_qtd_quartos,
        pro_id: req.body.pro_id,
        end_id: req.body.end_id,
        com_id: req.body.com_id
    }

    Acomodacao.create(acomodacao)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Não foi possível criar a acomodação.'
            })
        })
}

exports.findAll = (req, res) => {
    Acomodacao.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Não foi possível concluir a busca pela acomodação.'
            })
        })
}