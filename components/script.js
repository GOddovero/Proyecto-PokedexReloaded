

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
        return "#8ad479"; // Verde Pastel
    } else if ([2, 7, 10, 13, 17, 20, 23, 26, 29].includes(number)) {
        return "#f6795a"; // Rojo Pastel
    } else if (number === 4) {
        return "#fcd9a3"; // Naranja Pastel
    } else if (number === 5) {
        return "#c5c5c5"; // Gris Pastel
    } else if (number === 15) {
        return "#ff896c"; // Naranja-Rojo Pastel
    } else {
        return "#7db1e7"; // Azul Pastel
    }
}


function loadRandomImages() {
    var randomImageNumbers = generateRandomImageNumbers();
    var tarjetaStarters = document.querySelectorAll(".divStarters .TarjetaStarters");

    tarjetaStarters.forEach(function(tarjeta, index) {
        var randomImageNumber = randomImageNumbers[index];
        var color = getColorForNumber(randomImageNumber);
        var imageUrl = "../img/starters/a- (" + randomImageNumber + ").gif";
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

const etapa1Buttons = document.querySelectorAll('.starterPrimeraPregunta .opcion');
const etapa2Buttons = document.querySelectorAll('.starterSegundaPregunta .opcion');

let seleccionEtapa1 = '';
let seleccionEtapa2 = '';

etapa1Buttons.forEach((button) => {
  button.addEventListener('click', () => {
    seleccionEtapa1 = button.id;
    console.log(`Se seleccionó ${seleccionEtapa1}`);
    verificarYRealizarAcciones();
  });
});

etapa2Buttons.forEach((button) => {
  button.addEventListener('click', () => {
    seleccionEtapa2 = button.id;
    console.log(`Se seleccionó ${seleccionEtapa2}`);
    verificarYRealizarAcciones();
  });
});

function verificarYRealizarAcciones() {
  if (seleccionEtapa1 !== '' && seleccionEtapa2 !== '') {
    console.log('Ambas selecciones completas');
    realizarAccionesSegunSeleccion();
  } else {
    console.log('Faltan selecciones por realizar');
  }
}

function realizarAccionesSegunSeleccion() {
  if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Kanto') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (3).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Squirtle";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Kanto') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (2).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Charmander";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Kanto') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (1).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Bulbasaur";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Johto') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (8).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Totodile";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Johto') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (7).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Cyndaquil";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Johto') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (6).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Chikorita";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Hoenn') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (11).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Mudkip";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Hoenn') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (10).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Torchic";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Hoenn') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (9).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Treecko";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Sinnoh') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (14).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Piplup";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Sinnoh') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (13).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Chimchar";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Sinnoh') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (12).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Turtwig";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Teselia') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (18).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Oshawott";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Teselia') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (17).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Fennekin";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Teselia') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (16).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Chespin";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Kalos') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (21).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Froakie";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Kalos') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (20).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Fennekin";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Kalos') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (19).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Chespin";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Alola') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (24).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Popplio";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Alola') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (23).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Litten";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Alola') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (22).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Rowlet";
  } else if (seleccionEtapa1 === 'agua' && seleccionEtapa2 === 'Star') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (27).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Ornigrim";
  } else if (seleccionEtapa1 === 'fuego' && seleccionEtapa2 === 'Star') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (26).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Mabonny";
  } else if (seleccionEtapa1 === 'planta' && seleccionEtapa2 === 'Star') {
    document.querySelector('.StarterSeleccionado img').src = '../img/starters/a- (25).gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Iriden";
  }else {
    document.querySelector('.StarterSeleccionado img').src = '../img/pkmn/0.gif';
    document.querySelector('.StarterSeleccionado .nombreInicial').textContent = "Aleatorio"
  }
}




document.addEventListener("DOMContentLoaded", function() {
    var opcionesPrimeraPregunta = document.querySelectorAll(".starterPrimeraPregunta .opcion");
    var opcionesSegundaPregunta = document.querySelectorAll(".starterSegundaPregunta .opcion");

    opcionesPrimeraPregunta.forEach(function(opcion) {
        opcion.addEventListener("click", function() {
            opcionesPrimeraPregunta.forEach(function(opt) {
                if (opt !== opcion) {
                    opt.classList.remove("pressed");
                }
            });
            this.classList.toggle("pressed");
        });
    });

    opcionesSegundaPregunta.forEach(function(opcion) {
        opcion.addEventListener("click", function() {
            opcionesSegundaPregunta.forEach(function(opt) {
                if (opt !== opcion) {
                    opt.classList.remove("pressed");
                }
            });
            this.classList.toggle("pressed");
        });
    });
});
