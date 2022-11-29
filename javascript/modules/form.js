
export let form = () => {

    document.dispatchEvent(new CustomEvent('message', {
        detail: {
            text: 'FORM SUCCESSFULLY SENT',
            type: 'success'
        }
    }));

}