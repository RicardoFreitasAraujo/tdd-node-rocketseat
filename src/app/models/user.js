const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define("User",{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    });


    return User;

}