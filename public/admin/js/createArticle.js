

let addArticleBtn = document.querySelector('.addArticleBtn');
let createBtn = document.querySelector('#v-pills-create-tab');
let createForm =  document.querySelector('.createForm');
let title = document.querySelector('#title');
let country = document.querySelector('#country');
let imgURL = document.querySelector('#image');
let text = document.querySelector('#text');
let longDescription = document.querySelector('#longDescription');




addArticleBtn.addEventListener('click', ()=>{
    createBtn.click();
})

createForm.addEventListener('submit', function(e)  {
    e.preventDefault();
    fetch('/articles', {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            
            title: title.value,
            country: country.value,
            text: text.value,
            description: text.value,
            longDescription: longDescription.value,
            imgURL:  imgURL.value
        })
    }).then((res) => res.text()).then(()=> window.history.go())
})

