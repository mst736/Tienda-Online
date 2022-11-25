export let formsubmittion = () => {
    
    let formsubmittion = document.querySelector('.form-reset-button .form-button button');
    let fieldRequired = document.querySelector('.form-element-input input');
   
    formsubmittion.addEventListener("click", (event) => {

        if (fieldRequired.required) {

            


        }
        
        //event.preventDefault();

        //console.log("Evento Clic Botón Correcto")

        // let arrayString = formInput.closest('.form-element').querySelector('.validate-characters');

        //     //console.log(formInput.dataset.max);

        // if (arrayString.value.length == formInput.dataset.max) {

        //     document.querySelector(".form-element-counter").innerHTML = "Has llegado al Límite de " + formInput.dataset.max + " Caracteres";

        //     //alert ("Has llegado al Límite de " + formInput.dataset.max + " Caracteres")
        //     //formInput.closest('.form-element').querySelector('.validate-characters span').write("Has llegado al Límite de " + formInput.dataset.max + " Caracteres").
        // } else {

        //     let remainingCharacters = formInput.dataset.max - arrayString.value.length
            
        //     if (remainingCharacters > 1) {

        //         document.querySelector(".form-element-counter").innerHTML = ("Te quedan " + remainingCharacters + " caracteres")

        //     } else {

        //         document.querySelector(".form-element-counter").innerHTML = ("Te queda " + remainingCharacters + " caracter")


        //     }

        // }


    
        
    });

}