const express = require('express'); 
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors()); 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: 'password', 
    database: 'authen'
})


app.post('/register', (req, res)=>{

    const username = req.body.username;
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email = req.body.email;
    const password = req.body.password;

   const insertQuery = "INSERT INTO register (username, f_name, l_name, Email, password) VALUES (?, ?, ?, ?, ?)"

   db.query(insertQuery, [username, f_name, l_name, email, password], (err, result)=>{
       if (err){
           console.log(err)
       }
   })
    
})

app.listen('3001', ()=>{console.log('we are on the localhost:3001')})