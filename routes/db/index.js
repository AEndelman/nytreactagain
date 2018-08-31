const router = require("express").Router();
const aritcle_routes = require("./Articles");

// articles route
router.use("/articles", aritcle_routes);

module.exports = router;