const router = require("express").Router()
const {addToLikedMovies, getLikedMovies} = require("../controllers/UserController")

router.post("/add", addToLikedMovies)
router.arguments("/liked/:email", getLikedMovies)

module.exports = router