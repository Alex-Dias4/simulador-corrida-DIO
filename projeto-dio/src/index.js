const player1 ={
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
    // teste 
}
// const player3 = {
//     NOME: "Peach",
//     VELOCIDADE: 3,
//     MANOBRABILIDADE: 4,
//     PODER: 2,
//     PONTOS: 0,
// }
// const player4 = {
//     NOME: "Bowser",
//     VELOCIDADE: 5,
//     MANOBRABILIDADE: 2,
//     PODER: 5,
//     PONTOS: 0,
// }
// const player5 = {
//     NOME: "Yoshi",
//     VELOCIDADE: 2,
//     MANOBRABILIDADE: 4,
//     PODER: 3,
//     PONTOS: 0,
// }
// const player6 = {
//     NOME: "Donkey Kong",
//     VELOCIDADE: 2,
//     MANOBRABILIDADE: 2,
//     PODER: 5,
//     PONTOS: 0,
// }


async function rollDice(){
    return Math.floor(Math.random() * 6) +1;
}

async function getBlock(){
    let random = Math.random()
    let result

    switch(true){
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute} `);
    
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`\n🏁 Rodada ${round}`);
        
        // Sortear bloco
        let block = await getBlock();
        console.log(`Bloco sorteado: ${block}`);
        
            // rolar os dados
            let diceResult1 = await rollDice();
            let diceResult2 = await rollDice();
        
            // teste de habilidade
            let totalTestSkill1 = 0
            let totalTestSkill2 = 0;
        
            if(block === "RETA"){ 
                totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
                totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
        
                await logRollResult(
                    character1.NOME,
                    block,
                    diceResult1,
                    character1.VELOCIDADE
                );
        
                await logRollResult(
                    character2.NOME, 
                    block, diceResult2, 
                    character2.VELOCIDADE
                );
            }
            else if(block === "CURVA"){
                totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
                totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

                await logRollResult(
                    character1.NOME,
                    block,
                    diceResult1,
                    character1.MANOBRABILIDADE
                );
        
                await logRollResult(
                    character2.NOME, 
                    block, diceResult2, 
                    character2.MANOBRABILIDADE
                );
            }
            else if(block === "CONFRONTO"){
                let powerResult1 = diceResult1 + character1.PODER;
                let powerResult2 = diceResult2 + character2.PODER;

                console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`)

                await logRollResult(
                    character1.NOME,
                    block,
                    diceResult1,
                    character1.PODER
                );
        
                await logRollResult(
                    character2.NOME, 
                    block, diceResult2, 
                    character2.PODER
                );

                // character2.PONTOS -= 
                // powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;
                // character1.PONTOS -= 
                // powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0;

                
                if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                    console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu um ponto! 🐢`);
                    character2.PONTOS--;
                }
                else if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                    console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto! 🐢`);
                    character1.PONTOS--;
                } 
                else if (character1.PONTOS == 0 || character2.PONTOS == 0  && powerResult1 !== powerResult2) {
                    console.log("O personagem que perdeu o confronto não pode perder mais pontos, pois já esta zerado!");
                }
                console.log(
                    powerResult1 === powerResult2
                        ? "Empate no confronto, ninguem perdeu ponto!"
                        : "")
            }

            if (totalTestSkill1 > totalTestSkill2){
                console.log(`${character1.NOME} marcou um ponto!`);
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1){
                console.log(`${character2.NOME} marcou um ponto!`);
                character2.PONTOS++;
            }else if (totalTestSkill1 === totalTestSkill2 && block !== "CONFRONTO"){
                console.log("Empate, ninguem marcou ponto!");
            }

            console.log("\n=========================================")
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

    if (character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    }else if (character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    }else {
        console.log("\nA corrida terminou em empate! 🤝");
    }
}

(async function main(){
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... `

    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})()