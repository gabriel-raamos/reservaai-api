const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./app/models');
db.sequelize.sync();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('teste');
})

require('./app/routes/cli_cliente.route')(app)
require('./app/routes/res_reserva.route')(app)
require('./app/routes/pag_pagamento.route')(app)
require('./app/routes/pro_proprietario.route')(app)
require('./app/routes/aco_acomodacao.route')(app)
require('./app/routes/com_comodidade.route')(app)
require('./app/routes/end_endereco.route')(app)

app.listen(port, () => {
    console.log(`estamos rodando na porta ${port}`);
})
