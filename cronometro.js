var centesimos = 0;
var segundos = 0;
var minutos = 0;
function start() {
    control = setInterval(cronometro, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
}
function stop() {
    clearInterval(control);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
}
function reset() {
    clearInterval(control);
    centesimos = 0;
    segundos = 0;
    minutos = 0;

    Centesimos.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = "00";
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
}
function cronometro() {
    if (centesimos < 99) {
        centesimos++;
        if (centesimos < 10) { centesimos = "0" + centesimos }
        Centesimos.innerHTML = ":" + centesimos;
    }
    if (centesimos == 99) {
        centesimos = -1;
    }
    if (centesimos == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ((centesimos == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ":" + minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
  
}