module.exports = app => {
    const enderecos = require('../controllers/end_endereco.controller');
    const router = require('express').Router();

    router.post('/add',enderecos.create);

    router.get('/see',enderecos.findAll);

    router.get('/see/:id',enderecos.findOne);

    app.use('/end',router);
}