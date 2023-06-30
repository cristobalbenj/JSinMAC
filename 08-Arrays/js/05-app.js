const carrito = [];

const producto = {
    nombre: 'Monitor 24 \"',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 300
}

carrito.push(producto);
carrito.push(producto2);

//Sirve para poner de los primeros el objeto
carrito.unshift(producto3);

console.table(carrito);