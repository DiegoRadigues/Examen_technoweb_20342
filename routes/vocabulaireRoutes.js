const express = require('express');
const router = express.Router();
const vocabulaireController = require('../controllers/vocabulaireController');

router.get('/', vocabulaireController.getAccueil);
router.get('/vocabulaire', vocabulaireController.getVocabulaire);
router.post('/ajouter-mot', vocabulaireController.postAjouterMot);
router.post('/supprimer-mot/:motId', vocabulaireController.postSupprimerMot);
router.post('/repondre', vocabulaireController.postRepondre);


module.exports = router;
