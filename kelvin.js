//Questão 01 e 02//

let kelvin = 293;
/*Essa linha de código cria uma variável chamada "kelvin" e atribui a ela o valor 293.*/

//Questão 03 e 04//

let celsius = kelvin - 273;
/*Essa linha de código realiza a conversão da temperatura de Kelvin para Celsius, 
subtraindo 273 do valor armazenado na variável "kelvin". */

//Questão 05 e 06//

let fahrenheit = celsius * (9/5) + 32;
/*Nesta linha de código, calculamos a temperatura em Fahrenheit a partir do valor 
armazenado na variável "celsius". Utilizamos o tipo de variável "let" porque o 
valor de Fahrenheit será alterado nessa etapa.*/ 

//Questão 07 e 08//

fahrenheit = Math.floor(fahrenheit);
/*Essa linha de código utiliza o método ".floor()" do objeto Math para arredondar 
o valor da temperatura em Fahrenheit para baixo, garantindo um resultado sem casas decimais.*/

//Questão 09// 

console.log(`A temperatura é ${fahrenheit} graus Fahrenheit.`);

//Questão 11//

//Qual seria a temperatura correspondente a 0 Kelvin em Fahrenheit?

const kelvin1 = 0;
const celsius1 = kelvin1 - 273;
let fahrenheit1 = celsius1 * (9/5) + 32;
fahrenheit1 = Math.floor(fahrenheit1);
console.log(`A temperatura é ${fahrenheit1} graus Fahrenheit.`);

//Questão 12//

let newton = celsius * (33/100);
newton = Math.floor(newton)
console.log(`A temperatura é ${newton} graus Newton.`);
