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

function puxarMediaPontos(fkUsuario){
    var instrucaoSql = `
            select round(avg(p.pontos)) as 'mediaPont' 
        FROM usuario u join partida p 
on u.id = p.fkUsuario 
WHERE fkUsuario = ${fkUsuario}; `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function puxarMediaBerry(fkUsuario){
    var instrucaoSql = `
         select round(avg(p.qtdBerry),2) as 'mediaBerry' 
        FROM usuario u join partida p 
on u.id = p.fkUsuario 
WHERE fkUsuario = ${fkUsuario}; `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function puxarPontosGrafico1(fkUsuario){
    var instrucaoSql = `
        SELECT distinct date(dtPartida) as 'data_partida', max(pontos) as 'ponto_maximo'
        FROM partida
        WHERE fkUsuario = ${fkUsuario}
        GROUP BY DATE(dtPartida)
        order by date(dtPartida)
        LIMIT 10; `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function puxarPontosGrafico2(fkUsuario){
     var instrucaoSql = `
     select sum(finalPartida) as 'capturouPokemon',
			   count(finalPartida)-sum(finalPartida) as 'morreu'
		 from partida 
        WHERE fkUsuario = ${fkUsuario}`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function puxarMediaPontGeral(fkUsuario){
     var instrucaoSql = `
     select
    (select round(avg(pontos)) FROM partida ) as 'mediaPontGeral',
(select round(avg(pontos)) FROM partida  WHERE fkUsuario = ${fkUsuario}) as 'mediaPontUsuario';
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function puxarMediaBerryGeral(fkUsuario){
     var instrucaoSql = `
     select
    (select round(avg(qtdBerry),2) FROM partida ) as 'mediaBerryGeral',
(select round(avg(qtdBerry),2) FROM partida  WHERE fkUsuario = ${fkUsuario}) as 'mediaBerryUsuario';
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function puxarMaxMediaPontGeral(fkUsuario){
    var instrucaoSql = `
       select
         (select round(AVG(melhores_pontuacoes.maior_pontuacao)) 
from (
    select fkUsuario, max(pontos) as maior_pontuacao
    from partida
    group by fkUsuario
) as melhores_pontuacoes) as mediaMaxPontGeral,
 (select max(pontos) from partida WHERE fkUsuario = ${fkUsuario}) as maxPontUsuario;
    `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function rank(){
    var instrucaoSql = `
      SELECT u.nome as NomeUsuario , MAX(p.pontos) as maiorPontuacao
            FROM  usuario u JOIN
                            partida p
                            on u.id = p.fkUsuario
                            GROUP BY nome 
                            ORDER BY maiorPontuacao DESC;
    `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
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
};
