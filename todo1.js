const form = document.querySelector("form");
const todo=document.getElementById("todos");
const description =document.getElementById("description");
const addItem = document.getElementById("button");
const remain = document.getElementById("remain");
const complete = document.getElementById("complete");

// function create remaining list
function createList( todoGet, descripGet,IdGet){
    const list=document.createElement('li');
    list.className="list-group-item";
    list.id=IdGet;
    list.appendChild(document.createTextNode(" todo: "));
    list.appendChild(document.createTextNode(todoGet));
    list.appendChild(document.createTextNode(" - description: "));
    list.appendChild(document.createTextNode(descripGet));
    return list;
}
//remain list
function createRemain(list){
    const del = document.createElement('button');
    const done = document.createElement('button');
  
    del.className = 'btn btn-danger btn-sm float-right delete';
    done.className ='done done-danger done-sm float-right done';
  
    del.innerText="X";
    done.innerHTML='<p>&#x2713</p>';
  
    list.appendChild(done);
    list.append(del);
  
    remain.appendChild(list);
}
//Done list
function createDone(list){

    complete.appendChild(list);

}

// upload savedlist
function uploadSavedList(dataObjarr){
    for(let i=0 ; i<dataObjarr.length ;i++){
        
            let todo = dataObjarr[i]['todo'];
            let descrip = dataObjarr[i]['description'];
            let IdVal = dataObjarr[i]['_id'];
            let flag = dataObjarr[i]['flag'];
            if(flag){
              createDone(createList(todo ,descrip ,IdVal));
            }else{
              createRemain(createList(todo ,descrip ,IdVal));
            }
          
            
        }
}

// wait for DOM content loading 
window.addEventListener("DOMContentLoaded",()=>{

    const storage = axios.get("https://crudcrud.com/api/ad2d138593494db3859cde653fbebb74/appointmentData")   
           .then((response)=>{
             uploadSavedList(response.data);
           })
           .catch((err)=>{
             console.log(err);
           })
})

// create an object
function createObject(todo ,description){
    let obj ={
      todo ,
      description,
      flag:false
      };
    return obj;  
}

// events in remain list
remain.addEventListener('click' , e=>{
    if(e.target.classList.contains('delete')){
         
          const li = e.target.parentElement;
          const id = li.id;
          axios.delete(`https://crudcrud.com/api/ad2d138593494db3859cde653fbebb74/appointmentData/${id}`)
               .then(remain.removeChild(li))
               .catch(()=>console.log('error'))
          
      }
      else if(e.target.classList.contains('done')){
        
        var li = e.target.parentElement;
        const todoOfList= li.childNodes[1].textContent;
        const descOfList= li.childNodes[3].textContent;
        const id = li.id;
        axios.put(`https://crudcrud.com/api/ad2d138593494db3859cde653fbebb74/appointmentData/${id}`,{
            "todo":todoOfList,
            "description":descOfList,
            "flag":true
            })
               .then(remain.removeChild(li))
               .then(createDone(createList(todoOfList ,descOfList ,id)))
               .catch(()=>console.log('error'))
    }
})

// add item
addItem.addEventListener('click',e=>{
    e.preventDefault();
    
    const todoGet = todo.value;
    todo.value="";
    const descripGet = description.value;
    description.value="";

    let obj = createObject(todoGet ,descripGet );
    let id;
    axios.post("https://crudcrud.com/api/ad2d138593494db3859cde653fbebb74/appointmentData",obj)   
          .then((response)=>{
            id = response.data['_id'];
            createRemain(createList(todoGet ,descripGet ,id));
          })
          .catch((err)=>{
            console.log(err);
          })
})

