

function calcularVitoriasDerrotas (vitorias , derrotas){
    let resultado = vitorias - derrotas
return resultado}



let pontosRank = (calcularVitoriasDerrotas(80, 50)
)

if(pontosRank < 10){
    console.log("Ferro")
} else if (pontosRank >= 11 && pontosRank <= 20){
    console.log("Bronze")
}else if (pontosRank >= 21 && pontosRank <= 50){
    console.log("Prata")
}else if (pontosRank >= 51 && pontosRank <= 80){
    console.log("Ouro")
}else if (pontosRank >= 81 && pontosRank <= 90){
    console.log("Diamante")
}else if (pontosRank >= 91 && pontosRank <= 100){
    console.log("Lendário")
}else if (pontosRank < 101){
    console.log("Imortal")
}