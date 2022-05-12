let id = 1;
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
        <tr>
        <th >${id++} <input type="hidden" class="id" value ="${article.id}" /></th>
        <td>${article.title}</td>
        <td>${article.date}</td>
        <td>${article.country}</td>
        <td><button type="button" class="btn btn-link p-0 editBtn">Edit</button></td>
        <td><button type="button" class="btn btn-link deleteBtn p-0">X</button></td>
      </tr>`
      articleList.insertAdjacentHTML('beforeend', articleHTML);
    })
})


