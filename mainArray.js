const readLineSync = require('readline-sync')

let num1 = [1, 2, 3, 4, 5]
let num2 = [ ]
let soma = [ ]
let contador = 0;
let valor = 0

function conta(){
    while(contador <= 4){
        valor = Number(readLineSync.question('Digite um valor para ser guardado: '))
        num2.push(valor)
        contador += 1
    }
    console.log('======================================')
    return num2
}
function somar(){
    for(let i = 0; i <= 4;i++){
        soma[i] = num1[i] + num2[i]
    }
    return soma
}

function sub(){

}
console.log('======================================')
console.log('     Soma dos valores de 2 Arrays     ')
console.log('======================================')
console.log('A Array 2 é: ',conta())
console.log('======================================')
console.log('O Array 3 é: ',sub())
console.log('======================================')
