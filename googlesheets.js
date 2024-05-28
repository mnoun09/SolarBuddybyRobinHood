
const scriptURL = 'https://script.google.com/macros/s/AKfycbwKR4xx372B_E9CuL1nUcuvXiUN-1vNKWODEImVC_m8BBMX6DB1RFrhlMXJYNBmZNfI/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})