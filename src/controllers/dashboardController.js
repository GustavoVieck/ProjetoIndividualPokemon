var dashboardModel = require("../models/dashboardModel");


function puxarMelhorPontuacao(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMelhorPontuacao(fkUsuario).then(function(resposta){
    if (resposta.lenght>0){
        res.status(200).json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(erro=>{
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}


module.exports = {
    puxarMelhorPontuacao,
}