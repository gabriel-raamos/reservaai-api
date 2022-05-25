module.exports = app => {
    const comodidades = require('../controllers/com_comodidade.controller');
    const router = require('express').Router();

    router.post('/add',comodidades.create);

    router.get('/see',comodidades.findAll);

    router.get('/see/:id',comodidades.findOne);

    app.use('/com',router);
}