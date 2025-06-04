var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPartida", function (req, res) {
    partidaController.cadastrarPartida(req, res);
})





module.exports = router;
