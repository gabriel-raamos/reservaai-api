const db = require('../models');
const Reserva = db.res_reserva;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    
    if (!req.body.res_id) {
        res.status(400).send({
            message: 'o conteudo nao pode ser vazio'
        })
        return;
    }

    const reserva = {
        res_id: req.body.res_id,
        res_status: req.body.res_status,
        res_dt_checkin: req.body.res_dt_checkin,
        res_dt_checkout: req.body.res_dt_checkout,
        cli_id: req.body.cli_id
    }

    Reserva.create(reserva)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'deu ruim'
            })
        })

}

exports.findAll = (req,res) => {
    Reserva.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(ress => {
        message:
            err.message || 'deu ruinzao'
    })
}