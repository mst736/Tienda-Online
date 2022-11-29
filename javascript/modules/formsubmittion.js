import {validateForm} from './validateForm.js';

export let formsubmittion = () => {
    
    let formsubmittion = document.querySelector('.form-button button');

    formsubmittion.addEventListener("click", () => {        

        if (validateForm()) {

            return true;

        } else {

            return false;
        }

    });

}