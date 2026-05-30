const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/db');

const Product = sequelize.define('product', {
    partNumber: {
        type: DataTypes.TEXT,
        field: 'partNumber'
    },
    productType: {
        type: DataTypes.TEXT,
        field: 'productType'
    },
    categoryCode: {
        type: DataTypes.TEXT,
        field: 'category.code'
    },
    brandCode: {
        type: DataTypes.TEXT,
        field: 'brand.code'
    },
    familyCode: {
        type: DataTypes.TEXT,
        field: 'family.code'
    },
    lineCode: {
        type: DataTypes.TEXT,
        field: 'line.code'
    },
    status: {
        type: DataTypes.TEXT,
        field: 'status'
    },
    value: {
        type: DataTypes.DOUBLE,
        field: 'value'
    },
    valueCurrency: {
        type: DataTypes.TEXT,
        field: 'valueCurrency'
    },
    name: {
        type: DataTypes.TEXT,
        field: 'name'
    },
    plannerCode: {
        type: DataTypes.TEXT,
        field: 'plannerCode'
    }
}, {
    tableName: 'product',
    timestamps: false
});

module.exports = Product;