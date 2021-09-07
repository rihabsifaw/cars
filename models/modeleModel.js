const mongoose = require('mongoose');

const modeleSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

const modeleModel = mongoose.model('Modele', modeleSchema);

exports.Modele =modeleModel ;