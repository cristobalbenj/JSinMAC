const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//Se puede modificar el arreglo aunque sea definido en const
meses[0] = 'Modifico Enero';

//Puedo agregar un elemento en la posicion 10, y se salta la 6 la 7 la 8 la 9, no existen.
meses[10] = 'Prueba'; 
console.table(meses);