const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const countriesRouter = require('./routes/countries.route');
const regionsRouter = require('./routes/regions.route');

const app = express();

const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
    console.log('mongodb server started');
})

app.use(cors());
app.use(express.json());

app.use('/api/countries', countriesRouter);
app.use('/api/countries/region', regionsRouter);

app.all('*', (req, res) => {
    res.status(404).json({status: 'fail', message: 'this resource not available'});
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);;
})