const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
//const itemlist=document.getElementById('users')


myForm.addEventListener('submit', onSubmit);
  
function onSubmit(e)
{
  e.preventDefault();
 
    const name=nameInput.value
    const email=emailInput.value
  
    let obj={
      name,
      email
    }
  
  localStorage.setItem(obj.email,JSON.stringify(obj));
 showonscreen(obj);
  }
//  var name1=JSON.parse(name);
//  var email1=JSON.parse(email);
function showonscreen(obj)
{
  const parentElem =document.getElementById('users')
  const childElem=document.createElement('li')
  childElem.textContent=obj.name+ '-' +obj.email
  const deleteBtn=document.createElement('input')
  deleteBtn.type='button'
  deleteBtn.value='delete '

  const editbutton=document.createElement('input')
  editbutton.type='button'
  editbutton.value='edit '
 
  deleteBtn.onclick=()=>{
    localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
  }
    editbutton.onclick=()=>{
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
      nameInput.value=obj.name
      emailInput.value=obj.email
    }
  
  childElem.appendChild(deleteBtn)
  childElem.appendChild(editbutton)
  parentElem.appendChild(childElem)
  
}
  