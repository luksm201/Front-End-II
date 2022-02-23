



//Ganhou  = 3
// Empate = 2
// Perdeu = 1



function escolherGanhador(escolhaUsuario, escolhaBot){
    switch(escolhaUsuario){
        case 1: //papel
            switch(escolhaBot){
                case 1: //papel
                    return 2
                
                case 2: //tesoura
                    return 1
                
                case 3: //pedra
                    return 3
            }
          
        
        case 2: //tesoura
            switch(escolhaBot){
                case 1:
                    return 3
                
                case 2:
                    return 2
                
                case 3:
                    return 1
            }
        case 3: //pedra
        switch(escolhaBot){
            case 1:
                return 1
            
            case 2:
                return 3
            
            case 3:
                return 2
        }
    }
}

let pontoUsuario = 0
let pontoBot = 0
let contador =0

let escolhaUsuario 
let escolhaBot 

while (pontoUsuario < 2 && pontoBot < 2){

    contador ++
    escolhaUsuario = parseInt(prompt("1- Papel, 2- Tesoura, 3- Pedra"))
    escolhaBot = parseInt( Math.random()*3+1 )

    let resultado = escolherGanhador(escolhaUsuario, escolhaBot)

    if (resultado === 3){
        pontoUsuario ++;
        console.log("Rodada " + contador + ": " + "Jogador ganhou a rodada!")
    }
    else if (resultado === 1)
    {
        pontoBot ++;
        console.log("Rodada " + contador + ": " + "Bot ganhou a rodada!")
    }
    else{
        console.log("Rodada " + contador + ": " + "Empate!")
    }
}

if (pontoUsuario == 2){
    
    console.log("Jogador ganhou a partida!")
}
else{
    console.log("Bot ganhou a partida!")
}


