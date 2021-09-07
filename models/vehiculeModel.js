const mongoose = require('mongoose');

const vehiculeSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  marque: { type: mongoose.Schema.Types.ObjectId, ref: 'Marque', required: true },
  modele: { type: mongoose.Schema.Types.ObjectId, ref: 'Modele', required: true },
});

const vehiculeModel = mongoose.model('Vehicule', vehiculeSchema);

exports.Vehicule =vehiculeModel ;