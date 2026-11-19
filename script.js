const Name= document.getElementById("name")
const Age= document.getElementById("age")
const Save= document.getElementById("save")
const Output= document.getElementById("output")
Save.addEventListener("click", function(){
const user={};
user.name=Name.value;
user.age=Age.value;
Output.textContent= "Name: "+ user.name +", Age: "+ user.age;
});