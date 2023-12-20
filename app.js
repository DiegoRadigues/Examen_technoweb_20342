const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/vocabulaireRoutes'));

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
