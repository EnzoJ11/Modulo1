//Exercício 1: for in
// const professor = {
//     nome: "Tony Stark",
//     materia: "Matemática",
//         notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// } 

// let somaNotas = 0
// let numeroDeAlunos = 0

// //acessar o objeto notas dentro de professor (.notas)
// for(let aluno in professor.notas) {
//     somaNotas += professor.notas[aluno]
//     numeroDeAlunos++
// }

// let media = somaNotas / numeroDeAlunos

// console.log(`A media da turma é ${media.toFixed(2)}.`)
// console.log(media >= 3 ? `A turma do ${professor.nome} está acima da média de aprovação` : `A turma está abaixo da média`)

//For in para iterar sobre as propriedades dentro das notas, calcule a media e imprima se o aluno está ou não aprovado

// const biblioteca = [
//     { titulo: "A pequena sereia", autor: "Hans Christian", ano: 1837 },
//     { titulo: "Harry Potter e a Pedra filosofal", autor: "J. K. Rowling", ano: 1997 },
//     { titulo: "O Hobbit", autor: "John Rolland", ano: 1937 },
//     { titulo: "Don Quixote", autor: "Miguel de Cervantes", ano: 1605 },
//     { titulo: "The Enigma", autor: "Andrew Hodges", ano: 1603 },
//     { titulo: "A menina que tinha dons", autor: "Mike Carey", ano: 2014 }

// ]

// for(let livro of biblioteca) {
//     if(livro.ano < 2000) {
//         console.log(`O livro "${livro.titulo}", escrito por ${livro.autor}, foi publicado em ${livro.ano}`)
//     }
// }

//Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
// Para cada filme no array, verifique se o gênero já existe no objeto contagem.
// Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1 * Após loop, imprima cada gênero e o número de fillmes correspondente

// const filmes = [
//     {titulo: 'Tropa de Elite', genero: 'Ação' },
//     {titulo: 'Oppenheimer', genero: 'Biografia' },
//     {titulo: 'High School Musical', genero: 'Musical' },
//     {titulo: 'A Procura da Felicidade', genero: 'Drama' },
//     {titulo: 'Gente Grande', genero: 'Comédia' },
//     {titulo: 'Missão Impossível', genero: 'Ação' },
//     {titulo: 'O Poderoso Chefão', genero: 'Crime' },
// ]

// //cirado o objeto contagemGeneros
// let contagemGeneros = {}

// filmes.forEach(filme => {
//     //primeiro ela verifica se existe um objeto dentro do contagemGeneros
//     if (contagemGeneros[filme.genero]) {
//         //nessa condição se houver outro genero com o mesmo nome ela será encrementada de um valor e assim por diante se houver mais generos
//         contagemGeneros[filme.genero]++
//     } else {
//         //criando dentro do objeto uma posição com o nome do genero e começando com 1
//         contagemGeneros[filme.genero] = 1
//     }
// })

// for (let genero in contagemGeneros){
//     console.log(`${contagemGeneros[genero]} filme(s) do gênero ${genero}.`)
// }

//Pesquisa Binária

// Função de pesquisa binária

// const binarySearch = (list, item) => {
//     let low = 0
//     let high = list.length - 1

//     while(low <= high){
//         let mid = Math.floor((low + high)/2)
//         let guess = list[mid]

//         if(guess === item){
//             return mid
//         }else if (guess > item){
//             high = mid -1
//         } else {
//             low = mid + 1
//         }
//     }

//     return null
// }

// const myList = [1, 3, 5, 7, 9]

// console.log(binarySearch(myList, 3)) //1

//NOVOS OPERADORES
//spread = espalhar (... oque vai ser espalhado)
//rest = juntar (...oque vai ser somado ou juntado)

//SPREAD
// let listaTimes = ['Inter', 'Gremio']
// let listaTimes2 = ['São José', 'Pelotas']

// let listaTimesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2]

// console.log(listaTimesCompletos)

//REST (o javascript que vai identificar se é spread ou rest)
// function soma(...param) {
//     let resultado = 0

//     console.log(param)

//     param.forEach(v => resultado += v)

//     return resultado
// }

// console.log(soma(3, 8, 5, 7))
