const express = require('express');
const ProductModel = require('./modelos/product');
const sequelize = require('./conexion/db');
const app = express();
app.use(express.json());

// 1. COUNT - Total de productos
// SELECT COUNT(*) AS total_productos FROM product
app.get('/count-products', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('partNumber')), 'total_productos']
            ]
        });
        if (result.length > 0) {
            res.status(200).json({
                message: 'Total de productos',
                data: result
            });
        } else {
            res.status(400).json({ message: 'No se encontraron datos', data: [] });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al contar productos',
            error: error.message
        });
    }
});

// 2. SUM - Valor total por productType
// SELECT productType, SUM(value) AS valor_total FROM product GROUP BY productType
app.get('/sum-by-producttype', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['productType']
        });
        if (result.length > 0) {
            res.status(200).json({
                message: 'Valor total por productType',
                data: result
            });
        } else {
            res.status(400).json({ message: 'No se encontraron datos', data: [] });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener suma por productType',
            error: error.message
        });
    }
});

// 3. AVG - Valor promedio por categoryCode
// SELECT `category.code`, AVG(value) AS valor_promedio FROM product GROUP BY `category.code`
app.get('/avg-by-categorycode', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
            ],
            group: ['categoryCode']
        });
        if (result.length > 0) {
            res.status(200).json({
                message: 'Valor promedio por categoryCode',
                data: result
            });
        } else {
            res.status(400).json({ message: 'No se encontraron datos', data: [] });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener promedio por categoryCode',
            error: error.message
        });
    }
});

// 4. MAX - Producto con valor más alto por plannerCode
// SELECT plannerCode, MAX(value) AS valor_maximo FROM product GROUP BY plannerCode
app.get('/max-by-plannercode', async (req, res) => {
    try {
        const result = await ProductModel.findAll({
            attributes: [
                'plannerCode',
                [sequelize.fn('MAX', sequelize.col('value')), 'valor_maximo']
            ],
            group: ['plannerCode']
        });
        if (result.length > 0) {
            res.status(200).json({
                message: 'Valor máximo por plannerCode',
                data: result
            });
        } else {
            res.status(400).json({ message: 'No se encontraron datos', data: [] });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener máximo por plannerCode',
            error: error.message
        });
    }
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});