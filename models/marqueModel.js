const mongoose = require('mongoose');

const marqueSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

const marqueModel = mongoose.model('Marque', marqueSchema);

exports.Marque =marqueModel ;
