module.exports = (sequelize, Sequelize) => {
    const pag_pagamento = sequelize.define('pag_pagamento', {

        pag_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        pag_valor: {
            type: Sequelize.DECIMAL(7,2),
            allowNull: false
        },

        pag_tipo_pagamento: {
            type: Sequelize.STRING(45),
            allowNull: false
        },

        pag_dt_pagamento: {
            type: Sequelize.DATE,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return pag_pagamento;
}