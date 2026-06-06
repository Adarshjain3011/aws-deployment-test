
const express = require("express");

const app = express();


const PORT = 3000;

app.listen(PORT,()=>{

    console.log("server listen on the port 3000");

})

app.get("/home",(req,res)=>{

    res.send("<h1>hellow world check  </h1>")
});



