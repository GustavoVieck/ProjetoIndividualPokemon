var dashboardModel = require("../models/dashboardModel");


function puxarMelhorPontuacao(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMelhorPontuacao(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}


function puxarMediaPontos(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMediaPontos(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}



function puxarMediaBerry(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMediaBerry(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}

function puxarPontosGrafico1(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarPontosGrafico1(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}


function puxarPontosGrafico2(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarPontosGrafico2(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}


function puxarMediaPontGeral(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMediaPontGeral(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}



function puxarMediaBerryGeral(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMediaBerryGeral(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}




function puxarMaxMediaPontGeral(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.puxarMaxMediaPontGeral(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}


function rank(req,res){
    console.log("Recebido")
var fkUsuario = req.params.fkUsuario;



dashboardModel.rank(fkUsuario).then(function(resposta){
    if (resposta.length>0){
        res.json(resposta)
    }
    else{
        res.status(204).json("Sem Resultado")
    }
})
.catch(function (erro) {
    console.log('DEU ERRO')
    console.error("Erro ao cadastrar partida:",erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}

module.exports = {
    puxarMelhorPontuacao,
    puxarMediaPontos,
    puxarMediaBerry,
    puxarPontosGrafico1,
    puxarPontosGrafico2,
    puxarMediaPontGeral,
    puxarMediaBerryGeral,
    puxarMaxMediaPontGeral,
    rank
}