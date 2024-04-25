function generateRandomImageNumbers() {
    var imageNumbers = [];

    // Genera un array con los números del 1 al 30
    for (var i = 1; i <= 30; i++) {
        imageNumbers.push(i);
    }

    // Baraja aleatoriamente el array
    for (var i = imageNumbers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [imageNumbers[i], imageNumbers[j]] = [imageNumbers[j], imageNumbers[i]];
    }

    return imageNumbers;
}

function getColorForNumber(number) {
    // Reglas para determinar el color basado en el número
    if ([1, 6, 9, 12, 16, 19, 22, 25, 28].includes(number)) {
        return "#25ad03";
    } else if ([2, 7, 10, 13, 17, 20, 23, 26, 29].includes(number)) {
        return "#f23a11";
    } else if (number === 4) {
        return "#fcba03";
    } else if (number === 5) {
        return "#949993";
    } else if (number === 15) {
        return "#ff5a08";
    } else {
        return "#1185f2"; 
    }
}

function loadRandomImages() {
    var randomImageNumbers = generateRandomImageNumbers();
    var tarjetaStarters = document.querySelectorAll(".divStarters .TarjetaStarters");

    tarjetaStarters.forEach(function(tarjeta, index) {
        var randomImageNumber = randomImageNumbers[index];
        var color = getColorForNumber(randomImageNumber);
        var imageUrl = "img/starters/a- (" + randomImageNumber + ").gif";

        // Establece el color de fondo de la tarjeta y la imagen
        tarjeta.style.backgroundColor = color;
        tarjeta.querySelector("img").src = imageUrl;
    });
}

window.onload = function() {
    loadRandomImages();
};
