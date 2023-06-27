const producto = {
    nombre: "Monitor 24 \"",
    precio: 3000,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais: 'China'
        }
    }
}
//DESTRUCTURING
const { nombre, informacion, informacion: { fabricacion: { pais } } } = producto;
console.log(nombre);
console.log(informacion);
console.log(pais);