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

function loadRandomImages() {
    var randomImageNumbers = generateRandomImageNumbers();
    var imgElements = document.querySelectorAll(".divStarters .TarjetaStarters img");

    imgElements.forEach(function(imgElement, index) {
        var randomImageNumber = randomImageNumbers[index];
        imgElement.src = "img/starters/a- (" + randomImageNumber + ").gif";
    });
}

window.onload = function() {
    loadRandomImages();
};
