setInterval(() => {
    var reloj = document.getElementsByClassName("reloj")[0];
    var tiempoActual = new Date();
    var hora = tiempoActual.getHours();
    var minutos = tiempoActual.getMinutes();
    var segundos = tiempoActual.getSeconds();
    if (hora < 10) {
        minutos = `0${hora}`
    }
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    if (segundos < 10) {
        segundos = `0${segundos}`
    }
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`;
}, 1000);