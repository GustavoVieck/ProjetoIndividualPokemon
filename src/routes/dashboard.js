var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/puxarMelhorPontuacao/:fkUsuario", function (req, res) {
    dashboardController.puxarMelhorPontuacao(req, res);
})

router.get("/puxarMediaPontos/:fkUsuario", function (req, res) {
    dashboardController.puxarMediaPontos(req, res);
})

router.get("/puxarMediaBerry/:fkUsuario", function (req, res) {
    dashboardController.puxarMediaBerry(req, res);
})

router.get("/puxarPontosGrafico1/:fkUsuario", function (req, res) {
    dashboardController.puxarPontosGrafico1(req, res);
})

router.get("/puxarPontosGrafico2/:fkUsuario", function (req, res) {
    dashboardController.puxarPontosGrafico2(req, res);
})

router.get("/puxarMediaPontGeral/:fkUsuario", function (req, res) {
    dashboardController.puxarMediaPontGeral(req, res);
})

router.get("/puxarMediaBerryGeral/:fkUsuario", function (req, res) {
    dashboardController.puxarMediaBerryGeral(req, res);
})

router.get("/puxarMaxMediaPontGeral/:fkUsuario", function (req, res) {
    dashboardController.puxarMaxMediaPontGeral(req, res);
})

module.exports = router;
