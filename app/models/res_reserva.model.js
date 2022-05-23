module.exports = (sequelize, Sequelize) => {
    const res_reserva = sequelize.define('res_reserva', {

        res_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        res_status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        res_dt_checkin: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },

        res_dt_checkout: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return res_reserva;
}