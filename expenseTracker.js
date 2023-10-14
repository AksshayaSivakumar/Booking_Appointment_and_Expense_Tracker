const myForm = document.getElementById('my-form');
const typeInput=document.getElementById('type');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const dateInput=document.getElementById('date')


myForm.addEventListener('submit', onSubmit);
  
function onSubmit(e)
{
  e.preventDefault();
 
    const type=typeInput.value
    const name=nameInput.value
    const amount=amountInput.value
    const date=dateInput.value
    let obj={
      type,
      name,
      amount,
      date
    }

  
  //localStorage.setItem(obj.amount,JSON.stringify(obj));
   axios.post("https://crudcrud.com/api/1d61089c276a4cdc952a33f3bea0cb1b/expensetracker",obj)
      .then((response)=>{
   //axios.showonscreen(response.data);
   console.log(response);
   }) 
 showonscreen(obj);
 document.getElementById('my-form').reset();
  }
//  var name1=JSON.parse(name);
//  var email1=JSON.parse(email);
function showonscreen(obj)
{
  const parentElem =document.getElementById('users')
  const childElem=document.createElement('li')
  childElem.textContent=obj.type+ ' - '+obj.name + ' - '+ '$' + obj.amount + ' - '+ obj.date

  const deleteBtn=document.createElement('input')
  deleteBtn.type='button'
  deleteBtn.value='delete '

  const editbutton=document.createElement('input')
  editbutton.type='button'
  editbutton.value='edit '
 
  deleteBtn.onclick=()=>{
    localStorage.removeItem(obj.amount)
    parentElem.removeChild(childElem)
    
  }
    editbutton.onclick=()=>{
      localStorage.removeItem(obj.amount)
      parentElem.removeChild(childElem)
      typeInput.value=obj.type
      nameInput.value=obj.name
      amountInput.value=obj.amount
      dateInput.value=obj.date
    }
  
  childElem.appendChild(deleteBtn)
  childElem.appendChild(editbutton)
  parentElem.appendChild(childElem)
  
}
  