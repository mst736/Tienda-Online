export let validateForm = formInputs => {

    let validForm = true;
   
    // SE CREA UN OBJETO CON LOS DIFERENTES TIPOS DE VALIDACIONES QUE PUEDE TOMAR CADA CAMPO DEL FORMULARIO
    // CON SUS REGEX CORRESPONDIENTES

    let validators = {

        "only-letters": /^[a-zA-Z\s]+$/g,
        "only-numbers": /\d/g,
        "telephone": /^\d{9}$/g,
        "email": /\w+@\w+\.\w+/g,
        "web": /^(http|https):\/\/\w+\.\w+/g,
        "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
        "date": /^\d{4}-\d{2}-\d{2}$/g,
        "time": /^\d{2}:\d{2}$/g
    }

    for (let i = 0; i < formInputs.length; i++) {

        // SI EXISTE EL ATRIBUTO DATA-VALIDATE DEL ELEMENTO TAG INPUT
        // Y EL STRING VALUE DE INPUT NO CUMPLE CON EL REGEX DE VALIDACIÓN ENTONCES
        // AÑADIMOS LA CLASSE "invalid" AL ELEMENTO HTML TAG INPUT
        if (formInputs[i].dataset.validate && formInputs[i].value.match(validators[formInputs[i].dataset.validate]) == null) {
            formInputs[i].classList.add('invalid');
            validForm = false;

        } else {

            formInputs[i].classList.remove('invalid');
        }
    }

    return validForm;
};