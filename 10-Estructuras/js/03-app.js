compra = 300;
iva = compra * 1.19;
totalPagar = iva + compra;
dineroDisponible = 300;
diferencia = totalPagar - dineroDisponible;

if(dineroDisponible <= totalPagar){
    console.log('No tienes dinero suficiente')
    console.log(`El total a pagar es de ${totalPagar}`);
    console.log(`Y tu saldo es de ${dineroDisponible}`);
    console.log(`Te faltan ${diferencia}`);
}else{
    console.log('Pago Exitoso');
    console.log('Vuelva pronto...');
}

