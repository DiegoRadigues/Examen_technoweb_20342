const db = require('../config/database');

class Mot {
    constructor(id, mot, traduction, taux_reussite) {
        this.id = id;
        this.mot = mot;
        this.traduction = traduction;
        this.taux_reussite = taux_reussite;
    }

    // Enregistrer un nouveau mot 
    save() {
        return db.execute(
            'INSERT INTO mots (mot, traduction, taux_reussite) VALUES (?, ?, ?)',
            [this.mot, this.traduction, this.taux_reussite]
        );
    }

    // Màj taux de réussite
    updateTauxReussite() {
        return db.execute(
            'UPDATE mots SET taux_reussite = ? WHERE id = ?',
            [this.taux_reussite, this.id]
        );
    }

    // Récupérer tous les mots
    static fetchAll() {
        return db.execute('SELECT * FROM mots');
    }

    static findById(id) {
        return db.execute('SELECT * FROM mots WHERE id = ?', [id]);
    }
    
}

module.exports = Mot;
