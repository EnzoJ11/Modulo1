//o método 'log' do objeto 'console', utilizado para imprimir informações no console do navegador ou servidor//

//console.log("Hello 'World'"); é possivel colocar aspas simples dentro das aspas ('World')//
//console.log('Hello "World"'); é possível colocar aspas dentro das aspas simples ("World")//
//console.log(`Hello World`); permite colocar uma variável dentro de uma string//

//Apresente no console a seguinte frase: Meu nome é (x) e estou na aula 4 do "professor jaques"//

//console.log("Meu nome é Enzo Janssen e estou na aula", 4, "do professor Jaques"); //aonde tem a virgula pode ser + e no lugar das aspas pode ser crase//

//Variáveis//
//nome = "Enzo"; //NÂO RECOMENDADO
//let nome = "Enzo"; //Declaração padrão
//var name = "Enzo"; //Antiga e inadequada
//const NAME = "ENZO"; //Variável que não muda 


//let meuNull = null;
//console.log(meuNull); //Variável sem significado


//let meuNumber = 10.1;
//console.log(typeof(meuNumber)); //Typeof mostra o tipo que o java script está mostrando naquele momento


//let meuBoolean = true
//let meuBoolean = false
//console.log(meuBoolean); //Mostra se o boolean é verdadeiro ou falso


//let num1 = 10;
//let num2 = 5;

//console.log(num1 + num2); //Adição (10+5)
//console.log(num1 - num2); //Subtração (10-5)
//console.log(num1 / num2); //Divisão (10/5)
//console.log(num1 * num2); //Multiplicação (10x5)
//console.log(num1 ** num2); //Potência (10 na 5 potência)

//let numTeste = "5"
//let numTeste2 = parseInt(numTeste); //parseInt nesse caso é para não concatenar a soma
//let numTeste2 = parseFloat(numTeste); //no caso do Float seria caso o número fosse 5.5 ou outro que não seja inteiro
//let numTeste2 = Number(numTeste); //o Number faz a função do parsefloat
//console.log(numTeste2 + num1);

//let contador = 1
//contador = contador + 1
//contador++ //mesma forma de cima, mais simples ++ ou --
//Se for colocado antes é pré encremento ou decremento se for depois é pós, isso serve para fazer a ação antes ou depois da ordem dada

//const passo = 5
//let contador = 0
//contador += passo
//console.log(contador); //serve para facilitar a conta de mais de uma estrutura

//Operadores relacionais

//console.log(10 < 5);
//console.log(10 <= 5);
//console.log(10 > 5);
//console.log(10 >= 5);
//console.log(10 == "10"); //True: compara somente o valor
//console.log(10 === "10"); //False: compara valor e tipo (mais indicado, por ser mais confiável)
//console.log(10 != "10");
//console.log(10 !== "10");

//const usuario = "Enzo";
//const senha = "123";

//const autenticacao = usuario === "Enzo" && senha ==="1235";

//console.log(autenticacao); //checar se a senha é correta

//ESTRUTURAS CONDICIONAIS SIMPLES
//const nota = 70

//if (nota >= 60) {
//    console.log("APROVADO")
//} else if (nota >= 40 && nota <= 59) {
//    console.log("Está de recuperação")
//} else {
//    console.log("REPROVADO, ESTUDE MAIS")
//}

//OPERADOR TERNÁRIO

//let resultadoTernario = (10 < 100) ? true : false ;
//console.log(resultadoTernario);
