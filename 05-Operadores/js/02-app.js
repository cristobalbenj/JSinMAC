const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


console.log(numero1 == numero3);

console.log(numero1 == numero2); //Devuelve True porque solo le importa el valor

console.log(numero1 === numero2); //Devuelve False porque es estricto y compara todo.

console.log(numero1 === parseInt(numero2)); //True

console.log(numero1.toString() === numero2);

console.log(numero1 != numero3);
console.log(numero1 !== numero2); //Comparador Extricto