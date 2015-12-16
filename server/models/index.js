var mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost/omdb_app");

module.exports.Movie = require("./movie");