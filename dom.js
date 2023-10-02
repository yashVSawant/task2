// //parentNode
const itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor ='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor ='#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemlist.childNodes);

// //children
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor ='yellow';
  
// //firstChild
// console.log(itemlist.firstChild);

// //firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent= 'hello';

// //lastChild
// console.log(itemlist.lastChild);

// //lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent= 'hello';

const items = document.querySelector('#main-header');
// //nextSibling
//console.log(items.nextSibling);

// // nextElementSibling
//console.log(items.nextElementSibling);

// //previousSibling
// console.log(itemlist.previousSibling);

// // prreviousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color ='green';

// // CreateElement

// // Create a div
const newDiv = document.createElement('div');

// //Add class
newDiv.className ='hello';

// //Add id
newDiv.id ='hello1';

// //add attr
newDiv.setAttribute('title','hello div');

// //create  text code
const newDivText = document.createTextNode('HELLo');

// //Add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
//console.log(container);
//console.log(h1);

//console.log(newDiv);

newDiv.style.fontSize ='30px';
container.insertBefore(newDiv,h1);
//
const newUl = document.createElement('ul');
newUl.className ='list-group-item';
newUl.idName ='item';
const liText = document.createTextNode('HELLo');
newUl.appendChild(liText);
const items1 = document.querySelector('div .list-group');
const li1 = document.querySelector('div li');
items1.insertBefore(newUl,li1);
console.log(li1);
console.log(newUl);