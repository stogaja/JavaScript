//fetching data from index.html
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


const signInForm = document.querySelector('#signInForm');
const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const val3 = document.querySelector('#val3');
const val4 = document.querySelector('#val4');
const val5 = document.querySelector('#val5');

let msG = document.querySelector('.msG');

/*
output1 = val1;
output2 = val2.value;
output3 = val3.value;
output4 = val4.value;
output5 = val5.value;
*/

//functionality


signInForm.addEventListener('submit', onSignIn);


function onSignIn (e) {
  e.preventDefault();

  if(val1.value === '' || val2.value === '' || val3.value === '' || val4.value === '' || val5.value === '') {
		msG.classList.add('error');
		msG.innerHTML = 'Please fill in all the fields.';

    setTimeout(() => msG.remove(), 3000);
    
  }else{

    val1.value = '';
    val2.value = '';
    val3.value = '';
    val4.value = '';
    val5.value = '';
    
    return window.location.href='info.html';

  }
}

output1 = document.querySelector('A');
output2 = document.querySelector('B');
output3 = document.querySelector('C');
output4 = document.querySelector('D');
output5 = document.querySelector('E');

let sum;

//output2.innerHTML = val.value