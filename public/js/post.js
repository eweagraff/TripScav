async function signupFormHandler(event) {
    event.preventDefault();

    const site = document.querySelector('#email-signup').value.trim();
 

    if (site) {
        const response = await fetch('/api/post/search', {
            method: 'POST',
            body: JSON.stringify({
                site,
                
                
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


           

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);