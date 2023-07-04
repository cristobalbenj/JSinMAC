const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: (id) => console.log(`Pausando la cancion con el id ${id}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo cancion ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`La cancion es ${this.cancion}`);
    }
};

reproductor.nuevaCancion = "Bad Bunny";
reproductor.obtenerCancion;
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(30);

// Puedo añadirle funciones despues al objeto, de la siguiente manera

reproductor.nuevaFuncion = function(){
    console.log('Hola Mundo');
};

reproductor.nuevaFuncion();