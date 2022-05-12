{
  let id = 1;
async function getCallbacks(){
  return await fetch('/callbacks')
    .then((res) => res.json())
    .then((data) => data)
}

document.addEventListener('DOMContentLoaded', async function(){
   let callbacks = await getCallbacks();
   let  callbackList = document.querySelector('.callback-list');
   callbackList.innerHTML = '';
   callbacks.forEach(callback => {
    let callbackHTML = `
          <tr>
          <th>${id++} <input class="id" value="${callback.id}" type="hidden"/></th>
          <td>${callback.callback}</td>
          <td>${callback.date}</td>
          <td><button type="button" class="btn btn-link deleteBtn p-0">X</button></td>
        </tr>`
        callbackList.insertAdjacentHTML('beforeend', callbackHTML);
   })
})
}