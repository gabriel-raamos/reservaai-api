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

app.listen(port, () => {
    console.log(`estamos rodando na porta ${port}`);
})
