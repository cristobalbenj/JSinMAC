function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
// Si no tiene datos en los parametros tomara los definidos por default = Desconocido y  ' ';