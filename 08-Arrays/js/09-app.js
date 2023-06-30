const carrito = [
    {nombre: 'Monitor 24 \"', precio: 500},
    {nombre: 'Monitor 25 \"', precio: 600},
    {nombre: 'Monitor 26 \"', precio: 700},
    {nombre: 'Monitor 27 \"', precio: 800},
    {nombre: 'Monitor 28 \"', precio: 900},
]




for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} tiene un precio de ${carrito[i].precio}`);
}

//Cuando tiene un . y despues un nombre, eso es un metodo
//Foreach es lo mismo que el for
carrito.forEach( function(p) {
    console.log(`${p.nombre} tiene un precio de ${p.precio}`);
})