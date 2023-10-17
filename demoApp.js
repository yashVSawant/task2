const form = document.querySelector("form");
const namee=document.getElementById("name");
const email =document.getElementById("email");
const phone=document.getElementById("number");
const button = document.getElementById("button");
const ul = document.getElementById("ul");


function createList( Nvalue, Evalue, Pvalue,Ivalue){
  const list=document.createElement('li');
  list.className="list-group-item";
  
  list.appendChild(document.createTextNode(" Name: "));
  list.appendChild(document.createTextNode(Nvalue));
  list.appendChild(document.createTextNode(" email: "));
  list.appendChild(document.createTextNode(Evalue));
  list.appendChild(document.createTextNode(" phone no: "));
  list.appendChild(document.createTextNode(Pvalue));
  list.appendChild(document.createTextNode(" Id: "));
  list.appendChild(document.createTextNode(Ivalue));

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
function checkCloud(){

     const storage = axios.get("https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData")   
            .then((response)=>{
              console.log(response.data);
              uploadSavedList(response.data);
            })
            .catch((err)=>{
              console.log(err);
            })
}

function uploadSavedList(dataObjarr){
      for(let i=0 ; i<dataObjarr.length ;i++){
          
              let value = dataObjarr[i];
             
              console.log(value['nameValue']); 
              
              let Nvalue = dataObjarr[i]['nameValue'];
              let Evalue = dataObjarr[i]['emailValue'];
              let Pvalue = dataObjarr[i]['phoneValue'];
              let Ivalue = dataObjarr[i]['_id'];
            createList(Nvalue ,Evalue ,Pvalue,Ivalue);
              
          }
}


checkCloud();


ul.addEventListener('click' , e=>{
    if(e.target.classList.contains('delete')){
         
          var li = e.target.parentElement;
          //console.log(li.id);
          const id = li.childNodes[7].textContent;
          ul.removeChild(li);
          axios.delete(`https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData/${id}`);
          
          
        
      }
      else if(e.target.classList.contains('edit')){
        
        var li = e.target.parentElement;
        const valueN= li.childNodes[1].textContent;
        const valueE= li.childNodes[3].textContent;
        const valueP= li.childNodes[5].textContent;
        const id = li.childNodes[7].textContent;
        ul.removeChild(li);
        axios.delete(`https://crudcrud.com/api/1b58b5a411af4f0aa2408a4964be048f/appointmentData/${id}`);
        namee.value= valueN;
        email.value= valueE;
        phone.value= valueP;
      
    }
})


    
button.addEventListener('click',e=>{
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
           
          })
          .catch((err)=>{
            console.log(err);
          })
    
    createList(nameValue ,emailValue ,phoneValue,id);

});

