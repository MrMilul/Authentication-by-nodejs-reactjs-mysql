const express = require('express'); 
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

//hasshing password
const bcrypt = require('bcrypt');
const saltRound = 10; 

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
    const password = req.body.password
    const insertQuery = "INSERT INTO register (username, f_name, l_name, Email, password) VALUES (?, ?, ?, ?, ?)"

    //sending hashed password to the database.
    bcrypt.hash(password, saltRound, (err, hash)=>{
        if(err){
            console.log(err)
        }

        db.query(insertQuery, [username, f_name, l_name, email, hash], (err, result)=>{
            if (err){
                console.log(err)
            }
        })

    })

    
   
   

})

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const selectQuery = "SELECT * FROM register WHERE username=?"

    db.query(selectQuery, username, (err, result)=>{
        if(err){
            res.send({err:err})
        }
        //check entered password by hashing one
        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response)=>{
                if(error){
                    console.log(error)
                }
                if(response){
                    res.send(result)
                }else{
                    res.send({message:"Wrong Username/Password combination"})
                }
            })
        }else{
            res.send({message:"Incorrect Username"})
        }
    })
})

app.listen('3001', ()=>{console.log('we are on the localhost:3001')})