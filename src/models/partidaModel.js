var database = require("../database/config")
 

function cadastrarPartida(fkUsuario,pontos,qtdBerry,finalPartida,dificuldade){
    var instrucaoSql = `
            INSERT INTO partida (fkUsuario,pontos,qtdBerry,finalPartida,dificuldade) values(${fkUsuario},${pontos},${qtdBerry},${finalPartida},${dificuldade});
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPartida
};
