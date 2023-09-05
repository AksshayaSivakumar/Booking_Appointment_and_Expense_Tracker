const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
  e.preventDefault();
  var name=JSON.stringify(nameInput.value);
  var email=JSON.stringify(emailInput.value);
  localStorage.setItem(name, email);
  var user=JSON.parse(localStorage.getItem(name));
  console.log(user);
}