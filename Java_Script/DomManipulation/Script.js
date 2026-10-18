const headinText = document.getElementById("heading").innerText;
const para = document.getElementById("studentMessage").textContent;
const btnLabel = document.getElementById("courseButton").innerHTML;

console.log(headinText);
console.log(para);
console.log(btnLabel);


function UpdateMyName(){
    const myName = document.getElementById("myName");
    const para = document.getElementById("studentMessage");
    para.innerText = "Welcome to RICR" + myName.value;
}