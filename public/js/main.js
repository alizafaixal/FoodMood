async function getArticles(){
    return await fetch('/articles')
    .then((res) => res.json())
    .then((data) => data);
}


document.addEventListener('DOMContentLoaded', async function(){
    let articles = await getArticles();
    let articleList = document.querySelector('.articles-list');
    articleList.innerHTML = '';
    articles.forEach((article) =>{
        let articleHTML = ` 
        <div class="col-lg-4 col-md-6 col-sm-12  mt-3">
                <div class="card" >
                    <img src="${article.imgURL}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                      <h5 class="card-title">${article.title}</h5>
                      <p class="card-text">${article.text}</p>
                      <a href="/blog?id=${article.id}" class="btn btn-primary">View details</a>
                    </div>
                  </div>
              </div>`
      articleList.insertAdjacentHTML('beforeend', articleHTML);
    })
})