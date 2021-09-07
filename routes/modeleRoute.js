const express =require('express');
const {Modele} = require('../models/modeleModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const modeles = await Modele.find();
  res.send(modeles);
});

router.get('/:id', async (req, res) => {
  const modele = await Modele.findOne({ _id: req.params.id });
  if (modele) {
    res.send(modele);
  } else {
    res.status(404).send({ message: 'Modele Not Found.' });
  }
});
// update model
router.put('/:id', async (req, res) => {
  const modeleId = req.params.id;
  const modele = await Modele.findById(modeleId);
  if (modele) {
    modele.nom = req.body.nom;
    const updatedModele = await modele.save();
    if (updatedModele) {
      return res
        .status(200)
        .send({ message: 'Modele Modifiée', data: updatedModele });
    }
  }
  return res.status(500).send({ message: ' Erreur en modifiant modele.' });
});

router.delete('/:id', async (req, res) => {
  const deletedModele = await Modele.findById(req.params.id);
  if (deletedModele) {
    await deletedModele.remove();
    res.send({ message: 'Modele Supprimée' });
  } else {
    res.send('Erreur en Suppression modele.');
  }
});
// ajouter
router.post('/', async (req, res) => {
  const modele = new Modele({
    nom: req.body.nom,
  });

  const newModele = await modele.save();
  if (newModele) {
    return res
      .status(201)
      .send({ message: 'Nouvelle modele crée', data: newModele });
  }
  return res.status(500).send({ message: ' Erreur en création modele.' });
});

exports.modeleRoute = router;
