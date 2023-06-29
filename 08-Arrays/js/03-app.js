const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

//Cuanto mide el arreglo
console.log(meses.length); //Length no empieza desde 0, cuenta 6 

for(let i = 0; i < meses.length; i++) {
    console.log(meses[i]); //Si lo dejo asi, me imprime por separado los meses
}