const producto = {
    nombre: "Monitor 24 \"",
    precio: 3000,
    disponible: true
}

producto.disponible = true;

delete producto.nombre;

console.log(producto);

//Las constantes no pueden variar su valor, pero si hay un objeto dentro si podemos modificar sus datos
 