const form = document.getElementById("Form"); 
const nameIn = document.getElementById("name"); 
const emailIn = document.getElementById("email"); 
const ageIn = document.getElementById("age"); 
const passIN = document.getElementById("password"); 
const confpassIN = document.getElementById("confpassword"); 

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const passError = document.getElementById("passwordError");
const confpassError = document.getElementById("confpasswordError");

form.addEventListener("submit" , function (event){
    event.preventDefault(); 
    console.log("done"); 


let isvalid = true ; 
nameError.textContent = "";
emailError.textContent = "";
ageError.textContent = "";
passError.textContent = "";
confpassError.textContent = "";

if (nameIn.value.trim() === ""){
    nameError.textContent= "Enter your name";
    isvalid = false ; 
}
if (emailIn.value.trim() === ""){
    emailError.textContent= "Enter your email";
    isvalid = false ; 
}else if (!(emailIn.value.includes('@'))){
    emailError.textContent = "check your email"; 
    isvalid=false; 
}else if (!(emailIn.value.includes('.com'))){
    emailError.textContent = "check your email"; 
    isvalid=false; 
}

if (ageIn.value.trim() === ""){
    ageError.textContent= "Enter your age";
    isvalid = false ; 
}else if (isNaN(ageIn.value)){
    ageError.textContent = "only numbers"; 
    isvalid=false; 
}else if (ageIn.value.trim() < 18){
    ageError.textContent = "under the required age !!"; 
    isvalid=false;
}

if (passIN.value.trim() === ""){
    passError.textContent= "Enter your password";
    isvalid = false ; 
}else if (passIN.value.length < 8 ){
    passError.textContent = "We need more characters"; 
    isvalid=false;
}

if (confpassIN.value.trim() === ""){
    confpassError.textContent= "confrim  your password";
    isvalid = false ; 
}else if (confpassIN.value !== passIN){
    confpassError.textContent = "the password not match";
    isvalid=false;
}
if (isvalid){
    alert("you can submit")
}

});