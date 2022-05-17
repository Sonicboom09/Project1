const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const cpassword = document.getElementById('cpassword')
const phone = document.getElementById('phone')
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

form.addEventListener('submit', (e) => {
  let messages = []
  
  if (password.value.length <= 6) {
    messages.push('*Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('*Password must be less than 20 characters')
  }

  if (cpassword.value != password.value) {
      messages.push('*Password must match')
  }

  if (isNaN(phone.value) == false){
    messages.push("*Value Entered must be a 10 digit Integer")
  }

  if (phone.value.length < 10 || phone.value.length > 10){
  messages.push("*Value Entered must be a 10 digit Integer")

  if(password.value.match(passw)){
      messages.push("*Password format must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }  
  }
})