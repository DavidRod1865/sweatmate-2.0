import express from "express";
import path from "path";
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, ()=>{
    console.log('Server running on port: ' + PORT)
})