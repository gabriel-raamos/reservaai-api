module.exports = app => {
    const clientes = require('../controllers/cli_cliente.controller');
    const router = require('express').Router();

    router.post('/add',clientes.create);

    router.get('/see',clientes.findAll);

    router.get('/cli.res',clientes.cli_res);

    router.get('/test',clientes.test);

    app.use('/cli',router);
}