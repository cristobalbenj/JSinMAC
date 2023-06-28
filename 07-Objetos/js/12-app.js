//Object Literal
const producto = {
    nombre: 'Monitor 25',
    marca: 'Hp',
    precio: 150,
    disponible: true
}

//Object Constructor
function Producto(nombre, precio, marca){
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 'HP', 500);
console.log(producto2);

const producto3 = new Producto('Television Samsung', 'Samsung', 800);
console.log(producto3);