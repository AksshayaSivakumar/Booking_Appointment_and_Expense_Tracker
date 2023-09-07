const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const itemlist=document.getElementById('users')

myForm.addEventListener('submit', onSubmit);
itemlist.addEventListener('click',removeitem);

  
function onSubmit(e)
{
  e.preventDefault();
  var name=JSON.stringify(nameInput.value);
  var email=JSON.stringify(emailInput.value);
  
  localStorage.setItem(name, email);
  
//  var name1=JSON.parse(name);
//  var email1=JSON.parse(email);
  var li=document.createElement('li')
  li.className='list-group-item'
  


li.appendChild(document.createTextNode(name))
li.appendChild(document.createTextNode(" - "))
li.appendChild(document.createTextNode(email))

var deleteBtn=document.createElement('button')

deleteBtn.className='btn btn-danger btn-sm float-right delete mr-3'
deleteBtn.appendChild(document.createTextNode('Delete'))
li.appendChild(deleteBtn);
itemlist.appendChild(li)
}

function removeitem(e)
{
  
  if(e.target.classList.contains('delete'))
  {
var li=e.target.parentElement
itemlist.removeChild(li);
localStorage.removeItem(JSON.stringify(nameInput.value));

  }
}
