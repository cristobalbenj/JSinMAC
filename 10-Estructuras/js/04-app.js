const totalPagar = 300;
const dinero = 100;
const tarjeta = false;
const cheque = true;
const vuelto = dinero - totalPagar;

if(totalPagar < dinero){
    console.log(`El dinero es suficiente y te sobran ${vuelto}`);
} else if(tarjeta){
    console.log('Pagas con tarjeta :)');
} else {
    console.log('No money');
}

//Primero prueba con el IF, y si se cumple entra ahi, si  no se cumple prueba con el else if
// si se cumple el else if entra ahi, por lo tanto diria "Pagas con tarjeta", si no se cumple nada
// entra al else y diria "No money"