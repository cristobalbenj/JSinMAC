//Funciones que retornan valores.
function sumar(a, b){
    return a + b; //Return, retornara un valor, pero debemos asignarlo a una variable o constante.
};

const resultadoS = sumar(2, 5); //Creo la constante(Variable) ResultadoS para guardar valor retornado
console.log(resultadoS); //Muestro el valor retornado con la constante resultadoS



//PRUEBA
let total = 0;

function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuesto(total){
    return total * 1.15;
};

total = agregarCarrito(600);
total = agregarCarrito(300);
total = agregarCarrito(100);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es ${totalPagar}`);