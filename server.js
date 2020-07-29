var express = require("express");
// Tells node that we are creating an "express" server
var app = express();
var path = require("path");
// Sets an initial port.
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const htmlRoutes = require("./routes/htmlRoutes.js");
app.use(htmlRoutes);
const apiRoutes = require("./routes/apiRoutes.js");
app.use(apiRoutes);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});