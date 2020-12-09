const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.end("server is ready...")
})

app.get("/test", (req, res)=>{
    res.json({result: "ok", data: req.query})
})

app.listen(3000, ()=>{
    console.log("server is ready..")
})