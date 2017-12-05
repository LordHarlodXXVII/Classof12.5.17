function displayName (){
   var name = prompt("what is your name?");
   var value = document.getElementById("name");
  value.innerHTML =name;
  
} 

function helloWorld(){
  console.log("Hello World");
}

displayName()