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

console.log(producto);
console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion.pais);