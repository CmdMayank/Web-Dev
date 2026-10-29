function login(){
    const nm = document.getElementById("userName").value.trim();
    const pw = document.getElementById("password").value;
}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginForm = new FormData(loginForm);
    
    login();
});