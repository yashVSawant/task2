var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


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
    var Item2Value = document.getElementById('number');
    Item2Value.value='';
   
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
   li.appendChild(document.createTextNode('Name:'+newItem1+" "+'phone no:'+newItem3+'  email:'));
   li.appendChild(document.createTextNode(newItem2));

   var deleteBtn = document.createElement('button');
   //var editBtn = document.createElement('button');
 
   // Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   //editBtn.className ='edit edit-danger edit-sm float-right edit';
 
   // Append text node
   deleteBtn.appendChild(document.createTextNode('Delete'));
   //editBtn.appendChild(document.createTextNode('edit'));
 
   // Append button to li
   //li.appendChild(editBtn);
   li.appendChild(deleteBtn);

   itemList.appendChild(li);
   
}
  //remove
function removeItem(e){
    if(e.target.classList.contains('delete')){
      
        var li = e.target.parentElement;
        const keyMail = li.childNodes[1].textContent;
        
        console.log(keyMail);
        //console.log("yash");
        localStorage.removeItem(keyMail);
        itemList.removeChild(li);
      
    }
  }
  