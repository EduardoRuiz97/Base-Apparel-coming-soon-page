let userInput = document.querySelector(".emailField");


userInput.addEventListener("click", (event)=>{
 
  if (event.srcElement.nodeName == "IMG" || event.srcElement.nodeName == "BUTTON"){
    verifyEmail();
  } 
});


function verifyEmail () {
  let email = document.querySelector(".userEmail[type='email']");
  let alertText = document.querySelector(".alert");
  let alertBorder = document.querySelector(".emailField");
  let alertIcon = document.querySelector(".wrongEmail");

  let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regEx.test(email.value) == true) {
    alertText.classList.remove("show");
    alertBorder.classList.remove("wrongData");
    alertIcon.classList.remove("show");
    email.value =" ";
  } else {
    alertText.classList.add("show");
    alertBorder.classList.add("wrongData");
    alertIcon.classList.add("show");
    email.value =" ";
  }
  
}

