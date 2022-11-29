import { validateForm } from "./validateForm.js";

export let formsubmittion = () => {
    
    let formsubmittion = document.querySelector('.form-button button');

    formsubmittion.addEventListener("click", () => {

        if (validateForm()) {

            alert("Formulario Enviado")
            
        } else {

            //alert("Formulario No Enviado")

            //    let unsuccessfull = document.getElementById("#notification_message").appendChild(document.createElement('p').textContent = ("FORM NOT SENT"))

            //     console.log(unsuccessfull);

            // ✅ Create element
            const el = document.createElement('p');

            // ✅ Add classes to element
            el.classList.add('invalid');

            // ✅ Add text content to element
            el.textContent = 'FORM NOT SENT';

            // ✅ Or set the innerHTML of the element
            // el.innerHTML = `<span>One, two, three</span>`;

            // ✅ add element to DOM
            const box = document.getElementById('notification_message');

            box.appendChild(el);

            setTimeout(() => {

                notification.classList.remove("invalid");
                
            }, 5000);

        }
        

    });

}