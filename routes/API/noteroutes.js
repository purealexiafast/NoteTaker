const router = require("express").Router()
const fs = require("fs")
const path = require("path")

router.get("/", (req, res) => {
    const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8"))
    console.log(typeof savednotes);
    res.json(savednotes)
})
router.post("/", (req, res) => {
    console.log(req.body)
    const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8"))
    savednotes.push(req.body)
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(savednotes))
    res.json(savednotes)
})

module.exports = router