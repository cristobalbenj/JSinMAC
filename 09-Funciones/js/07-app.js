iniciarA();

function iniciarA(){
    console.log('Iniciando App..');
    segundaF();
}

function segundaF(){
    console.log('Desde la segunda funcion');
    usuarioAuth('Cristobal');
}

function usuarioAuth(usuario){
    console.log('Autenticando usuario, espere..')
    console.log(`Auntenticacion exitosa, bienvenido ${usuario}`);
}

//Funciones que toman parametros y se comunican entre si.