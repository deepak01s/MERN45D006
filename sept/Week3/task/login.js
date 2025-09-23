const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

   const validUser = users.find(user=> user.email === email.trim() && user.password === password.trim());
    if (validUser) {
        alert(`Login Successful ✅ Welcome, ${validUser.name}`);
    } else {
        alert("Invalid Email or Password ❌");
    }
});
