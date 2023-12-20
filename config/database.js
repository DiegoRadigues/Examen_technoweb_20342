const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mdp',
    database: 'TelevisionDB',database: 'VocabulaireDB',
    port: 3307, //car 3306 occupé mar mysql
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = pool.promise();