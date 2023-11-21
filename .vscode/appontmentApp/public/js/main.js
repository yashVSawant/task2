const form = document.querySelector("form");
const namee=document.getElementById("name");
const email =document.getElementById("email");
const phone=document.getElementById("number");
const submit = document.getElementById("button");
const ul = document.getElementById("ul");




function createList( Nvalue, Evalue, Pvalue,Ivalue){
  console.log( Nvalue, Evalue, Pvalue,Ivalue)
  const delForm = document.createElement('form');
  delForm.action=`/appointment/delete-appointment/${Ivalue}`;
  const editForm = document.createElement('form');
  editForm.action=`/appointment/edit-appointment/${Ivalue}`;
  const list=document.createElement('li');
  list.className="list";
  list.appendChild(document.createTextNode(" Name: "));
  list.appendChild(document.createTextNode(Nvalue));
  list.appendChild(document.createTextNode(" - email: "));
  list.appendChild(document.createTextNode(Evalue));
  list.appendChild(document.createTextNode(" - phone no: "));
  list.appendChild(document.createTextNode(Pvalue));
  

  const del = document.createElement('button');
  del.type='submit';
  const edit = document.createElement('button');
  edit.type='submit';

  del.className = 'delete';
  edit.className ='edit';

  del.appendChild(document.createTextNode('delete'));
  edit.appendChild(document.createTextNode('edit'));
  delForm.append(del);
  editForm.append(edit);
  list.appendChild(editForm);
  list.append(delForm);
  
  ul.appendChild(list);
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:4000/appointment/appointments")
    .then((appointments) => {
      console.log(appointments.data);
      uploadSavedList(appointments.data)
    })
    .catch((err) => {
      console.error(err);
    });

});

function uploadSavedList(dataObjarr){
      console.log(dataObjarr[0]);
      for(let i=0 ; i<dataObjarr.length ;i++){
          
              let Nvalue = dataObjarr[i]['name'];
              let Evalue = dataObjarr[i]['email'];
              let Pvalue = dataObjarr[i]['phone'];
              let Ivalue = dataObjarr[i]['id'];
            createList(Nvalue ,Evalue ,Pvalue,Ivalue);
              
          }
}

// ul.addEventListener('click' , e=>{
//     if(e.target.classList.contains('delete')){
         
//           const li = e.target.parentElement;
//           const id = li.id;
//           axios.delete(`http://localhost:4000/appointment/appointments/${id}`)
//               //  .then(ul.removeChild(li))
//               //  .catch(()=>console.log('error'))
          
//       }
//       else if(e.target.classList.contains('edit')){
        
//         var li = e.target.parentElement;
//         const valueN= li.childNodes[1].textContent;
//         const valueE= li.childNodes[3].textContent;
//         const valueP= li.childNodes[5].textContent;
//         const id = li.id;
//         namee.value= valueN;
//         email.value= valueE;
//         phone.value= valueP;
//         axios.delete(`https://crudcrud.com/api/6a76a61dce0b4c0eb2aae617da265893/appointmentData/${id}`)
//                .then(ul.removeChild(li))
//                .catch(()=>console.log('error'))
//     }
// })

// function createObject(nameValue ,emailValue ,phoneValue){
//       let obj ={
//         nameValue ,
//         emailValue,
//         phoneValue
//         };
//       return obj;  
// }

submit.addEventListener('click',e=>{
    //e.preventDefault();
    
    const nameValue = namee.value;
    
    const emailValue = email.value;
    
    const phoneValue =  phone.value;
    
    createList(nameValue ,emailValue ,phoneValue,1);
    // let obj = createObject(nameValue ,emailValue ,phoneValue);
    // let id;
    // axios.post("https://crudcrud.com/api/6a76a61dce0b4c0eb2aae617da265893/appointmentData",obj)   
    //       .then((response)=>{
    //         id = response.data['_id'];
    //         createList(nameValue ,emailValue ,phoneValue,id);
    //       })
    //       .catch((err)=>{
    //         console.log(err);
    //       })
    
    

});

