import {validateForm} from './validateForm.js';

export let form = () => {

    let form = document.querySelector('form');
    let formInputs = form.elements;
    let formsubmittion = document.querySelector('.form-send-button');

    if(formsubmittion){

        formsubmittion.addEventListener("click", event => {        

            event.preventDefault();
    
            if (!validateForm(formInputs)) {
    
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Por favor, rellene el formulario',
                        type: 'error'
                    }
                }));
    
                return;
            } 
    
            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));
        });
    }
    
}