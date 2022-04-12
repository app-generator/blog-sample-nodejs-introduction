const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.get("/api", (request,response)=>{
    response.send("Hello World")
})

app.listen(port, (req,res)=>{
    console.log(`Listening at port ${port}` )
 })
 