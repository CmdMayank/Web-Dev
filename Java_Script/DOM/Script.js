let dom = document.querySelector("h1").innerText

console.log(dom);


function submit(){
    console.log("Submit Button clicked");

    const name = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;

    console.log("Full name: ", name);
    console.log("Email: ", email);
}

const coursediv = document.getElementById("course");
console.log(coursediv);
const heading = document.querySelector("h2");
console.log(heading);

console.log(heading.parentElement.firstElementChild);
console.log(heading.parentElement.children);
console.log(heading.parentElement.lastElementChild);

;



