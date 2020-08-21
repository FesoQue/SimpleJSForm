//as far as selectors goes, we have:
//single element selectors
// const form = document.getElementById("my-form");
// console.log(form);

// const container = document.querySelector(".container");
// console.log(container);


//multiple selectors

// console.log(document.querySelectorAll('.item'));

// const ul = document.querySelector('.item')

// ul.remove();
// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "hello"; 
// ul.children[2].textContent = "Que";
// ul.lastElementChild.innerHTML = '<h1>Hello World</h1>';    

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function(clickbtn){
//     clickbtn.preventDefault();
//     console.log(clickbtn.target.className);
// });

// const content = document.querySelector('.txt-content');
// content.style.background = 'lightgray';
// content.style.padding = '7px 3px';

// const btnOne = document.querySelector('#cta-btn');
// btnOne.addEventListener('mouseover', function(clickBtn){
//     clickBtn.preventDefault();
//     document.querySelector('.txt-content').style.background = "dodgerblue";
// });  

 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name-input');
 const emailInput = document.querySelector('#email-input');
 const msg = document.querySelector('.message');
 const usersList = document.querySelector('#users');

 myForm.addEventListener('submit', function(onSubmit){
    onSubmit.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';

      setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        usersList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
 })