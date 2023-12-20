const express = require('express');
const app = express();

// Configurer EJS comme moteur de vue
app.set('view engine', 'ejs');

// Middleware pour parser le contenu des requêtes de type POST
app.use(express.urlencoded({ extended: true }));

// Utiliser les routes définies dans `vocabulaireRoutes.js`
app.use('/', require('./routes/vocabulaireRoutes'));

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
