const path = require("path");
const db = require("../data/db");


module.exports ={
    index : (req, res, next) => res.render('index',{db:db}),

    detail : (req, res, next) => res.render('detalleMenu',{
        producto : db.find(e => e.id == req.query.id)
    })
}