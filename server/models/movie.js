var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
  title: String,
  favorite: Boolean
});