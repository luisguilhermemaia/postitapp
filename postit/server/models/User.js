module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        classMethods: {
            associate: (models) => {
                User.hasMany(models.Postit, {
                    foreignKey: 'userId',
                    as: 'postits',
                });
            },
        },
    });
    return User;
};


//https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize