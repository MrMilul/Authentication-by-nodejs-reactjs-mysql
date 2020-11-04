const express = require('express'); 
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

//hasshing password
const bcrypt = require('bcrypt');
const saltRound = 10; 

app.use(cors({
    origin:["http://localhost:3000"], 
    methods:["GET", "POST"],
    credentials: true
})); 
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    key:"userId", 
    secret: "subscribe", 
    resave: false, 
    saveUninitialized: false, 
    cookie:{
        expires: 60 * 60 * 24 
    }
}))

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
    const checkUniqUsername = "SELECT * FROM register where username=?"

    //checking if we have the entered username and email in database
    db.query(checkUniqUsername, username, (err, userres)=>{
        if(err){
            console.log(err)
        }

        if(userres.length > 0){
            if(userres[0].Email == email){
                 res.send({warning:"This user with this Email address already exist"})
            }else{
                res.send({warning:"All information is correct just use another Username"})
            }
        
        }else{
            //sending hashed password to the database.
            bcrypt.hash(password, saltRound, (err, hash)=>{
                if(err){
                    console.log(err)
                }

                db.query(insertQuery, [username, f_name, l_name, email, hash], (err, result)=>{
                    if (err){
                        console.log(err)
                    }
                    res.send({message:"You successfully registred"})
            })

})
        }
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
                    req.session.user = result; 
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

app.get('/login', (req, res)=>{
    if(req.session.user){
        res.send({logedIn:true, f_name:req.session.user[0].f_name, l_name:req.session.user[0].l_name})
    }else{
        res.send({logedIn:false})
    }
} )
app.listen('3001', ()=>{console.log('we are on the localhost:3001')})