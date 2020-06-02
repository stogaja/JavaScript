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
//TRAVERSING THE DOM
const itemList = document.querySelector('#items');

//parentnode

itemList.parentNode.style.backgroundColor = '#ccc';

//console.log(itemList.parentNode.parentNode)


//parent element ===parent element

//CREATE ELEMENT

//Create a new div
var newDiv = document.createElement('div');

//add a class
newDiv.className = 'hello';

//add an ID
newDiv.id = 'hello1';


//add an attr
newDiv.setAttribute('title', 'Hii div');

//create a text node
var newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container =  document.querySelector('header .container');

var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);