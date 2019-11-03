const mongoose = require('mongoose');

const FishingSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    birthday: String,
    address: String,
    number: String,
    postalcode: String,
    city: String,
    country: String,
},{
    timestmaps: true
});

module.exports = mongoose.model('Fishing', FishingSchema);