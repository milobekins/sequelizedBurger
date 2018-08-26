module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            Validate: {
                len: [1,100]
            }
        },
        DEVOURED: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });

    return Burger
}