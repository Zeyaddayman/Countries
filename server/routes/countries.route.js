const express = require('express');
const router = express.Router();

let Country = require('../models/country.model');
const regions = require('../utils/regions');
const countriesPattern = require('../utils/countries.pattern');
const countryPattern = require('../utils/country.pattern');

router.get('/', async (req, res) => {
    const countries = await Country.find({}, countriesPattern);

    return res.json({status: 'success', data: {countries}});
})

router.get('/:countryId', async (req, res) => {
    let id = req.params.countryId;

    try {
        const country = await Country.findById(id, countryPattern);
        res.json({status: 'success', data: {country}});
    } catch (error) {
        res.json({status: 'fail', data: null, message: error.message});
    }
})

module.exports = router;