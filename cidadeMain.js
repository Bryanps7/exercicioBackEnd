const readLineSync = require('readline-sync')
const Cidade = require('./cidadeClass')

console.log('=======================================')
console.log('      Dados da Cidade e População      ')
console.log('=======================================')
let nome = readLineSync.question('Digite o nome da cidade: ')
let estado = readLineSync.question('Digite o seu estado: ')
let numPopulacao = readLineSync.question('Digite a população: ')
let numHomens = readLineSync.question('Digite o numero de homens: ')
let numMulheres = readLineSync.question('Digite o numero de mulheres: ')

const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercental = cidade1.percentualHomens()
let mulheresPercental = cidade1.percentualMulheres()

console.log('=======================================')
console.log('    Resultado sobre Dados da Cidade    ')
console.log('=======================================')
console.log('O percentual de mulheres é ',mulheresPercental.toFixed(2),' de ',numPopulacao,' habitantes.')
console.log('O percentual de homens é ',homensPercental.toFixed(2),' de ',numPopulacao,' habitantes.')
console.log('=======================================')