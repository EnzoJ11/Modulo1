//Objetos em JavaScript

//const pessoa = {
//    nome: "Enzo Janssen",
//    idade: 18,
//    profissao: "Desenvolvedor",
//    email: "enzo@teste.com",
//    empregado: false
//}

//acessando o valor nome dentro da constante pessoa
//pessoa.nome = "Claudio"

//para apagar um valor se utiliza delete ex.
// delete pessoa.empregado

//console é objeto e log é função
// console.log(pessoa)

// const pessoa = {
//    nome: "Enzo Janssen",
//    idade: 18,
//    profissao: "Desenvolvedor",
//    email: "enzo@teste.com",
//    empregado: false
// }

// pessoa.falar = function() {
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
// }
// console.log(pessoa)

//Exercício criar algo do quarto:

// const desodorante = {
//     nome: 'Axe',
//     odor: 'Apollo',
//     tamanho: 5.00,
//     cor: 'Preto e azul',
//     temTampa: true,
//     spray funcionando: false
// }

//Estrutura de repetição for in
//utilizado para percorrer a constante criada

// const pessoa = {
//    nome: "Enzo Janssen",
//    idade: 18,
//    profissao: "Desenvolvedor",
//    email: "enzo@teste.com",
//    empregado: false
// }

// for(let chave in pessoa){
// //                             pessoa['nome']
//     console.log(chave + ": " + pessoa[chave])
// }

//Estrutura de repetição for of 

// let numeros = [10, 20, 100]

// for(let quantidade of numeros){
//     console.log(quantidade)
// }

//Exercício: Você tem uma lista de objetos que representam diferentes tipos de veículos e suas característias.
//Objetivo é usar um FOR IN para listar todas as propriedades e valores de cada veículos. Depois utilizar o FOR OF para listar apenas os modelos dos veículos:

// const veiculo1 = {
//     marca: 'Fiat',
//     modelo: 'Clio',
//     ano: '2015',
//     cor: 'Branco',
//     preco: 40500
// }

// const veiculo2 = {
//     marca: 'Honda',
//     modelo: 'Civic',
//     ano: '2020',
//     cor: 'Preto',
//     preco: 61000
// }

// const veiculos = [veiculo1, veiculo2]

// for (let dados in veiculos){
//     console.log(veiculos[dados])
// }

// console.log("\n")

// for (let veiculo of veiculos){
//     console.log(Modelo veículo: ${veiculo.modelo})
// }

//Estrutura de repetição for each

// let cores = ['Vermelho', "Branco"]

// cores.forEach((cor, indice) => {
//     console.log(indice + ": " + cor)
// })

//Exercício: Construa um array de números e calcule a soma total e também imprima cada número multiplicado por 2.

// // Array
// const numeros = [5, 10, 15, 20];

// // Variável para armazenar a soma total
// let somaTotal = 0;

// // Utiliza o método forEach para iterar sobre o array de números
// numeros.forEach((numero) => {
// // Imprime cada número multiplicado por dois
//     console.log(`O número ${numero} multiplicado por dois é: ${numero * 2}`);

// // Adiciona o número à soma total
//     somaTotal += numero;
// });

// // Imprime a soma total
// console.log(`A soma total dos números é: ${somaTotal}`);

//Design Patern (Factory para criar objetos com mais facilidade em escala)
// let CarFactory = function(cor, tipo, marca) {
//     return {
//         cor,
//         tipo,
//         marca
//     }
// }

// let carro1 = CarFactory('Azul', 'Speed', 'Calor')
// let carro2 = CarFactory('Preta', 'Mountain', 'BMX')

// console.log(carro1)
// console.log(carro2)

