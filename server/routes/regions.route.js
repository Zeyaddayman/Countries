const express = require('express');
const router = express.Router();

let Country = require('../models/country.model');
const regions = require('../utils/regions');
const countriesPattern = require('../utils/countries.pattern');

router.get('/:regionName', async (req, res) => {
    let region = req.params.regionName;
    region = region[0].toUpperCase() + region.slice(1).toLowerCase();

    if (!(regions.includes(region))) {
        return res.status(400).json({status: 'fail', data: null});
    }
    const countries = await Country.find({region}, countriesPattern);
    res.status(200).json({status: 'success', data: {countries}});
})

module.exports = router;