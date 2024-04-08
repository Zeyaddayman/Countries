const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {type: String, required: true},
    nativeName: {type: String, required: true},
    capital: {type: String, required: false},
    flags: {type: String, required: true},
    population: {type: String, required: true},
    subregion: {type: String, required: true},
    region: {type: String, required: true},
    topLevelDomain: {type: [String], required: true},
    currencies: {type: [{
        code: String,
        name: String,
        symbol: String
    }], required: false},
    languages: {type: [{
        iso639_1: String,
        iso639_2: String,
        name: String,
        nativeName: String
    }], required: true},
    borders: {type: [String], required: false}
})

module.exports = mongoose.model('Country', countrySchema);