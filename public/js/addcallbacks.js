let callbacksForm = document.querySelector('.callbacksForm');
let callback = document.querySelector('#callback');


callbacksForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch('/callbacks' , {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json' 
        },
        body: JSON.stringify({
            callback: callback.value,
            
        })
    }).then((res) => res.text().then(() => alert('We will call you back asap! :)')));

})
callback.value = '';