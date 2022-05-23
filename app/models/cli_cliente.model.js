module.exports = (sequelize, Sequelize) => {
    const cli_cliente = sequelize.define('cli_cliente', {
        
        cli_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        cli_nome: {
            type: Sequelize.STRING(30),
            allowNull: false
        },

        cli_dt_nasc: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },

        cli_cpf: {
            type: Sequelize.STRING(11),
            allowNull: false
        },

        cli_email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true
        },

        cli_senha: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
    return cli_cliente;
    
}