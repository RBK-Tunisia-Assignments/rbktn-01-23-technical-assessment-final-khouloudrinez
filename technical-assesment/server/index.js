const express = require('express');
const app = express();
const PORT = 4000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

const connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'recepies'
}

);
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("db conected !!");
  }
}); 

app.get('/api/menuItems', (req, res) => {
  const sql = 'SELECT * FROM recepie'; 
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.post('/api/recepies',(req,res) => {
  const sql = 'INSERT INTO recepie (Cook_Time ,Prep_Time,recepie_Name, Serves, categorie, recepie_Image ,recepie_Description) VALUES (?,?,?,?,?,?,?)'; 
  connection.query(sql, 
    [Cook_Time,Prep_Time,recepie_Name,Serves, categorie, recepie_Image,recepie_Description], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
}
)
app.delete('/api/recepies/:id',(req, res) => {
  const recepie_Id= req.params.id;
  const sql = 'DELETE FROM recepie WHERE recepie_Id =?';
  connection.query(sql,[recepie_Id],(err, result) => {
    if(err){
       return res.status(500).send(err) ;
    } else {
       return res.send(result) }
}) 
}) 

app.put('/api/recepies/:id'),(req, res) => {
  const {Cook_Time,Prep_Time,recepie_Name,Serves, categorie, recepie_Image,recepie_Description} = req.body
  const recepie_Id= req.params.id;
  const sql = 'UPDATE recepie SET Cook_Time =?,Prep_Time =?,recepie_Name =?, Serves =?, categorie =?, recepie_Image =?, recepie_Description =? WHERE recepie_Id =?';
  connection.query(sql,[Cook_Time,Prep_Time,recepie_Name,Serves, categorie, recepie_Image,recepie_Description,recepie_Id],(err, result) => {
    if(err){
      res.status(500).send(err) ;
    } else {
      res.send(result) }
}) }
// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

