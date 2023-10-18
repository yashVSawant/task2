const form = document.querySelector("form");
const namee=document.getElementById("name");
const email =document.getElementById("email");
const phone=document.getElementById("number");
const submit = document.getElementById("button");
const ul = document.getElementById("ul");


function createList( Nvalue, Evalue, Pvalue,Ivalue){
  const list=document.createElement('li');
  list.className="list-group-item";
  list.id=Ivalue;
  list.appendChild(document.createTextNode(" Name: "));
  list.appendChild(document.createTextNode(Nvalue));
  list.appendChild(document.createTextNode(" email: "));
  list.appendChild(document.createTextNode(Evalue));
  list.appendChild(document.createTextNode(" phone no: "));
  list.appendChild(document.createTextNode(Pvalue));
  

  const del = document.createElement('button');
  const edit = document.createElement('button');

  del.className = 'btn btn-danger btn-sm float-right delete';
  edit.className ='edit edit-danger edit-sm float-right edit';

  del.appendChild(document.createTextNode('delete'));
  edit.appendChild(document.createTextNode('edit'));

  list.appendChild(edit);
  list.append(del);

  ul.appendChild(list);
}
window.addEventListener("DOMContentLoaded",()=>{

     const storage = axios.get("https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData")   
            .then((response)=>{
              console.log(response.data);
              uploadSavedList(response.data);
            })
            .catch((err)=>{
              console.log(err);
            })
})

function uploadSavedList(dataObjarr){
      for(let i=0 ; i<dataObjarr.length ;i++){
          
              let Nvalue = dataObjarr[i]['nameValue'];
              let Evalue = dataObjarr[i]['emailValue'];
              let Pvalue = dataObjarr[i]['phoneValue'];
              let Ivalue = dataObjarr[i]['_id'];
            createList(Nvalue ,Evalue ,Pvalue,Ivalue);
              
          }
}

ul.addEventListener('click' , e=>{
    if(e.target.classList.contains('delete')){
         
          const li = e.target.parentElement;
          const id = li.id;
          ul.removeChild(li);
          axios.delete(`https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData/${id}`);
          
          
        
      }
      else if(e.target.classList.contains('edit')){
        
        var li = e.target.parentElement;
        const valueN= li.childNodes[1].textContent;
        const valueE= li.childNodes[3].textContent;
        const valueP= li.childNodes[5].textContent;
        const id = li.id;
        ul.removeChild(li);
        axios.delete(`https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData/${id}`);
        namee.value= valueN;
        email.value= valueE;
        phone.value= valueP;
      
    }
})


    
submit.addEventListener('click',e=>{
    e.preventDefault();
    
    const nameValue = namee.value;
    namee.value="";
    const emailValue = email.value;
    email.value="";
    const phoneValue =  phone.value;
    phone.value="";

    let obj ={
       nameValue ,
       emailValue,
       phoneValue
       };
    let id;
    axios.post("https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData",obj)   
          .then((response)=>{
            console.log(response.data['_id']);
            id = response.data['_id'];
            createList(nameValue ,emailValue ,phoneValue,id);
          })
          .catch((err)=>{
            console.log(err);
          })
    
    

});

