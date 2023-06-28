const producto = {
    nombre: 'Monitor 40 pulgadas',
    Marca: 'Hp',
    precio: 150,
    disponible: true
}

const medidas = {
    peso: '1KG',
    medida: '1M'
}

console.log(producto);
console.log(medidas);

//Assign para unir los objetos
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas};
console.log(resultado2);