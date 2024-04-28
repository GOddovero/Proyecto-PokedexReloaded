document.addEventListener("DOMContentLoaded", function() {
    const pestañas = document.querySelectorAll(".pestaña");
    const contenidos = document.querySelectorAll(".contenido > div");

    pestañas.forEach(pestaña => {
        pestaña.addEventListener("click", function() {
            const tab = this.dataset.tab;

            // Oculta todos los contenidos
            contenidos.forEach(contenido => {
                contenido.classList.remove("active");
            });

            // Desactiva todas las pestañas
            pestañas.forEach(pestaña => {
                pestaña.classList.remove("active");
            });

            // Activa el contenido correspondiente a la pestaña clickeada
            document.querySelector(`.contenido > .${tab}`).classList.add("active");
            // Activa la pestaña clickeada
            this.classList.add("active");
        });
    });
});
