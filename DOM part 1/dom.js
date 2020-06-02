//examine document object

//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);//returns an array of everything in the document

//console.log(document.forms);


//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));

//const headerTitle =document.getElementById('header-title');

//const header =document.getElementById('main-header');

//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'goodbye';
//headerTitle.innerHTML = '<h3>am steve</h3>';

//header.style.borderBottom = '3px solid black';


//SELECTING ELEMENTS BY CLASS NAMES
/*const items = document.getElementsByClassName('list-group-item');

items[2].textContent = 'hello 2';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'yellow';

//items.style.backgroundColor = 'lightgrey';

for (var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}*/

/*GET ELEMENT BY TAGNAME*/
/*const li = document.getElementsByTagName('li');

li[2].textContent = 'hello 2';
li[2].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'yellow';

//items.style.backgroundColor = 'lightgrey';

for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}*/

/*QUERY SELECTOR *//*
const header = document.querySelector('#main-header');

header.style.borderBottom = '4px solid grey';

const input = document.querySelector('input');

input.placeholder = 'Add an item';

const submit = document.querySelector('input[type="submit"]');

submit.value = 'SEND';

*/
/*QUERY SELECTOR ALL*

const titles = document.querySelectorAll('.title');

titles[0].textContent = 'Hello'*/

const headerTitle = document.getElementById('header-title');

headerTitle.textContent = 'helloooo';

const header = document.getElementsByClassName('title');



for (i = 0; i < header.length; i++){
    header[i].textContent = 'i pray it works';
}

const li = document.getElementsByTagName('li');

for (b = 0; b < li.length; b++) {
    li[b].textContent = 'itemssssssssssssss';
    li[b].style.backgroundColor = '#f4f4f4';
}

const header1 = document.querySelector('#main-header');

header1.style.borderBottom = '5px solid black';

const lii = document.querySelectorAll('li');

lii[0].textContent = 'item one of four';
lii[0].style.borderBottom = '3px solid black';

lii[1].textContent = 'item two of four';
lii[1].style.borderBottom = '3px solid black';

lii[2].textContent = 'item three of four';
lii[2].style.borderBottom = '3px solid black';

lii[3].textContent = 'item four of four';
lii[3].style.borderBottom = '2px solid black';