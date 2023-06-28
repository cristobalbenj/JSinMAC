"use stric"; // Esto sirve para que no se utilicen malas practicas, por ejemplo:
// x = 20;
// console.log(x);
// Tienes que definir la variable x con "let", buenas practicas siempre; 

const producto = {
    nombre: 'Monitor',
    marca: 'HP',
    precio: 250.000,
    disponible: true
}

Object.freeze(producto); //Congelamos el objeto, no es editable, gracias a use stric

producto.nombre = "Hola";

console.log(producto);
console.log(Object.isFrozen(producto));