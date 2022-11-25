export let formCharactersValidation = () => {

    let formInputs = document.querySelectorAll('.validate-characters');
   
    formInputs.forEach(formInput => {

        formInput.addEventListener("input", () => {
            
            let arrayString = formInput.closest('.form-element').querySelector('.validate-characters');

                //console.log(formInput.dataset.max);

            if (arrayString.value.length == formInput.dataset.max) {

                document.querySelector(".form-element-counter").innerHTML = "Has llegado al Límite de " + formInput.dataset.max + " Caracteres";

                //alert ("Has llegado al Límite de " + formInput.dataset.max + " Caracteres")
                //formInput.closest('.form-element').querySelector('.validate-characters span').write("Has llegado al Límite de " + formInput.dataset.max + " Caracteres").
            } else {

                let remainingCharacters = formInput.dataset.max - arrayString.value.length
                
                if (remainingCharacters > 1) {

                    document.querySelector(".form-element-counter").innerHTML = ("Te quedan " + remainingCharacters + " caracteres")

                } else {

                    document.querySelector(".form-element-counter").innerHTML = ("Te queda " + remainingCharacters + " caracter")


                }

            }


        
            
        });
    });
}