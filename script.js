var form=document.querySelector('#form');



form.addEventListener("submit",(e) =>{
    e.preventDefault();

    checkInput();
    
} )

function checkInput(){
    var name=document.querySelector('#firstname');
    var lastName=document.querySelector('#lastname');
    var email=document.querySelector('#email');
    var passWord=document.querySelector('#password');

    /* inputs */
    var nameValue=name.value.trim();
    var lastNameValue=lastName.value.trim();
    var emailValue=email.value.trim();
    var passwordValue=passWord.value.trim();


    if(nameValue === ""){
        setErrorFor(name,"First Name cannot be Empty")
    }
    if(lastNameValue===""){
        setErrorFor(lastName,"Last Name cannot be empty")
    }
    if(emailValue===""){
        setErrorFor(email,"Email cannot be empty")
    }else if(!emailIsValid(emailValue)){
        setErrorFor(email,"Looks like this is not an email")
    }
    if(passwordValue===""){
        setErrorFor(passWord,"Password cannot be empty")
    }else if(passwordValue.length<5){
        setErrorFor(passWord,"Password has to be more than 5")
    }

}

function setErrorFor(input,message){
    var formOper=input.parentElement;
    var errMsg=formOper.querySelector('small');
    var input=formOper.querySelector('input')

    errMsg.innerHTML=message;
    formOper.className="form-group error"
    input.className="form-control error"
    /* input.className="form-control row" */

}  
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
      }