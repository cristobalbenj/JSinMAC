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

let resultado; 
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];
//Dependiendo el orden en el que ingreses el codigo, afectara al arreglo;

console.table(resultado);