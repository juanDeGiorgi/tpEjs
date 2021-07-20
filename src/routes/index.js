var express = require('express');
var router = express.Router();

const controller = require("../controller/indexController");

/* GET home page. */
router.get('/',controller.index);

router.get("/detalle/:id",controller.detail);

module.exports = router;
