
export let tabs = () => {

    let tabItems = document.querySelectorAll('.tab-item');
    console.log (tabItems);
    let tabContents = document.querySelectorAll('.tab-content');


    // RECORREMOS PRIMERO LOS ELEMENTOS ITEMS ASOCIADOS AL CONTENT CORRESPONDIENTE
    
    tabItems.forEach(tabItem => {
        
        // AÑADIMOS EL EVENTLISTENER "CLICK" PARA ESPERAR EL CLIC DE USUARIO
        tabItem.addEventListener("click", () => {

            // CON UN BUCLE, SE REMUEVEN PRIMERO TODAS LAS CLASES ACTIVAS DEL ELEMENTO ANTES DE ACTIVAR EL ELEMENTO DONDE HAYAS CLICADO

            
            tabItems.forEach(tabsItem => {

                if (tabsItem) {

                    tabsItem.classList.remove("active");
                    
                } else {

                    return false;

                }
                

            });

            

            // SE APLICA EL ATRIBUTO ACTIVE A LA CLASE DEL ELEMENTO "tabItem"

            tabItem.classList.add("active");

            tabContents.forEach(tabContent => {


                // SI EL DATASET DE "tabItem" Y DE "tabContent" SON IGUALES, SE ACTIVA LAS CLASES DE ESOS DOS ELEMENTOS, SINO SE REMUEVE LA CLASE.

                if(tabContent.dataset.tab == tabItem.dataset.tab) {

            //         // SE AÑADE LA CLASE ACTIVA

                    tabContent.classList.add("active");

                } else {

            //         // SE REMUEVE LA CLASE ACTIVA

                    tabContent.classList.remove("active");

                }
    
            });
    
        });

    });

    

}