//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const assets = require("./data/assets.json");

const app = express();

// Port
let port = process.env.PORT;
if (port == null || port == "") { port = 3000; }

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render('home', {});
});

app.get("/about", function(req, res) {
	res.render('about', {});
});

app.get("/contact", function(req, res) {
	res.render('contact', {});
});

// Gallery
app.get("/gallery", function(req, res) {
	// let concepts, expressions, loglines, storyboards, thumbnails;

	res.render('gallery', {image_assets: assets});
});

// Where to listen
app.listen(port, function() {
  console.log("Server started on " + port);
});

