const path = require("path");
const fs = require("fs");

const db = JSON.parse(fs.readFileSync(path.join(__dirname,"productos.json")));

module.exports = db;