const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const itemlist=document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
  e.preventDefault();

  var name=JSON.stringify(nameInput.value);
  var email=JSON.stringify(emailInput.value);
  localStorage.setItem(name, email);
 var name1=JSON.parse(name);
 var email1=JSON.parse(email);
  var li=document.createElement('li')

li.className='list-group-item'
li.appendChild(document.createTextNode(name1))
li.appendChild(document.createTextNode(" - "))
li.appendChild(document.createTextNode(email1))
itemlist.appendChild(li)
}
