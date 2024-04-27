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
function generateRandomNumber(){
    kanto = Math.floor(Math.random() * 151) + 1;
    johto = Math.floor(Math.random() * 100) + 1;
    hoenn = Math.floor(Math.random() * 135) + 1;
    sinnoh = Math.floor(Math.random() * 107) + 1;
    teselia = Math.floor(Math.random() * 169) + 1;
    kalos = Math.floor(Math.random() * 100) + 1;
    alola = Math.floor(Math.random() * 125) + 1;
    galar = Math.floor(Math.random() * 110) + 1;
    hisui = Math.floor(Math.random() * 30) + 1;
    star = Math.floor(Math.random() * 56) + 1;
    return {
        kanto: kanto,
        johto: johto,
        hoenn: hoenn,
        sinnoh: sinnoh,
        teselia: teselia,
        kalos: kalos,
        alola: alola,
        galar: galar,
        hisui: hisui,
        star: star
    };  
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
        tarjeta.style.backgroundColor = color;
        tarjeta.querySelector("img").src = imageUrl;
    });
    // Kanto
    var numeroRegiones = generateRandomNumber();
    console.log(numeroRegiones.kanto);
    var imgUrlKanto = "img/kanto/kanto- (" + numeroRegiones.kanto + ").gif";
    var tarjetaRegion = document.querySelector("#TarjetaRegionKanto");
    tarjetaRegion.querySelector("img").src = imgUrlKanto;
    console.log(imgUrlKanto);


    // Johto
    console.log(numeroRegiones.johto);
    var imgUrlJohto = "img/johto/johto- (" + numeroRegiones.johto + ").gif";
    var tarjetaRegionJohto = document.querySelector("#TarjetaRegionJohto");
    tarjetaRegionJohto.querySelector("img").src = imgUrlJohto;
    console.log(imgUrlJohto);

    // Hoenn
    console.log(numeroRegiones.hoenn);
    var imgUrlHoenn = "img/hoenn/hoenn- (" + numeroRegiones.hoenn + ").gif";
    var tarjetaRegionHoenn = document.querySelector("#TarjetaRegionHoenn");
    tarjetaRegionHoenn.querySelector("img").src = imgUrlHoenn;
    console.log(imgUrlHoenn);
    

    // Sinnoh
    console.log(numeroRegiones.sinnoh);
    var imgUrlSinnoh = "img/sinnoh/sinnoh- (" + numeroRegiones.sinnoh + ").gif";
    var tarjetaRegionSinnoh = document.querySelector("#TarjetaRegionSinnoh");
    tarjetaRegionSinnoh.querySelector("img").src = imgUrlSinnoh;
    console.log(imgUrlSinnoh);

    // Teselia
    console.log(numeroRegiones.teselia);
    var imgUrlTeselia = "img/teselia/teselia- (" + numeroRegiones.teselia + ").gif";
    var tarjetaRegionTeselia = document.querySelector("#TarjetaRegionTeselia");
    tarjetaRegionTeselia.querySelector("img").src = imgUrlTeselia;
    console.log(imgUrlTeselia);

    // Kalos
    console.log(numeroRegiones.kalos);
    var imgUrlKalos = "img/kalos/kalos- (" + numeroRegiones.kalos + ").gif";
    var tarjetaRegionKalos = document.querySelector("#TarjetaRegionKalos");
    tarjetaRegionKalos.querySelector("img").src = imgUrlKalos;
    console.log(imgUrlKalos);

    // Alola
    console.log(numeroRegiones.alola);
    var imgUrlAlola = "img/alola/alola- (" + numeroRegiones.alola + ").gif";
    var tarjetaRegionAlola = document.querySelector("#TarjetaRegionAlola");
    tarjetaRegionAlola.querySelector("img").src = imgUrlAlola;
    console.log(imgUrlAlola);

    // Galar
    console.log(numeroRegiones.galar);
    var imgUrlGalar = "img/galar/galar- (" + numeroRegiones.galar + ").gif";
    var tarjetaRegionGalar = document.querySelector("#TarjetaRegionGalar");
    tarjetaRegionGalar.querySelector("img").src = imgUrlGalar;
    console.log(imgUrlGalar);

    // Hisui
    console.log(numeroRegiones.hisui);
    var imgUrlHisui = "img/hisui/hisui- (" + numeroRegiones.hisui + ").gif";
    var tarjetaRegionHisui = document.querySelector("#TarjetaRegionHisui");
    tarjetaRegionHisui.querySelector("img").src = imgUrlHisui;
    console.log(imgUrlHisui);

    // Star
    console.log(numeroRegiones.star);
    var imgUrlStar = "img/star/star- (" + numeroRegiones.star + ").gif";
    var tarjetaRegionStar = document.querySelector("#TarjetaRegionStar");
    tarjetaRegionStar.querySelector("img").src = imgUrlStar;
    console.log(imgUrlStar);


}

window.onload = function() {
    loadRandomImages();
    generateRandomNumber();
};

