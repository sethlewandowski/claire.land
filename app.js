// Load Node Modules
const express = require("express");
const ejs = require("ejs");
const app = express();


// Set the view engine to ejs
app.set("view engine", "ejs");

// Render Static Files
app.use(express.static(__dirname + 'views/pages'));

/*
// Define Routes
const homeRoute = require("./routes/root");
const blogRoute = require("./routes/blog");
const notFoundRoute = require("./routes/404");
*/

/*
//Assign Routes
app.use(homeRoute);
app.use(blogRoute);
app.use(notFoundRoute);
*/


app.listen(3001);
