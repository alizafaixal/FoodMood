let contactForm = document.querySelector('.contactForm');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let inquiry = document.querySelector('#inquiry');
let response = document.querySelector('#response');
let modal = document.querySelector('#myModal');
let submitBtn = document.querySelector('.submitBtn');

let modalHTML = ``
  
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
        fetch('/inquiries', {
            method : 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                fname : fname.value,
                lname:lname.value,
                email:email.value,
                phone: phone.value,
                inquiry: inquiry.value 
            })
        }).then((res) => res.text().then(() =>{
            fname.value = ''
            lname.value = ''
            email.value = ''
            phone.value = ''
            inquiry.value = '' 
            inquiry.rows = 7
            response.innerHTML = 'Inquiry received'
        }))
})