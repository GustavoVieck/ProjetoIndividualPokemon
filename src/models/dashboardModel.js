var database = require("../database/config")
 

function puxarMelhorPontuacao(fkUsuario){
    var instrucaoSql = `
            SELECT MAX(p.pontos) AS 'maiorPont' 
FROM usuario u join partida p 
on u.id = p.fkUsuario 
WHERE fkUsuario = ${fkUsuario}; `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    puxarMelhorPontuacao
};
