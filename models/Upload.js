const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    url: String,
    forurl: String,
},
    {
        timestamps: true
    });

const Upload = mongoose.model('Upload', schema); // Model nomi "Addnew" deb o'zgardi

module.exports = Upload; // Model nomi "Addnew" ga o'zgardi
