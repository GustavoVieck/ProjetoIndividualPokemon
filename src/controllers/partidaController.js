var partidaModel = require("../models/partidaModel");


function cadastrarPartida(req,res){
    console.log("Recebido")
var fkUsuario = req.body.fkUsuario;
var pontos = req.body.pontos
var qtdBerry = req.body.qtdBerry
var finalPartida = req.body.finalPartida
var dificuldade = req.body.dificuldade


partidaModel.cadastrarPartida(
    fkUsuario,
    pontos,
    qtdBerry,
    finalPartida,
    dificuldade
)
.then(resultado => res.json(resultado))
.catch(erro=>{
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}


module.exports = {
    cadastrarPartida,
}