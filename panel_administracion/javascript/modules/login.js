export let renderLogin = () => {
    
    let login = {
        
        email: "emailprueba@email.com",
        password: "password"
    }

    fetch('http://127.0.0.1:8080/api/admin/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        sessionStorage.setItem('accessToken', data.accessToken);
    }).catch(error => {
        console.log(error);
    });

}
