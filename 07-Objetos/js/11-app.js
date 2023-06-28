const producto = {
    nombre: 'Monitor 25',
    marca: 'Hp',
    precio: 150,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();

//THIS