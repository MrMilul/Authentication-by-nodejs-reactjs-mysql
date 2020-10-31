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


app.get('/', (req, res)=>{
    res.send('hello guys')
}).listen('3001')