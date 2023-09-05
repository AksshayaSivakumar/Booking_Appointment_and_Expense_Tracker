const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
  e.preventDefault();

  let user={
    name1:"Divya",
    email1:"divya@gmail.com",

   name2:"Akss",
   email2:"akss@gmail.com"
  };
  var details=JSON.stringify(user);
  
  localStorage.setItem("users",details);
  //var user=JSON.parse(localStorage.getItem(name));
  console.log(details);
  
}