let callbacks = document.querySelector('.callback-list');

callbacks.addEventListener('click' , function(e) {
    if(e.target.classList.contains('deleteBtn')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('/callbacks/' +id , {
            method : 'DELETE'
        }).then((res) => res.text()).then(() => window.history.go());
    }
})