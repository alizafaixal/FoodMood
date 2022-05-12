let inquiries = document.querySelector('.inquiry-list');

inquiries.addEventListener('click',  function(e) {
    if(e.target.classList.contains('deleteBtn')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('/inquiries/' +id , {
            method : 'DELETE'
        }).then((res) => res.text()).then(() => window.history.go());
    }
})