var whatever = require("./sample.json");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 7000;

console.log(whatever.secret)

app.listen(PORT);
