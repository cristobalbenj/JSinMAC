const producto = {
    nombre: "Monitor 24 \"",
    precio: 3000,
    disponible: true
}

// Destructuring
// const {nombre} = producto;
// const {precio} = producto;
const {nombre} = producto; //Esto es lo mismo que arriba

console.log(nombre);

// Destructuring con arreglos
const numeros = [10, 20, 30 , 40, 50];
const [, , , , cuatro] = numeros; //Solo quiero el numero 50
const [primero, ...segundo] = numeros; // Te separa el valor 10 en la variable primero y los demas los mete en su propio arreglo
console.log(segundo);