//Exercitando Arrays e funções

//Exercício 1: Somar todos os elemntos de um Array

// function somaElementos(vetor) {
//     let soma = 0;
//         //estrutura de início 
//     for (let i = 0; i < vetor.length; i++) {
//         //Pode ser escrito soma =+ vetor[i]
//         soma = soma + vetor[i];
//     }
//     return soma;
// }
//                                            posição: 0  1  2  3     
// console.log("Teste Soma Elementos:", somaElementos([1, 2, 3, 4]));

//Exercício 2: Encontrar o maior número em um Array

// function maiorNumero(vetor){
//     let maior = vetor[0]
//     for(let i = 1; i < vetor.length; i++){
//         if(vetor[i] > maior){
//             maior = vetor[i]
//         }
//     }
//     return maior
// }

// console.log("O elemento maior é: ", maiorNumero([1, 10, 100, 70 ]))

//Exercício 3: Como reverter um Array

// function reverterArray(array) {
//     let resultado = []
//     for (let i = array.length - 1; i >= 0; i--) {
//         resultado.push(array[i])
//     }
//     return resultado
// }

// console.log("O numero inverso fica:", reverterArray([1, 2, 3, 4]))

//Matriz
//Exercício 1: Somar todos os elementos de uma matriz

// function somaMatriz(matriz){
//     let soma = 0
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             soma += matriz[i][j]
//         }
//     }
//     return soma
// }

// console.log("A soma dos elementos da matriz é: ", somaMatriz([[1, 2], [3, 4]]))

//Exercício 2: Encontrar o maior número da matriz

// function maiorNumeroMatriz(matriz){
//     let maior = matriz[0][0]
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz.length; j++){
//             if(matriz[i][j] > maior){
//                 maior = matriz[i][j]
//             }
//         }
//     }
//     return maior
// }

// console.log("O maior número da matriz é: ", maiorNumeroMatriz([[1, 2], [3, 4]]))

//Funções avançadas: String (String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos.)

//Funções utilizadas em string:
//                     tamanho da string - (.length)
// console.log("EnzoJanssen" .length)

//                  local de letra na string - (.charAt)
// console.log("EnzoJanssen".charAt(8))

//posição da letra na sua primeira ocorrência (case sensitive A ou a) - (.indexOf)
// let nome = 'Enzo'
// console.log(nome.indexOf('z'))

//muda o nome da string - (.replace)
// let nome = "Enzo Janssen"
// console.log(nome)
// console.log(nome.replace("Enzo Janssen", "Bob Marley"))

//torna toda a string uppercase - .toLocaleUpperCase(maiúscula) / .toLocaleLowerCase(minúscula)
// let nome = "Enzo Janssen"
// console.log(nome.toLocaleUpperCase())

//remove os espaços em branco das extremidades da string - (.trim)
// let nome = " Enzo Janssen "
// console.log("-" + nome.trim() + "-")

//Funções avançadas: Matemáticas:

//arredonda para baixo números com vírgula - (.ceil)
//      Math lida com valores matemáticos no JS
// let x = Math.ceil(10.100)
// console.log(x)

//arredonda para cima números com vírgula - (.floor)
// let x = Math.floor(10.100)
// console.log(x)

//arredonda de 0.5 para cima, se não arredonda para baixo - (.round)
// let x = Math.round(10.499)
// console.log(x)

//gera um número aleatório
// let x = Math.random()
// console.log(x)

// Funções avançadas: Datas

//Pegar a data do dia - (.getDate)
// let data = new Date()
// console.log(data.getDate())

//Pegar o mês atual - (.getMonth) o + 1 é pois começa do 0
// let data = new Date()
// console.log(data.getMonth() + 1)

//Pegar o ano atual - (.getFullYear)
//let data = new Date()
//console.log(data.getFullYear)

//Exercicio: Colocar a data completa
// let data = new Date()
// let mes = new Date()
// let ano = new Date()

// console.log(data.getDate(),'/' + (mes.getMonth() + 1),'/' + ano.getFullYear())

//Para a data completa mais horário - (.toString)
// let data = new Date()

// console.log(data.toString())

//Milisegundos entre duas datas
// let data = new Date()
// let data1 = new Date()

// let milisegundosEntreDatas = Math.abs(data.getTime() - data1.getTime())
