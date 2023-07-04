const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(id){
        console.log(`Pausando la cancion con el id ${id}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(30);

// Puedo añadirle funciones despues al objeto, de la siguiente manera

reproductor.nuevaFuncion = function(){
    console.log('Hola Mundo');
};

reproductor.nuevaFuncion();