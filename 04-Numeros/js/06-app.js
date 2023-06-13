const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1); // Texto
console.log(Number.parseInt(numero1)); // Convierto el numero1 en un entero INT
console.log(Number.parseFloat(numero2)); // Convierto el numero1 en un FLOAT
console.log(Number.parseInt(numero3)); // Convertir a numero, como es texto devuelve NaN

//Revisar si un numero es entero o no
console.log(Number.isInteger(numero3)); //False
console.log(Number.isInteger(numero4)); //True