module.exports = (sequelize,Sequelize) => {
    const com_comodidade = sequelize.define('com_comodidade', {

        com_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        com_aquecimento: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_resfriamento: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_churrasqueira: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_fogao: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_geladeira: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_maquina: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_televisao: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_wifi: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_piscina: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        com_pet_friendly: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return com_comodidade;
}