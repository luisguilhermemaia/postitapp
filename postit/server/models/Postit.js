module.exports = (sequelize, DataTypes) => {
    const Postit = sequelize.define('Postit', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mensagem: {
            type: DataTypes.STRING,
        },
    }, {
        classMethods: {
            associate: (models) => {
                Postit.belongsTo(models.User, {
                    onDelete: 'CASCADE',
                    foreignKey: 'userId',
                })
            },
        },
    });
    return Postit;
};