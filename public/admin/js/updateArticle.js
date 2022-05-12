{
    let updateBtn = document.querySelector('#v-pills-update-tab');
    let articleBlock = document.querySelector('.articles-list');
    let updateTitle = document.querySelector('#updateTitle');
    let updateText = document.querySelector('#updateText');
    let updateForm = document.querySelector('.updateForm');
    let id;
   

    articleBlock.addEventListener('click', async function(e){
        if(e.target.classList.contains('editBtn')){
             id = e.target.parentNode.parentNode.querySelector('.id').value;
             let article = await getArticle(id);
             updateTitle.value = article.title;
             updateText.value = article.text;
            updateBtn.click();
           
        }
    })

    updateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        fetch('/articles/' +id, {
            method : 'PUT',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                title: updateTitle.value,
                text:  updateText.value
            })
        }).then((res) => res.text().then(() => window.history.go()));
    })
}


async function getArticle(id){
    return await fetch('/articles/'+ id)
    .then((res) => res.json())
    .then((data) => data);
}