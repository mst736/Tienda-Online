
export let plus_minus_button = () => {

    let buttonMinus = document.querySelector('product-quantity-selector-minus button');
    let buttonValue = document.querySelector('product-quantity-selector-value input');
    let buttonPlus = document.querySelector('product-quantity-selector-plus button');

    buttonMinus.addEventListener("click", () => {
                
            if (!event.target.matches('product-quantity-selector-value input')) return;
            console.time('bubbling');
            event.preventDefault();
            const element = document.getElementById(event.target.dataset.target);
            element.scrollIntoView();
            console.timeEnd('bubbling');

            if(buttonMinus) {

                buttonValue.value = parseInt(buttonValue.value) - 1;

                if (buttonValue.value <= 1) {

                    buttonValue.value = 1;
    
                } else if (buttonValue.value > 10) {
    
                    buttonValue.value = 10;
    
                } else {
    
                    return buttonValue.value;
    
                }
                }


                
    });



    buttonPlus.addEventListener("click", () => {
                
        if(buttonPlus) {

            buttonValue.value = parseInt(buttonValue.value) + 1;

            if (buttonValue.value <= 1) {

                buttonValue.value = 1;

            } else if (buttonValue.value > 10) {

                buttonValue.value = 10;

                alert("Has llegado al máximo de " + buttonValue.value + " servicios.")

            } else {

                return buttonValue.value;

            }
        }
    });

}