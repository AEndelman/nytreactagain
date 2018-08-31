const path = require("path");
const router = require("express").Router();
const db_routes = require("./db");
const api_routes = require("./api");

// db routes
router.use("/db", db_routes);
// api routes
router.use("/api", api_routes);

// other routes sends the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../view/build/index.html"));
});

module.exports = router;