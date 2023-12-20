const Mot = require('../models/mot');

exports.getAccueil = async (req, res, next) => {
    try {
        const [rows] = await Mot.fetchAll(); // Recup ts les mots de la db

        if (rows.length === 0) {
            throw new Error("Aucun mot disponible dans la base de données.");
        }

        const indexAleatoire = Math.floor(Math.random() * rows.length); // Select index aléatoire
        const motAleatoire = rows[indexAleatoire]; // Recup le mot correspondant à l'index

        res.render('index', { motActuel: motAleatoire.mot }); // Env le mot à la vue
    } catch (err) {
        console.error(err);
        res.send("Erreur lors de la récupération du mot.");
    }
};


//pb avec la récup des mots
exports.getVocabulaire = async (req, res, next) => {
    try {
        const [mots] = await Mot.fetchAll();
        res.render('vocabulaire', { mots: mots });
    } catch (err) {
        console.error(err);
        res.send("Erreur lors de la récupération des mots.");
    }
};

//fonctionne correctement
exports.postAjouterMot = async (req, res, next) => {
    const { mot, traduction } = req.body;
    const nouveauMot = new Mot(null, mot, traduction, 0);
    try {
        await nouveauMot.save();
        res.redirect('/vocabulaire');
    } catch (err) {
        console.error(err);
        res.send("Erreur lors de l'ajout du mot.");
    }
};

exports.postSupprimerMot = async (req, res, next) => {
    const motId = req.params.motId;
    try {
        await Mot.deleteById(motId);
        res.redirect('/vocabulaire');
    } catch (err) {
        console.error(err);
        res.send("Erreur lors de la suppression du mot.");
    }
};

//pb avec la réponse
exports.postRepondre = async (req, res, next) => {
    const reponseUtilisateur = req.body.reponse;
    const motId = req.body.motId;

    try {
        // Récup mot et trad depuis db 
        const [mot] = await Mot.findById(motId);

        if (mot) {
            // Comparer
            if (reponseUtilisateur.trim().toLowerCase() === mot.traduction.toLowerCase()) {

                console.log("Réponse correcte");
                // Màj taux de réussite
            } else {

                console.log("Réponse incorrecte");
            }
        }

        // Rediriger l'util vers accueil
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.send("Erreur lors de la vérification de la réponse.");
    }
};



//gestion des réponses
//mise à jour des taux de réussite
