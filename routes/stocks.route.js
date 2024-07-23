const express = require('express');
const router = express.Router();
const stocksDAL = require('../services/stocks.dal');

// Get all stocks
router.get('/stocks', async (req, res) => {
    try {
        const stocks = await stocksDAL.getAllStocks();
        res.render('index', { stocks });
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

// Add new stock
router.post('/stocks', async (req, res) => {
    const { item_name, quantity, price } = req.body;
    try {
        await stocksDAL.addStock(item_name, quantity, price);
        res.redirect('/stocks');
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

// Update stock
router.put('/stocks/:id', async (req, res) => {
    const { id } = req.params;
    const { item_name, quantity, price } = req.body;
    try {
        await stocksDAL.updateStock(id, item_name, quantity, price);
        res.redirect('/stocks');
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

// Delete stock
router.delete('/stocks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await stocksDAL.deleteStock(id);
        res.redirect('/stocks');
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

module.exports = router;
