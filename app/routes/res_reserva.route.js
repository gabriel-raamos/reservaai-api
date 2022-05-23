module.exports = app => {
    const reservas = require('../controllers/res_reserva.controller');
    const router = require('express').Router();

    router.post('/add',reservas.create);

    router.get('/see',reservas.findAll);

    app.use('/res',router);
}