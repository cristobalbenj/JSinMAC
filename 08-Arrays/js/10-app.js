const carrito = [
    {nombre: 'Monitor 24 \"', precio: 500},
    {nombre: 'Monitor 25 \"', precio: 600},
    {nombre: 'Monitor 26 \"', precio: 700},
    {nombre: 'Monitor 27 \"', precio: 800},
    {nombre: 'Monitor 28 \"', precio: 900},
]

//Cuando tiene un . y despues un nombre, eso es un metodo
//Foreach es lo mismo que el for
carrito.forEach( function(p) {
    console.log(`${p.nombre} tiene un precio de ${p.precio}`);
})

// Que pasaria si quiero crear un nuevo arreglo con los productos que cuesten mas de 600; utilizamos map
// .map hace lo mismo que un for, pero te crea un NUEVO ARREGLO
const productosMasDe500 = carrito.map(function(p) {
    return `${p.nombre} con un precio de ${p.precio}`;
})

console.log(productosMasDe500);
