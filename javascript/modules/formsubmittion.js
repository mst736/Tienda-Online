import { validateForm } from "./validateForm.js";
import { renderNotification } from "./notification.js";

export let formsubmittion = () => {
    
    let formsubmittion = document.querySelector('.form-button button');

    formsubmittion.addEventListener("click", () => {

        if (validateForm()) {

            return renderNotification();
            
        } else {

            return renderNotification()= false;

        }
        

    });

}