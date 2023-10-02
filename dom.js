const items = document.getElementsByClassName('list-group-item');
//items[4].style.fontWeight ='bold';
const li = document.getElementsByTagName('li');

li[1].style.backgroundColor = 'green';
li[2].style.visibility = "hidden";
const list = document.querySelectorAll('.list-group-item');
list[1].style.color ='green';

const odd = document.querySelectorAll('li:nth-child(odd)');

for (let i=0 ;i<odd.length ;i++){
    odd[i].style.backgroundColor ='green';
}





  