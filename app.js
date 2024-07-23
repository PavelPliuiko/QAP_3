const express = require('express');
const app = express();
const stockRoutes = require('./routes/stocks.route');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', stockRoutes);
app.use((req, res, next) => {
    res.redirect('/stocks');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
