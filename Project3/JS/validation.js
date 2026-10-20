const form = document.getElementById("Form"); 
const nameIn = document.getElementById("name"); 
const emailIn = document.getElementById("email"); 
const ageIn = document.getElementById("age"); 
const passIN = document.getElementById("password"); 
const confpassIN = document.getElementById("confpassword"); 

form.addEventListener("submit" , function (event){
    event.preventDefault(); 
    console.log("done"); 
});