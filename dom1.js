var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var filter2 = document.getElementById('description');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
 const newItem2 = document.getElementById('description').value;
 
 //local storge
 //localStorage.setItem(newItem2,newItem );
 let myObject ={
  itemname: newItem2 ,
  description : newItem 
 };
 let myObjSerialize = JSON.stringify(myObject);
 localStorage.setItem('obj',myObjSerialize);

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';
  
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem2+" "+newItem));
  //li.appendChild(document.createTextNode(' '));
  //li.appendChild(document.createTextNode(newItem));

  

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className ='edit edit-danger edit-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  
}




//console.log(listNew[0]);
const items1 = document.querySelectorAll('ul .list-group-item');

const li1 = document.querySelectorAll('ul button');
for(let i=0 ;i<items1.length ;i++){
const newUl = document.createElement('button');
newUl.className ='edit edit-danger edit-sm float-right edit';
newUl.idName ='editId';
const liText = document.createTextNode('edit');
newUl.appendChild(liText);
items1[i].insertBefore(newUl,li1[i]);

}

// createing new input
const container = document.getElementById('addForm');
const h1 = document.getElementById('item');
const input = document.createElement('input');
input.type ='text';
input.className ='form-control mr-2';
input.id ='description';


//container.appendChild(input);
 container.insertBefore(input,h1);


// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  console.log(items[4]);
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var iN = item.childNodes[4];
    console.log(iN);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } 
    else {
      item.style.display = 'none';
    }
  });
}
