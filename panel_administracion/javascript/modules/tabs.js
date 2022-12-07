
export let tabs = () => {
    
        // Seleccionamos todos los botones de las pestañas

        let tabButtons = document.querySelectorAll(".tab-button");

    // Asignamos un manejador de eventos al clic en cada botón de pestaña

    tabButtons.forEach(function(button) {

        button.addEventListener("click", function() {
            // Cuando se hace clic en un botón, se obtiene el contenido de la pestaña
            // correspondiente
            let tabContent = document.querySelector(this.dataset.target);

            // Si el contenido de la pestaña existe, se muestra y se ocultan
            // los demás contenidos de pestañas
            if (tabContent) {

                let parentTabs = this.closest(".tabs");
                let tabContents = parentTabs.querySelectorAll(".tab-content");

                tabContents.forEach(function(content) {
                    content.classList.remove("active");
                });

                tabContent.classList.add("active");

                // Luego, se ocultan todos los botones de pestañas
                // y se muestra el botón correspondiente
                let tabButtons = parentTabs.querySelectorAll(".tab-button");

                tabButtons.forEach(function(button) {
                    button.classList.remove("active");
                });

                this.classList.add("active");

                if(tabContent.querySelector('.tab-button')){
                    tabContent.querySelector('.tab-button').classList.add('active');
                    document.querySelector(tabContent.querySelector('.tab-button').dataset.target).classList.add('active');
                }
            }
        });
    });
}