const producto = 'Monitor 30 Pulgadas';

// Remplazar info de producto con otra
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


// Cortar el texto desde tanto hasta tanto
console.log(producto.slice(0,10));
console.log(producto.slice(8)); //Cortara desde el 8 en adelante


console.log(producto.substring(0, 10));
console.log(producto.substring(1,2)); //Substring dara vuelta esto y lo dejara en 2,1


//Obtener la primera letra de Juan (J)
const usuario = 'Juan';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0)); // Obtener el caracter 0 de Juan (J)