export let save_button = () => {

        // Seleccionamos todos los botones de las pestañas

        let removeButtons = document.querySelectorAll(".save-button");

    // Asignamos un manejador de eventos al clic en cada botón de pestaña

    removeButtons.forEach(function(removeButton) {

        removeButton.addEventListener("click", function() {

            alert("ENTRA EN EL EVENTO CLICK SWITCH")

        });

    });

}