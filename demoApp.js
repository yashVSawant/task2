var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
console.log('good');
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem1 = document.getElementById('name').value;
    var Item1Value = document.getElementById('name');
    Item1Value.value='';
    const newItem2 = document.getElementById('email').value;
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
   li.appendChild(document.createTextNode('Name:'+newItem1+" "+'email:'+newItem2+'phone no:'+newItem3));
   itemList.appendChild(li);
   
}
  