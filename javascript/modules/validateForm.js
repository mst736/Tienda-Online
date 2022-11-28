export let validateForm = formInputsVal => {

    let formInputsVal = document.querySelectorAll('.form-element-input input');

    console.log(formInputsVal);

    let validForm = true;
   
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

    for (let i = 0; i < formInputsVal.length; i++) {

        if (formInputsVal[i].dataset.validate && formInputsVal[i].value.match(validators[formInputsVal[i].dataset.validate]) == null) {
            formInputsVal[i].classList.add('invalid');
            validForm = false;
        }else{
            formInputsVal[i].classList.remove('invalid');
        }
    }

    return validForm;
};