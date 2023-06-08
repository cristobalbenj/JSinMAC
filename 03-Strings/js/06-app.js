const producto = 'Monitor 20 Pulgadas';

// Repetira el texto escrito 3 veces, si le paso un decimal (2.4) lo redondea (2)
const texto = ' En Promocion'.repeat(3);
console.log(texto);
console.log(`El producto ${producto} esta ${texto}`);


// Split me crea un arreglo con el recurso que yo quiera, en este caso un espacio " "
const actividad = 'Estoy aprendiendo JS Moderno'
console.log(actividad.split(" "));

// Arreglo separado por las comas
const hobbies = 'Leer, Caminar, Jugar Lol, Lolete';
console.log(hobbies.split(","));

// Arreglo separado por los #
const tweet = 'Aprendiendo JS #JSModernoConJuan';
console.log(tweet.split('#'));