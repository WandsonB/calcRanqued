function balance (wins,defeat) {
    let numbalance = wins - defeat
    return numbalance
}

function patent(rank){
    if (rank <= 10){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Ferro`)
    }else if (rank >= 11 && rank <=20){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Bronze`)
    }else if (rank >= 21 && rank <=50){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Prata`)
    }else if (rank >= 51 && rank <=80){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Ouro`)
    }else if (rank >= 81 && rank <=90){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Diamante`)
    }else if (rank >= 91 && rank <=100){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Lendário`)
    }else if (rank >=101){
        console.log(`O Herói tem de saldo de ${rank} está no nível de Imortal`)
    }
}

patent(balance(74,11))
