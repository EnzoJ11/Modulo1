//Exercício 1: Par ou Ímpar

//const prompt = require('prompt-sync')();

//let numero =  parseInt(prompt("Insira um número:"))

//if(numero % 2 === 0){
//   console.log("O número é Par");
//} else {
//    console.log("O número é Ímpar");
//}

//Exercício 2: Maior de 2 números

//const prompt = require('prompt-sync')();

//let numero1 = parseInt(prompt("Insira o primeiro número:"));
//let numero2 = parseInt(prompt("Insira o segundo número:"));

//if(numero1 > numero2){
//    console.log("O primeiro número é maior.");
//} else if (numero2 > numero1) {
//    console.log("O segundo número é maior.");
//} else {
//    console.log("Os números são iguais.");
//}

//Exercício 3: Triângulo

//const prompt = require('prompt-sync')();

//let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado:"));
//let lado2 = parseInt(prompt("Insira o comprimento do segundo lado:"));
//let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado:"));

//if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//    console.log("É possível formar um triângulo com essas medidas.")
//} else {
//    console.log("Não é possível formar um triângulo")
//}

//Exercício 4: Calculadora Simples

//const prompt = require('prompt-sync')();

//let num1 = Number(prompt("Insira o primeiro número:"));
//let num2 = Number(prompt("Insira o segundo número:"));
//let operacao = prompt("Insira a operação desejada (+, -, /, *)");

//let resultado;

//if (operação === '+'){
//    resultado = num1 + num2;
//} else if (operação === '-'); {
//    resultado = num1 - num2;
//} else if (operacao === '*'); {
//    operacao = num1 * num2;
//} else if (operacao === '/'); {
//    if (num2 !== 0) {
//        resultado = num1 / num2;
//    } else {
//        console.log("Erro: divisão por zero.");
//        resultado = undefined;
//    }
//} else {
//    console.log("Operação inválida");
//}
//
//if (resultado !== undefined) {
//    console.log("Resultado:", resultado);
//}

//Switch Case:

//const prompt = require('prompt-sync')();

//let dia = parseInt(prompt("Insira um número do dia da semana:"));

//let nomeDia;

//switch(dia) {
//    case 1:
//        nomeDia = "Domingo";
//        break;
//    case 2:
//        nomeDia = "Segunda-feira";
//        break;
//    case 3:
//        nomeDia = "Terça-feira";
//        break;
//    case 4:
//        nomeDia = "Quarta-feira";
//        break;
//    case 5:
//        nomeDia = "Quinta-feira";
//        break;
//    case 6:
//        nomeDia = "Sexta-feira";
//        break;
//    case 7:
//        nomeDia = "Sábado";
//        break;

//        default:
//        console.log("Digite um dúmero de 1 a 7");
//        break;     
//}

//console.log("O dia é:", nomeDia);

//Calculadora Switch

// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt("Insira o primeiro número:"));
// let num2 = parseInt(prompt("Insira o segundo número:"));
// let operacao = prompt("Insira a operação desejada (+, -, /, *):");

// let resultado;

// switch(operacao) {
//     case '+':
//         resultado = num1 + num2;
//         break;
//     case '-':
//         resultado = num1 - num2;
//         break;
//     case '*':
//         resultado = num1 * num2;
//         break;
//     case '/':
//      if(num2 !== 0);
//      resultado = num1 / num2;
//      break;
// }
// console.log("Resultado:", resultado);

//Como usar o For:

// let contador = 0;
// let multiplicando = 5;

// // <variável>;     <condição>;     <incremento>;
// for (contador = 0; contador <= 10; contador++) {
//     console.log(`${multiplicando} * ${contador} =`. multiplicando * contador);
// }

// const prompt = require('prompt-sync')();

// let soma = 0;
// for (let i = 0; i <= 10; i ++){
//     soma += i;
// }
// console.log(soma)

//Exercício: números de 10 a 1 de forma decrescente:

// let soma = 0;
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

//Como usar o While

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }

//Exercício: imprimir os multiplos 5 menores que 100

// let i = 5;

// while(i <= 100) {
//     console.log(i)
//     i += 5;
// }

//Calcular a soma dos numeros de 1 a 1000

// let i = 0;
// let soma = 0;

// while(i <= 1000) {
//     soma += i
//     i++
// }
// console.log(soma)

//Senha
// const prompt = require('prompt-sync')();
// let senha

// do {
//     senha = prompt("Digite a senha:")
// } while (senha !== "1100")

// console.log("Senha Correta");

//Pedir ao usuário para adivinhar o numero entre 1 e 10

// const prompt = require('prompt-sync')();
// const numeroCorreto = Math.floor((Math.random() * 10) + 1)
// console.log(numeroCorreto)
// let tentativa

// do {
//     tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"))
//     if (tentativa < numeroCorreto){
//         console.log("Tente um número maior")
//     } else if (tentativa > numeroCorreto) {
//         console.log("Tente um número menor")
//     }
// } while (tentativa !== numeroCorreto)

// console.log("Parabéns! Você acertou")
