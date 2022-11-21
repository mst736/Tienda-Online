
export let plus_minus_button = () => {

    let buttonMinus = document.querySelector('.product-quantity-selector-minus button');
    let buttonValue = document.querySelector('.product-quantity-selector-value input');
    let buttonPlus = document.querySelector('.product-quantity-selector-plus button');

    buttonMinus.addEventListener("click", () => {
                
        if(buttonMinus) {

            buttonValue.value = buttonValue.value - 1;

            if (buttonValue.value < 0) {

                buttonValue.value = 0;
            }

            
        }
    });

    buttonPlus.addEventListener("click", () => {
                
        if(buttonPlus) {

            buttonValue.value = buttonValue.value + 1;

            if (buttonValue.value < 0) {

                buttonValue.value = 0;
            }

            
        }
    });

}
