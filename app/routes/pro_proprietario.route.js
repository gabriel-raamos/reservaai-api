module.exports = app => {
    const proprietarios = require('../controllers/pro_proprietario.controller');
    const router = require('express').Router();

    router.post('/add',proprietarios.create);

    router.get('/see',proprietarios.findAll);

    router.get('/see/:id',proprietarios.findOne);

    app.use('/pro',router)
}