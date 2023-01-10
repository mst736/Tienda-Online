import {validateForm} from './validateForm.js';

export let form = () => {


    let formsubmittion = document.querySelector('.form-send-button');
    let removeButton = document.querySelector('.remove-button');

    let form = document.querySelector('form');
    let formInputs = form.elements;

    let formData = new FormData(form);
    console.log(formData)

    let formDataJson = Object.fromEntries(formData.entries());
    let url = form.dataset.url;

    if(formsubmittion){

        formsubmittion.addEventListener("click", event => {        

            event.preventDefault();
    

            if (!validateForm(form.elements)) {
    
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Por favor, rellene el formulario',
                        type: 'error'
                    }
                }));
    
                return;
            } 


            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
                    
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            }).then(data => {
                
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Formulario enviado correctamente',
                        type: 'success'
                    }
                }));
    
            }).catch(error => {
                console.log(error);
            });
    
        });
    }

    if(removeButton){

        removeButton.addEventListener("click", event => {        

            event.preventDefault();
            console.log(formInputs)

            // for (let index = 0; index < formInputs.length; index++) {

            //     console.log(formInputs[index])

            //     formInputs[index].reset();
            // }
    
        });
    }

    

}