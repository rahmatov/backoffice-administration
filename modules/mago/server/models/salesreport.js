"use strict";

module.exports = function(sequelize, DataTypes) {
    var salesreport = sequelize.define('salesreport', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        transaction_id: {
            type: DataTypes.STRING(128),
            allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        combo_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        login_data_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        user_username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        distributorname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        saledate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            allowNull: false
        },
        cancelation_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        cancelation_user: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        cancelation_reason: {
            type: DataTypes.STRING(128),
            allowNull: true
        }
    }, {
        tableName: 'salesreport',
        associate: function(models) {
            salesreport.belongsTo(models.combo, {foreignKey: 'combo_id'});
            salesreport.belongsTo(models.users, {foreignKey: 'user_id'})
        }
    });
    return salesreport;
};
