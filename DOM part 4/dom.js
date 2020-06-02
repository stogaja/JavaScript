var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit events
form.addEventListener('submit', addItem);

//listen for delete clicks
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add a class name to the li
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create a dellete button element
    var deleteBtn = document.createElement('button');
    
    //add classes to delete
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //apend button to li
    li.appendChild(deleteBtn);

    //append li to the list
    itemList.appendChild(li);

}

//remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?  (:')) {
            var li = e.target.parentElement;

            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e) {
    //convert to lowercase
    var text = e.target.value.toLoweCase();

    //get li
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}
