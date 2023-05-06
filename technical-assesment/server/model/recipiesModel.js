const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
   const sql= "SELECT * FROM recepie"
connection.query(sql, (err, result) => {
    callback(err, result)
})

    

};

module.exports = { getAll };
