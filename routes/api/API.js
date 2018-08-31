const router = require("express").Router();
const request = require("request");

//calls in the API
router.route("/:term/:start_year?/:end_year?").get((req, res) => {
  request.get(
    {
      url: process.env.NYT_API_URL,
      qs: {
        "api-key": process.env.NYT_API_KEY,
        q: req.params.term,
        begin_date: req.params.start_year && req.params.start_year,
        end_date: req.params.end_year && req.params.end_year,
        fl: "headline, web_url, pub_date",
        page: 0,
      },
    },
    function(err, response, body) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        body = JSON.parse(body);
        res.json(body.response.docs);
      }
    }
  );
});
//search within year range
router.route("/:term//").get((req, res) => {
  request.get();
});
module.exports = router;