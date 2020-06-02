/*const ul = document.querySelector('.items');

//ul.remove();
//ul.firstElementChild.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.lastElementChild.textContent = 'Sasaaa';
//ul.children[1].innerHTML = 'brad';
//ul.lastElementChild.innerHTML = '<h2>Hello</h2>';
//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

*const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background = '#ccc';

    //document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit (e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill in all fields.';

        setTimeout(() => msg.remove(), 4000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}