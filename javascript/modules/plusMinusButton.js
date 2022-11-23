
export let plusMinusButton = () => {

    let buttonMinuses = document.querySelectorAll('.product-quantity-selector-minus button');
    let buttonPluses = document.querySelectorAll('.product-quantity-selector-plus button');

    buttonMinuses.forEach(buttonMinus => {

        buttonMinus.addEventListener("click", () => {
            
            let amount = buttonMinus.closest('.product-quantity-selector').querySelector('input');

            if (amount.value > 1) {

                amount.value--;
            }
        });
    });


    buttonPluses.forEach(buttonPlus => {

        buttonPlus.addEventListener("click", () => {

            let amount = buttonPlus.closest('.product-quantity-selector').querySelector('input');

            amount.value++;

        });
    });
}