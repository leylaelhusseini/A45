const Name= document.getElementById("name")
const Age= document.getElementById("age")
const Save= document.getElementById("save")
const Output= document.getElementById("output")
let todos=JSON.parse(localStorage.getItem("todos")) || [];
Save.addEventListener("click", function(e){
    const user={};
    user.name=Name.value;
    user.age=Age.value;
    todos.push(user)
    localStorage.setItem("todos", JSON.stringify(todos));
    Output.textContent= "Name: "+ user.name +", Age:"+ user.age;}
);