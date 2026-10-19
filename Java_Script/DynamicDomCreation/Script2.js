const ar = ["Saurabh", "Modi", "Rahul", "Owaisi", "Amit", "Akhilesh"];

const list = document.createElement("ol");

ar.forEach((item) => {
    const L = document.createElement("li");
    L.textContent = item;
    list.appendChild(L);
});

document.getElementById("myList").appendChild(list);