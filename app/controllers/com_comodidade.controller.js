const db = require('../models');
const Comodidade = db.com_comodidade;

exports.create = (req,res) => {

    if (!req.body.com_id) {
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const comodidade = {
        com_id: req.params.com_id,
        com_aquecimento: req.params.com_aquecimento,
        com_resfriamento: req.params.com_resfriamento,
        com_churrasqueira: req.params.com_churrasqueira,
        com_fogao: req.params.com_fogao,
        com_geladeira: req.params.com_geladeira,
        com_maquina: req.params.com_maquina,
        com_televisao: req.params.com_televisao,
        com_wifi: req.params.com_wifi,
        com_piscina: req.params.com_piscina,
        com_pet_friendly: req.params.com_pet_friendly
    }

    Comodidade.create(comodidade)
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
    Comodidade.findAll()
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
    Comodidade.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: err.message || `Não foi possível encontrar uma comodidade com o id ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Ocorreu um erro.'
        })
    })
}

