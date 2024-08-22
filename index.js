const express = require ("express");

const dotenv = require("dotenv");



const DbConnection = require("./databaseConnection");

dotenv.config();

const app = express();

DbConnection();

const PORT = 8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
      Message : "hello",
    });

});

app.listen(PORT,()=>{
    console.log(`port started at {PORT} `)
});