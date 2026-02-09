const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('API is running online!');
});
app.use('/api', require('./routes/userRoutes'));
app.use(errorMiddleware);

module.exports = app;