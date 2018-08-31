const router = require("express").Router();
const api_routes = require("./API");

//NYT API route
router.use("/nyt", api_routes);

module.exports = router;