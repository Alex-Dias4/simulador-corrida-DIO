const avatar1 ={
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const avatar2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}
// const avatar3 = {
//     NOME: "Peach",
//     VELOCIDADE: 3,
//     MANOBRABILIDADE: 4,
//     PODER: 2,
//     PONTOS: 0,
// }
// const avatar4 = {
//     NOME: "Bowser",
//     VELOCIDADE: 5,
//     MANOBRABILIDADE: 2,
//     PODER: 5,
//     PONTOS: 0,
// }
// const avatar5 = {
//     NOME: "Yoshi",
//     VELOCIDADE: 2,
//     MANOBRABILIDADE: 4,
//     PODER: 3,
//     PONTOS: 0,
// }
// const avatar6 = {
//     NOME: "Donkey Kong",
//     VELOCIDADE: 2,
//     MANOBRABILIDADE: 2,
//     PODER: 5,
//     PONTOS: 0,
// }

player1 = avatar1;
player2 = avatar2;

async function selectAvatar(avatar){
    if (avatar === 1) {
        return avatar1;
    } else if (avatar === 2) {
        return avatar2;
    } else if (avatar === 3) {
        return avatar3;
    } else if (avatar === 4) {
        return avatar4;
    } else if (avatar === 5) {
        return avatar5;
    } else if (avatar === 6) {
        return avatar6;
    } else {
        throw new Error("Avatar inválido");
    }
}

async function rollDice(){
    return Math.floora(Math.random() * 6) +1;
}

(async function main(){
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`

    );
})()