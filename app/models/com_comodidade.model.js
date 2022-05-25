module.exports = (sequelize,Sequelize) => {
    const com_comodidade = sequelize.define('com_comodidade', {

        com_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        com_aquecimento: {
            type: Sequelize.BOOLEAN            
        },

        com_resfriamento: {
            type: Sequelize.BOOLEAN            
        },

        com_churrasqueira: {
            type: Sequelize.BOOLEAN            
        },

        com_fogao: {
            type: Sequelize.BOOLEAN            
        },

        com_geladeira: {
            type: Sequelize.BOOLEAN            
        },

        com_maquina: {
            type: Sequelize.BOOLEAN            
        },

        com_televisao: {
            type: Sequelize.BOOLEAN            
        },

        com_wifi: {
            type: Sequelize.BOOLEAN            
        },

        com_piscina: {
            type: Sequelize.BOOLEAN            
        },

        com_pet_friendly: {
            type: Sequelize.BOOLEAN            
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return com_comodidade;
}