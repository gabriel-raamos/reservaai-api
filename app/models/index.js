const Sequelize = require('sequelize');
const config = require('../config/database.config');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password,{
  host: config.host,
  dialect: config.dialect
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.cli_cliente = require('./cli_cliente.model')(sequelize, Sequelize);
db.res_reserva = require('./res_reserva.model')(sequelize, Sequelize);
db.pag_pagamento = require('./pag_pagamento.model')(sequelize, Sequelize);
db.aco_acomodacao = require('./aco_acomodacao.model')(sequelize,Sequelize);
db.end_endereco = require('./end_endereco.model')(sequelize, Sequelize);
db.pro_proprietario = require('./pro_proprietario.model')(sequelize,Sequelize);
db.com_comodidade = require('./com_comodidade.model')(sequelize,Sequelize);

// ASSOCIAÇÕES ENTRE AS TABELAS
// (FOREIGN KEYS)

db.cli_cliente.hasMany(db.res_reserva, {
  foreignKey: {
    name: 'cli_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})

db.res_reserva.hasOne(db.pag_pagamento, {
  foreignKey: {
    name: 'res_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})

db.res_reserva.hasOne(db.aco_acomodacao, {
  foreignKey: {
    name: 'res_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})

db.end_endereco.hasMany(db.aco_acomodacao, {
  foreignKey: {
    name: 'end_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})

db.pro_proprietario.hasMany(db.aco_acomodacao, {
  foreignKey: {
    name: 'pro_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})

db.aco_acomodacao.hasOne(db.com_comodidade, {
  foreignKey: {
    name:'aco_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})

module.exports = db;