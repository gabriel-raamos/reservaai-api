module.exports = (sequelize, Sequelize) => {
    const pro_proprietario = sequelize.define('pro_proprietario', {

        pro_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        pro_nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },

        pro_dt_nascimento: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },

        pro_cpf: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        
        pro_email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true
        },

        pro_senha: {
            type: Sequelize.STRING(255),
            allowNull: false
        }

    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return pro_proprietario;
}