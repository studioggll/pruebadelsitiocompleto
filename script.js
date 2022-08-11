
function MostrarEmail(){
    document.getElementById('email').style.display = 'block';
    document.getElementById('Email').style.display = 'none';
    document.getElementById('Email-').style.display = 'block';
}


function OcultarEmail(){
    document.getElementById('email').style.display = 'none';
    document.getElementById('Email').style.display = 'block';
    document.getElementById('Email-').style.display = 'none';
}


function VerMasCategorias(){
    document.getElementById('after').style.opacity = '1'
    document.getElementById('bloques').style.opacity = '50%'
    document.getElementById('VerMenosCategorias').style.opacity = '100%'
    document.getElementById('derecha').style.opacity = '1'
    document.getElementById('izquierda').style.opacity = '1'
}


function VerMenosCategorias(){
    document.getElementById('after').style.opacity = '0'
    document.getElementById('bloques').style.opacity = '100%'
    document.getElementById('VerMenosCategorias').style.opacity = '0%'
    document.getElementById('derecha').style.opacity = '0'
    document.getElementById('izquierda').style.opacity = '0'
}



function flechaDerecha(){
    const fila = document.getElementById('after');
    const card = document.querySelector('.categoria03');
    const izquierda = document.getElementById('izquierda');
    const derecha = document.getElementById('derecha');

    after.scrollLeft += after.offsetWidth;
}



function flechaIzquierda(){
    const fila = document.getElementById('after');
    const card = document.querySelector('.categoria03');
    const izquierda = document.getElementById('izquierda');
    const derecha = document.getElementById('derecha');

    after.scrollLeft -= after.offsetWidth;
}