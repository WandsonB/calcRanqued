function balance (wins,defeat) {
    let numbalance = wins - defeat
    return numbalance
}

let classHero = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function patent(rank){
    if (rank <= 10){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[0]}`)
    }else if (rank >= 11 && rank <=20){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[1]}`)
    }else if (rank >= 21 && rank <=50){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[2]}`)
    }else if (rank >= 51 && rank <=80){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[3]}`)
    }else if (rank >= 81 && rank <=90){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[4]}`)
    }else if (rank >= 91 && rank <=100){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[5]}`)
    }else if (rank >=101){
        console.log(`O Herói tem de saldo de ${rank} está no nível de ${classHero[6]}`)
    }
}

patent(balance(74,11))
