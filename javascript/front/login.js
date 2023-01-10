export let renderLogin = () => {

    let formsubmittion = document.querySelector('.send-login-button');

    if(formsubmittion){
      
        formsubmittion.addEventListener("click", event => {        

            event.preventDefault();

            let form = document.querySelector('form');
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            fetch('http://127.0.0.1:8080/api/auth/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            }).then(data => {
                sessionStorage.setItem('accessToken', data.accessToken);
            }).catch(error => {
                console.log(error);
            });
    
        });
    }
    
}
