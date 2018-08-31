const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema/model
const article = new Schema({
  title: { type: String, required: true },
  url: {type: String, required: true},
  date: { type: Date }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
