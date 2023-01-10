export let renderNotification = () => {

    let notification = document.getElementById("notification");
    let notificationText = document.getElementById("notification-message");

    document.addEventListener("SuccesMessage", (event =>{

       
        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);
        notification.classList.add("active");

        setTimeout(() => {
            notification.classList.remove("active");
            notification.classList.remove(event.detail.type);
        }, 3800);
    }));

    document.addEventListener("ErrorMessage", (event =>{
       
        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);
        notification.classList.add("active");

        // setTimeout(() => {
        //     notification.classList.remove("active");
        //     notification.classList.remove(event.detail.type);
        // }, 3800);
    }));



}
