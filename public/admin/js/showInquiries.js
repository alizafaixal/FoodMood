{
  let id = 1;
async function getInquiries(){
   return await fetch('/inquiries')
    .then((res) => res.json())
    .then((data) => data);
}


document.addEventListener('DOMContentLoaded', async function(){
    let inquiries = await getInquiries();
    let inquiryList = document.querySelector('.inquiry-list');
    inquiryList.innerHTML = ''; 

    inquiries.forEach((inquiry) => {
        let inquiryHTML = `
        <tr>
        <th>${id++} <input type="hidden" class="id" value="${inquiry.id}" /></th>
        <td>${inquiry.fname}</td>
        <td>${inquiry.lname}</td>
        <td>${inquiry.email}</td>
        <td>${inquiry.phone}</td>
        <td>${inquiry.inquiry}</td>
        <td><button type="button" class="btn btn-link deleteBtn p-0">X</button></td>
      </tr>`
      inquiryList.insertAdjacentHTML('beforeend', inquiryHTML);
    })
})
}