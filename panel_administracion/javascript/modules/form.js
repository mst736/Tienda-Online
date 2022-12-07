import {validateForm} from './validateForm.js';

export let form = () => {

    let form = document.querySelector('form');
    let formsubmittion = document.querySelector('.form-send-button');

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

            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            fetch('http://192.168.1.16:8080/api/admin/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('accessToken')
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
    
}
