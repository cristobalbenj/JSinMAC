const producto = {
    nombre: "Monitor 24 \"",
    precio: 3000,
    disponible: true
}

console.log(producto.nombre);

// Destructuring
// const {nombre} = producto;
// const {precio} = producto;
const {nombre, precio, disponible} = producto; //Esto es lo mismo que arriba

console.log(nombre);
console.log(precio);
console.log(disponible);