//Aqui meti mano jugando, en donde compruebo que el parametro es un entero.
const aprendiendo = function(a){
    if(Number.isInteger(a)){
        console.log(`Aprendiendo JS ${a}`);
    } else{
        console.log('No es un entero');
    }
}
aprendiendo(20);

//Ahora hare lo mismo pero con un arrow function

const aprendiendo2 = (b) => {
    if(Number.isInteger(b)){
        console.log(`Si es un entero ${b}`);
    } else {
        console.log(`No es un entero ${b}`);
    }
}

aprendiendo2(30);