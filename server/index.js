const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "employeesystem"
});

app.post("/create", (req, res) =>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO employees (NAME, AGE, COUNTRY, POSITION, WAGE) VALUES (?,?,?,?,?)",
        [name, age, country, position, wage],
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    );
});

app.get('/get', (req, res) =>{
    db.query(
        "SELECT * FROM employees",
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
})