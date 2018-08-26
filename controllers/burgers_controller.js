var express = require("express");
var db = require("../models");


module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            var burgersData = {
                burgers: data,
            }
            res.render("index", burgersData);
        })
    });
        
    app.post("/addBurger", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burgerName
        }).then(function(data) {})
    })
    app.post("/devourBurger", function(req, res) {
        db.Burger.update({
            DEVOURED: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(data) {});
    })
}