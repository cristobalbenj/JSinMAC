const carrito = [
    {nombre: 'Monitor 24 \"', precio: 500},
    {nombre: 'Monitor 25 \"', precio: 600},
    {nombre: 'Monitor 26 \"', precio: 700},
    {nombre: 'Monitor 27 \"', precio: 800},
    {nombre: 'Monitor 28 \"', precio: 900},
];

const productosConMap = carrito.map( (p) => {
    return `El producto ${p.nombre} tiene un valor de ${p.precio}`;
});

console.log(productosConMap);

carrito.forEach( (p) => {
    console.log(`El producto ${p.nombre} tiene un valor de ${p.precio}`);
});
