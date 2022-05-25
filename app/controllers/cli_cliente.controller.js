const { res_reserva } = require('../models');
const db = require('../models');
const Cliente = db.cli_cliente;

exports.create = (req, res) => {

    if (!req.body.cli_id) {
        res.status(400).send({
            message: 'O conteúdo não pode ser vazio.'
        })
        return;
    }

    const cliente = {
        cli_id: req.body.cli_id,
        cli_nome: req.body.cli_nome,
        cli_dt_nasc: req.body.cli_dt_nasc,
        cli_cpf: req.body.cli_cpf,
        cli_email: req.body.cli_email,
        cli_senha: req.body.cli_senha
    }

    Cliente.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "deu ruim"
            })
        })

}

exports.findAll = (req, res) => {
    Cliente.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            message:
                err.message || 'deu ruim vei'
        })
}

exports.cli_res = (req,res) => {
    Cliente.findAll({
        attribute: ['cli_nome'],
        field: 'cli_nome',
        include: [ 
            {model: res_reserva, attribute: ['res_id']}
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            message:
                err.message || 'deu ruim vei'
        })
}



// TENTATIVA DE ESPECIFICAR COLUNAS QUE SERÃO BUSCADAS
// NÃO DEU CERTO
exports.test = (req,res) => {
    Cliente.findAll({
        attibutes: {
            exclude: ['cli_dt_nasc','cli_dt_nasc','cli_email'],
            include: ['cli_id','cli_nome','cli_cpf']
        },
        include: {
            model: res_reserva,
            attibutes: ['cli_id']
        }
    }).then(data => {
        res.send(data);
    });
}
