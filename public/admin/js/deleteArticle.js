let articles = document.querySelector('.articles-list');

articles.addEventListener('click' , function(e){
    if(e.target.classList.contains('deleteBtn')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('/articles/' + id , {
            method: 'DELETE'
        }).then((res) => res.text()).then(() => window.history.go());
    }
})