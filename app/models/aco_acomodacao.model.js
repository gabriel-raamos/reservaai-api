module.exports = (sequelize, Sequelize) => {
    const aco_acomodacao = sequelize.define('aco_acomodacao', {

        aco_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        aco_capacidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        aco_capacidade_garagem: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        aco_qnt_banheiros: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        aco_qtd_quartos: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return aco_acomodacao;
}