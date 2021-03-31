const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

app.get("/api/customers", (req,res) => {
  connection.query("Select * from CUSTOMER",
    (err, rows, fileds) =>{ res.send(rows); }
  );
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));