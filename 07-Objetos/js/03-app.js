const producto = {
    nombre: "Monitor 24 \"",
    precio: 3000,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen = "Imagen.jpg"

//Eliminar propiedades del objeto
delete producto.imagen;

console.log(producto);