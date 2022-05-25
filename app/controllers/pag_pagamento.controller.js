const db = require('../models');
const Pagamento = db.pag_pagamento;

exports.create = (req, res) => {

    if(!req.body.pag_id){
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const pagamento = {
        pag_id: req.body.pag_id,
        pag_valor: req.body.pag_valor,
        pag_tipo_pagamento: req.body.pag_tipo_pagamento,
        pag_dt_pagamento: req.body.pag_dt_pagamento
    }

    Pagamento.create(pagamento)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'deu ruim'
        })
    })
}

exports.findAll = (req, res) => {
    Pagamento.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'ocorreu um erro'
            })
        })
}

/*

pag_id
pag_valor
pag_tipo_pagamento
pag_dt_pagamento

*/