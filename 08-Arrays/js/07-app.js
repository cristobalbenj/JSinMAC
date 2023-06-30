//Imperativa modifca el objeto actual, Declarativa no
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

//Eliminar el ultimo elemento del carrito
carrito.pop();

//Eliminar el inicio del arreglo
carrito.shift();

//Eliminar el del medio
carrito.splice(1, 1); // Elimna desde la posicion 1 hasta la 1
// carrito.splice(1, 3); // Elimna desde la posicion 1 hasta la 3


console.table(carrito);
