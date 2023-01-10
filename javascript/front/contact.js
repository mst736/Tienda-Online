export let renderContact = () => {

    let formsubmittion = document.querySelector('.contact-button');

    if(formsubmittion){
      
        formsubmittion.addEventListener("click", event => {        

            event.preventDefault();
            console.log("blalballa");
            let form = document.querySelector('form');
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            let url= form.dataset.url
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            })
            // .then(data => {
            //     sessionStorage.setItem('accessToken', data.accessToken);
            // }).catch(error => {
            //     console.log(error);
            // });
    
        });
    }
    
}
