const producto = ' Monitor 24 pulgadas ';

console.log(producto);
console.log(producto.length);

// Eliminar espacio en blanco del inicio y del final
console.log( producto.trimStart() ); //Inicio
console.log( producto.trimEnd() ); //Final

console.log( producto.trimStart().trimEnd() ); //Inicio y Final

console.log( producto.trim() ); //Inicio y Final