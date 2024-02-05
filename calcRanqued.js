function balance (wins,defeat) {
    let numbalance = wins - defeat
    return numbalance
}

let rankHero = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function dialog(numBalance, vectorRankHero){
    console.log(`O Herói tem de saldo de ${numBalance} está no nível de ${vectorRankHero}`)
}

function patent(rank){
    if (rank <= 10){
        dialog(rank, rankHero[0])
    }else if (rank >= 11 && rank <=20){
        dialog(rank, rankHero[1])
    }else if (rank >= 21 && rank <=50){
        dialog(rank, rankHero[2])
    }else if (rank >= 51 && rank <=80){
        dialog(rank, rankHero[3])
    }else if (rank >= 81 && rank <=90){
        dialog(rank, rankHero[4])
    }else if (rank >= 91 && rank <=100){
        dialog(rank, rankHero[5])
    }else if (rank >=101){
        dialog(rank, rankHero[6])
    }
}

patent(balance(74,11))
