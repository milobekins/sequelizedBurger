var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var route = require("./controllers/burgers_controller")(app);
var db = require("./models");

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    });
}); 