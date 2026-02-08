const router = require("express").Router();
const { getSongs } = require("../controllers/songController");

router.get("/", getSongs);

module.exports = router;
