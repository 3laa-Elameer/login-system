var userName = document.querySelector("userName")
var userName = document.querySelector("userName")
var storeUserData = JSON.parse(localStorage.getItem("userData")) || [];

function logout(){
    window.location.href = "../index.html"
}

document.addEventListener("DOMContentLoaded", function() {
    var userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.length > 0) {
        var lastUser = userData[userData.length - 1];
        document.getElementById("userName").textContent = "Welcome " + lastUser.username;
    } else {
        document.getElementById("userName").textContent = "Welcome Guest";
    }
})