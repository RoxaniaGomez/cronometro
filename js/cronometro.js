// Seleccionamos los elementos del DOM
var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var restartButton = document.getElementById("restart");

var totalSeconds = 0; // Inicializamos los segundos en cero
var myInterval;

// Función que se ejecuta cuando se hace click en el botón de iniciar
function startFun() {
    myInterval = setInterval(setTime, 1000);
    startButton.disabled = true;
}
//Funcion que reinicia el cronometro
function restartFun() {
    clearInterval(myInterval);
    totalSeconds = 0;
    secondsLabel.innerHTML = pad(0);
    minutesLabel.innerHTML = pad(0);
    hoursLabel.innerHTML = pad(0);
    startButton.disabled = false;
}

// Función que se ejecuta cuando se hace click en el botón de detener
function stopFun() {
    clearInterval(myInterval);
    startButton.disabled = false;
}

// Función que actualiza el cronómetro
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60) % 60);
    hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}

// Función que agrega un cero delante de los números menores a 10
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// Agregamos los listeners a los botones
startButton.addEventListener("click", startFun);
stopButton.addEventListener("click", stopFun);
restartButton.addEventListener("click", restartFun);
