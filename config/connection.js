var mySQL = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// connection.connect(function(err){
//     if(err)throw err;
//     console.log('connected as id' + connection.threadId);
// });

module.exports = connection;



