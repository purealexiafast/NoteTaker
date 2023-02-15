const router = require("express").Router()

const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid');

router.get("/", (req, res) => {
    const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8"))
    console.log(typeof savednotes);
    res.json(savednotes)
})
router.post("/", (req, res) => {
    console.log(req.body)
    const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8"))
    savednotes.push({ ...req.body, id: uuidv4() })
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(savednotes))
    res.json(savednotes)
})

router.delete("/:id", (req, res) => {
    const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8"))
    const newnotes = savednotes.filter(note => note.id !== req.params.id)
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(newnotes))
    res.json(newnotes)
})

module.exports = router