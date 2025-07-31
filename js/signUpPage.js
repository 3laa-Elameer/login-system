var signUpBtn = document.getElementById("signUpBtn")
var storeUserData = JSON.parse(localStorage.getItem("userData")) || [];

signUpBtn.addEventListener("click", function() {

    validate()
    storeData()
})

function validate( ) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (username === "" || email === "" || password === ""){
        alert("Please fill in all fields.");
    } else if (!passRegex.test(password)) {
        alert(" Invalid Password ❌  ");
    }else if (!emailRegex.test(email)) {
        alert(" Invalid Email ❌  ");
    }else {
        alert("  Done ✅  ");
            setTimeout(() => {
        window.location.href = "../index.html"
    }, 100);
    }
}

function storeData() {
    var userData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    
    storeUserData.push(userData);
    localStorage.setItem("userData", JSON.stringify(storeUserData));
    console.log(storeUserData);
}