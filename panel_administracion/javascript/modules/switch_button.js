export let switch_button = () => {

    // Seleccionamos todos los botones de las pestañas

    let switchButtons = document.querySelectorAll(".on-off-button");

    // Asignamos un manejador de eventos al clic en cada botón de pestaña

    switchButtons.forEach(function(switchButton) {

        switchButton.addEventListener("click", function() {

            alert("ENTRA EN EL EVENTO CLICK SWITCH")

        });

    }); 

}