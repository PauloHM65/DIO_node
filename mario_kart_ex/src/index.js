const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    ponto: 0
}

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    ponto: 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
async function getRandomBlock() {
    let random = Math.random();
    let result = ''
    switch (true) {
        case random < 0.33:
            result = "Reta"
            break;
        case random < 0.66:
            result = "Curva"
            break;
        default:
            result = "Confronto"
            break;
    }
    return result;
}
async function logResult(charactername, block, diceResult, attribute,at) {
    console.log(` ${charactername} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute}  = ${at}`)
}

async function showSkill(totalTesteSkill1,totalTesteSkill2,character1,character2) {
    if(totalTesteSkill1 > totalTesteSkill2){
        console.log(`${character1.nome} marcou um ponto!`);
        character1.ponto+=1;
    }else if(totalTesteSkill1 < totalTesteSkill2){
        console.log(`${character2.nome} marcou um ponto!`);
        character2.ponto+=1;
    }
}

async function showPower(powerReult1,powerReult2,character1,character2) {
    if(powerReult1 > powerReult2){
            
        if(character2.ponto>0){                
            character2.ponto-=1;}
        else{character2.ponto=0;}
        console.log(`${character1.nome} ganhou, ${character2.nome} perdeu um ponto!`);
    }else if(powerReult1 < powerReult2){
        
        if(character1.ponto>0){
            character1.ponto-=1;
            }
        else{character1.ponto=0;}
        console.log(`${character2.nome} ganhou, ${character1.nome} perdeu um ponto!`);
    }else if(powerReult1 == powerReult2){
        console.log(`Confronto empatade! Nenhum ponto foi perdido`);
    }
}

async function winner(character1, character2){
    if(character1.ponto > character2.ponto){
        console.log(`!!${character1.nome} ganhou!!🏆`)
    }else if(character1.ponto < character2.ponto){
        console.log(`!!${character2.nome} ganhou!!🏆`)
    }else{
        console.log(`!!${character1.nome} empatou com ${character2.nome}!!🏆`)
    }


}

async function playerRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        //sortear bloco
        let block = await getRandomBlock()
        console.log(` Bloco: ${block}`)


        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //tete de habilidade
        let totalTesteSkill1 = 0;
        let totalTesteSkill2 = 0;

        let powerReult1 =0
        let powerReult2 = 0
        
        
        if (block == "Reta") {
            totalTesteSkill1 = diceResult1 + character1.velocidade;
            totalTesteSkill2 = diceResult2 + character2.velocidade;

            await logResult(character1.nome, "velocidade", diceResult1, character1.velocidade,totalTesteSkill1)
            await logResult(character2.nome, "velocidade", diceResult2, character2.velocidade,totalTesteSkill2)

            await showSkill(totalTesteSkill1,totalTesteSkill2,character1,character2)
        }
        if (block == "Curva") {
            totalTesteSkill1 = diceResult1 + character1.manobrabilidade;
            totalTesteSkill2 = diceResult2 + character2.manobrabilidade;

            await logResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade,totalTesteSkill1)
            await logResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade,totalTesteSkill2)

            await showSkill(totalTesteSkill1,totalTesteSkill2,character1,character2)
        }
        if (block == "Confronto") {
            powerReult1 = diceResult1 + character1.poder;
            powerReult2 = diceResult2 + character2.poder;

            console.log(`   !!${character1.nome} confrontou com ${character2.nome}!!`)

            await logResult(character1.nome, "poder", diceResult1, character1.poder,powerReult1)
            await logResult(character2.nome, "poder", diceResult2, character2.poder,powerReult2)

            await showPower(powerReult1,powerReult2,character1,character2)
        }

        

        
        console.log("------------------------------------------------")


    }

    await winner(character1,character2);
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`);

    await playerRaceEngine(player1, player2);

})();