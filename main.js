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
  deleteBtn.value='delete'
  deleteBtn.onclick=()=>{
    localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
  }
  childElem.appendChild(deleteBtn)
  parentElem.appendChild(childElem)
}
  