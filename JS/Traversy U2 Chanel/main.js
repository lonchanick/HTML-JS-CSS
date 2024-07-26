console.log(">> SUBJECT: \tARRAYS");

const names ="Agustin,Diego,Dayana";
console.log("Array: "+names.split(','));

const result = names.split(','); 
console.log(result);

console.log('>>Add Carlos to the end');
result.push("Carlos");
console.log(result);

console.log(">>Add Liliana to the first position");
result.unshift("Liliana");
console.log(result);

console.log(">>Take Off last element from the array");
result.pop();
console.log(result);

console.log(`Is [${result}] an Array type?`);
console.log(Array.isArray(result));
const valueToTakeOff = "Diego";
console.log(`Ok take off ${valueToTakeOff} from there`);
console.log(`Ok, does Diego exist in the array? ${result.includes(valueToTakeOff)}`);
result.splice(result.indexOf(valueToTakeOff),1);
console.log(`Ok taking it off ..\nDone!\nResults:`);
console.log(result);

console.log(">> SUBJECT: \tLITERAL OBJECTS");

const person = 
{
    firstName: "El pequeño Augusto",
    secondName: "Israel",
    parents:["Dayana", "Diego"],
    address: {
        mainStreed: "Ramon Valdez",
        secondStreed: "Barbisotty"
    }
}
console.log("Adding a new field to the object");
console.log("-> person.email=\"aguchito@gmail.com\"");
person.email="aguchito@gmail.com";
console.log(person);
const {firstName, address: {mainStreed}} = person;
console.log(firstName,",",mainStreed);


console.log(">> SUBJECT: \tARRAY OF OBJECTS");

const todos = [
    {
        id:1,
        task:"task1",
        isCompleted: true
    },
    {
        id:2,
        task:"task2",
        isCompleted: false
    },
    {
        id:3,
        task:"task3",
        isCompleted: false
    }
]

console.log("Array of objects");
console.log(todos);
console.log("Accesing properties");
console.log(todos[0].task);

console.log("Ok, convert to JSON format the array object");
const todosJSON = JSON.stringify(todos);
console.log("Done!\nResults:");
console.log(todosJSON);

console.log(">> SUBJECT: \tLOOPS");

console.log("Iterating through array, FOR LOOP");
for(let i=0; i<todos.length; i++)
    {
        console.log(todos[i]);
    }

console.log("Iterating through array, kid of foreach");
for(let t of todos)
    console.log(t.task);

console.log(">> forEach");

todos.forEach(function(todos)
{
    console.log("forEach: "+todos.task);
});

console.log("->forEach");
todos.forEach(function(todos)
{
    console.log("forEach: "+todos.task)
});


console.log("->map");

const mapVariable = todos.map(function(todos){
    return todos.task;
});

mapVariable.forEach(function(f)
{
    console.log("map: "+f);
});

console.log("->filter");

const todoFilter = todos.filter(function(t)
{
    return t.isCompleted === false;
}).map(function(m)
{
    return m.task
});
console.log(todoFilter);

console.log(">> SUBJECT: \Ternary Operator");
const color = 11;
colorResult=color>10?"red":"blue";
console.log(colorResult);

console.log("->switch");

switch(colorResult)
{
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("color is NOT red nor blue");
}

console.log(">> SUBJECT: \t Classes (when JS 5)");

function Person(fname,sname,dob)
{
    this.fname=fname;
    this.sname=sname;
    this.dob=new Date(dob);
}

Person.prototype.GetFullName = function()
{
    return `${this.fname} ${this.sname}`;
}

Person.prototype.getYearOfBirth = function()
{
    return this.dob.getFullYear();
}

const  p = new Person("Diego","Israel","10-08-1991");
console.log(p.GetFullName());
console.log("year of birth: "+p.getYearOfBirth());
console.log(p);

console.log("_> Making a new Person with sintactyc sugar");

class PersonWithSugar
{
    constructor(fname,sname,dob)
    {
        this.fname=fname;
        this.sname=sname;
        this.dob=new Date(dob);
    }

    getFullName()
    {
        return `${this.fname} ${this.sname}`;
    }

    getYearOfBirth()
    {
        return this.dob.getFullYear();
    }
}

const pSugar = new PersonWithSugar("Aguchaldo","Arroyo","06-06-2022");
console.log(pSugar.getFullName() +" - "+pSugar.getYearOfBirth());

console.log(">> SUBJECT: \t DOM: Document Object Model");

//single element
console.log("->Select single element");
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));
// console.log(window);
console.log("->Select multiple elements");
// console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));

console.log("showing every single element from a nodeList");
const listItems = document.querySelectorAll(".item");
listItems.forEach(i => console.log(i));


console.log("->Manipulating elements");
const ul = document.querySelector(".items");
// ul.firstElementChild.textContent="Hola mundo";
ul.firstElementChild.innerHTML="<h4>hola mundo</h4>";
ul.lastElementChild.textContent="last child";
ul.children[1].textContent="second child ";

console.log("->Manipulating Style");
const btn1 = document.querySelector(".btn");
btn1.style.background = "red";

console.log(">> SUBJECT: \t Events");
// const btn = document.querySelector(".btn");
// btn1.addEventListener("click", e => {
//     e.preventDefault();
//     form = document.querySelector("#my-form");
//     form.style.background="#FDCEDF";
// });


console.log(">> SUBJECT: \t Task: Capture forms values and print it out in a unordered list");

const btn = document.querySelector(".btn");
btn.addEventListener("click", e => {
    e.preventDefault();
    const form = document.querySelector("#my-form");
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const userList = document.querySelector("#users");

    if(name.value === "" || email.value === "")
    {
        const msg = form.querySelector(".msg");
        msg.classList.add("error");
        msg.innerHTML="Please enter all fields";

        setTimeout(()=>msg.remove(), 3000);
    }
    else
    {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(
            `${name.value} <:> ${email.value}`
        ));
        userList.appendChild(li);
    }
    name.value="";
    email.value="";
});
