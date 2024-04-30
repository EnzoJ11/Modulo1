//Array ou Vetor:

//Arrays:

// let listaCompras = Array()

// listaCompras [0] = "Shampoo"
// listaCompras [1] = "Condicionador"
// listaCompras ['x'] = 100 //Pode se usar no x algo como 'valor da compra'

// console.log(listaCompras)

// let listaFrutas = ['Banana', 'Maçã']

// console.log(listaFrutas)

// let listaViagem = Array('Passagens', 'Malas')

// //console.log(listaViagem)

//Arrays multidimensionais:

// let listaCoisas = Array()

// listaCoisas['Frutas'] = Array()

// listaCoisas ['Frutas'][0] = "Morango" //Array dentro de um array
// listaCoisas ['Frutas'][1] = "Laranja"
// listaCoisas ['Frutas'][2] = "Uva"
// listaCoisas ['Frutas'][3] = "Mamão"

// listaCoisas['Viagem'] = Array()
// listaCoisas['Viagem'][0] = "Passagem"    
// listaCoisas['Viagem'][1] = "Malas"    
// listaCoisas['Viagem'][2] = "Passaporte"    

// //Inserção de elementos no final do array (.push)
// listaCoisas['Frutas'].push('Banana')

// //Inserção de elementos no começo do array (.unshift)
// listaCoisas['Frutas'].unshift('Limão')

// //Exclusão de elementos no final do array (.pop)
// listaCoisas['Viagem'].pop()

// //Exclusão de elementos no começo do array (.shift)
// listaCoisas['Viagem'].shift()

// console.log(listaCoisas)

//Como encontrar algo dentro de uma lista (.indexof)

//Posições                     0            1          2 
//let listaProdutos = Array('Computador', 'Caneta', 'Chuteira')

//let aux = listaProdutos.indexOf('Chuteira')

//if(aux === -1){
//    console.log('Elemento não existe no Array')
//} else {
//    console.log('Elemento existe e está na posição ' + aux)
//}

//Como ordenar algo dentro do Array (.sort) = ordem alfabética e quando for número números vai do menor para o maior
// let listaProdutos = Array('Caneta', 'Chuteira', 'Garrafa', 'Lousa')
// console.log(listaProdutos.sort())

// let listaNumero = Array(1, 3, 4, 2)
// console.log(listaNumero.sort())

//Funções:

// function calcularAreaTerreno(largura, comprimento) {

//     let area = largura * comprimento //escopo de função
    
//     return area
// }

// let prompt = require('prompt-sync')()

// let lg = prompt("Digite a largura do terreno em metros:")
// let cp = prompt("Digite o comprimento do terreno em metros:")

// //Chamada da função e passagem de parâmetros
// let resultado = calcularAreaTerreno(lg, cp)

// console.log('O terreno possuí ' + resultado + ' metros quadrados')

//Tipos de escopos(Global, Função, Bloco)

// //Global - permite que a variavel seja acessada em qualquer parte do codigo
// let variavelGlobal;
// let x = 5;
// let y = -2;
// 
//Função - apenas dentro da função.
// function variavelF (var1, var2){
//     let variavelFuncao = var1 + var2 //Função
//     return variavelFuncao;
// }
// variavelGlobal = variavelF(x,y); //Global
// 
//Bloco - variaveis dentro de blocos como if, for, while...
// if (variavelGlobal > 0){
//     let maior = true //Bloco
//     if (maior){
//         console.log('OK')
//     }
// }

//Função anônima:
//    variável      função
// let exibirFuncao = function() {
//     console.log('Olá')
// }

//Passando uma função dentro de outra com alguns parâmetros
//Callback é uma função para executar uma ou outra função
//   funçãoanônima
// let callbackSucesso = function(titulo) {
//     console.log(titulo)
// }

// let callbackErro = function(erro){
//     console.log(erro)
// }

//                       //parâmetro dentro da função
// function exibirFuncao(callbacksucesso, callbackerro) {
//     //se for false ira para o callbackErro
//     if(true) {
//         callbackSucesso('Funções de callback em caso de sucesso')
//     } else {
//         callbackErro('Função de callback em caso de erro')
//     }
// }


// exibirFuncao(callbackSucesso, callbackErro)

// //Exemplo de callback em calculadora:

// let soma = function(num1, num2) {
//     return num1 + num2
// }

// let subtracao = function(num1, num2) {
//     return num1 - num2
// }
// let multiplicacao = function(num1, num2) {
//     return num1 * num2
// }

// let divisao = function(num1, num2) {
//     return num1 / num2
// }

// function calculadora(operacao, num1, num2, soma, subrtracao, multiplicacao, divisao){
//     switch(operacao){
//         case "soma":
//             let resultado = soma(num1, num2)
//             return resultado
//         break
//     }
// }

// // calculadora("soma", 10, 10, soma)

//Arrowfunction: seta (=>) mesma coisa que function
// function teste () => {
//     console.log('Teste')   
// }