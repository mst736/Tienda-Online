
export let tabs = () => {

    let tabItems = document.querySelectorAll('.tab-item');
    let tabContents = document.querySelectorAll('.tab-content');


    //EVENTO ON LOAD PARA ACTIVAR LA PRIMERA TAB AL CARGAR LA PAGINA

    // tabItems.forEach(tabItem => {

    //     tabItem.addEventListener("load", () => {

    //         tabContents.forEach(tabContent => {

            
    //             if (tabItem.dataset.tab[0] & tabContent.dataset.tab[0]) {

    //                 tabItem.classList.add("active");
    //                 tabContent.classList.add("active");

    //             } else {

    //                 return false;
    //             }

    //         });


    //     });

    // });

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