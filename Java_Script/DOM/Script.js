let dom = document.querySelector("h1").innerText

console.log(dom);


function submit(){
    console.log("Submit Button clicked");

    const name = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;

    console.log("Full name: ", name);
    console.log("Email: ", email);
    
    
}
