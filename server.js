const express = require("express")
const routes = require("./routes")

const app = express()

const PORT = process.env.PORT || 3001 //need to deploy to heroku and need fallback 3001 

app.use(express.json())
app.use(express.urlencoded({extented:true}))
app.use(express.static("public"))
app.use(routes)

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})
