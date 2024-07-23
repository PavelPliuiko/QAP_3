const pool = require('../models/db');

const getAllStocks = async () => {
    try {
        const result = await pool.query('SELECT * FROM stocks');
        return result.rows;
    } catch (err) {
        throw new Error(err.message);
    }
};

const addStock = async (item_name, quantity, price) => {
    try {
        await pool.query('INSERT INTO stocks (item_name, quantity, price) VALUES ($1, $2, $3)', [item_name, quantity, price]);
    } catch (err) {
        throw new Error(err.message);
    }
};

const updateStock = async (id, item_name, quantity, price) => {
    try {
        await pool.query('UPDATE stocks SET item_name = $1, quantity = $2, price = $3 WHERE id = $4', [item_name, quantity, price, id]);
    } catch (err) {
        throw new Error(err.message);
    }
};

const deleteStock = async (id) => {
    try {
        await pool.query('DELETE FROM stocks WHERE id = $1', [id]);
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    getAllStocks,
    addStock,
    updateStock,
    deleteStock
};
