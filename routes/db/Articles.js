const router = require("express").Router();
const articles_controller = require("../../controllers/articles");

// Matches with "/db/articles/"
router
  .route("/")
  .get(articles_controller.findAll)
  .post(articles_controller.create);

// Matches with "/db/articles/:id"
router.route("/:id").delete(articles_controller.delete);

module.exports = router;