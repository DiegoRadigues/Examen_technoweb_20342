const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mdp',
    database: 'TelevisionDB',database: 'VocabulaireDB',
    port: 3307, //car j'ai un autre serveur mysql qui tourne sur le port 3306
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = pool.promise();