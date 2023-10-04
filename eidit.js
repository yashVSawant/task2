var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//var editList = document.getElementById('items');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeOrEditItem);
//editList.addEventListener('click', editItem);


function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem1 = document.getElementById('name').value;
    var Item1Value = document.getElementById('name');
    Item1Value.value='';
    const newItem2 = document.getElementById('email').value;
    //console.log(newItem2);
    var Item2Value = document.getElementById('email');
    Item2Value.value='';
    const newItem3 = document.getElementById('number').value;
    var Item3Value = document.getElementById('number');
    Item3Value.value='';
   
   //local storge
   //localStorage.setItem(newItem2,newItem );
   let myObject ={
    name: newItem1 ,
    email: newItem2,
    phone: newItem3
   };
   let myObjSerialize = JSON.stringify(myObject);
   localStorage.setItem(newItem2,myObjSerialize);

   const li = document.createElement('li');
   li.className ='list';
   li.appendChild(document.createTextNode('Name:'));
   li.appendChild(document.createTextNode(newItem1));
   li.appendChild(document.createTextNode('email:'));
   li.appendChild(document.createTextNode(newItem2));
   li.appendChild(document.createTextNode('phone no:'));
   li.appendChild(document.createTextNode(newItem3));

   var deleteBtn = document.createElement('button');
   var editBtn = document.createElement('button');
 
   // Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   editBtn.className ='edit edit-danger edit-sm float-right edit';
 
   // Append text node
   deleteBtn.appendChild(document.createTextNode('Delete'));
   editBtn.appendChild(document.createTextNode('edit'));
 
   // Append button to li
   li.appendChild(editBtn);
   li.appendChild(deleteBtn);

   itemList.appendChild(li);
   
}
  //remove
function removeOrEditItem(e){
    if(e.target.classList.contains('delete')){
      
        var li = e.target.parentElement;
        const keyMail = li.childNodes[3].textContent;
        console.log(keyMail);
        localStorage.removeItem(keyMail);
        itemList.removeChild(li);
      
    }
    else if(e.target.classList.contains('edit')){
        var editli = e.target.parentElement;
        const editName = editli.childNodes[1].textContent;
        const editEmail = editli.childNodes[3].textContent;
        const editNumber = editli.childNodes[5].textContent;
        
        localStorage.removeItem(editEmail);
        itemList.removeChild(editli);
        var Item1Value = document.getElementById('name');
        Item1Value.value = editName;
        var Item2Value = document.getElementById('email');
        Item2Value.value=editEmail;
        var Item3Value = document.getElementById('number');
        Item3Value.value =editNumber;
    }
  }

  