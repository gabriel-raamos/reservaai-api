module.exports = (sequelize, Sequelize) => {
    const end_endereco = sequelize.define('end_endereco', {

        end_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        end_logradouro: {
            type: Sequelize.STRING(100),
            allowNull: false
        },

        end_numero: {
            type: Sequelize.STRING(10),
            allowNull: false
        },

        end_bairro: {
            type: Sequelize.STRING(50),
            allowNull: false
        },

        end_cep: {
            type: Sequelize.STRING(10),
            allowNull: false
        },

        end_cidade: {
            type: Sequelize.STRING(50),
            allowNull: false
        },

        end_uf: {
            type: Sequelize.CHAR(2),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return end_endereco;
}