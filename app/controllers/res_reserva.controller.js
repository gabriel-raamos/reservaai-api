const db = require('../models');
const Reserva = db.res_reserva;

exports.create = (req,res) => {
    
    if (!req.body.res_id) {
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const reserva = {
        res_id: req.body.res_id,
        res_status: req.body.res_status,
        res_dt_checkin: req.body.res_dt_checkin,
        res_dt_checkout: req.body.res_dt_checkout,
        cli_id: req.body.cli_id,
        pag_id: req.body.pag_id,
        aco_id: req.body.aco_id
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