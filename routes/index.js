const router = require("express").Router()
const homeroutes = require("./homeroutes.js")
const apiroutes = require("./API")
router.use("/", homeroutes)
router.use("/api", apiroutes)

























module.exports = router;