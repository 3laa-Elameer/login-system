var loginBtn = document.getElementById("loginBtn");
var signUpLink = document.querySelector(".signUpLink");

loginBtn.addEventListener("click", function() {
  loginUser();
});

signUpLink.addEventListener("click", function(){
    console.log("SignUp button clicked");
})

function loginUser() {
    var loginEmail = document.getElementById("email").value.trim().toLowerCase();
    var loginPassword = document.getElementById("password").value.trim();
    var storeUserData = JSON.parse(localStorage.getItem("userData")) || [];
    var matchedUser = storeUserData.find(function(user) {
        return user.email === loginEmail && user.password === loginPassword;
    });
    if (matchedUser) {
        window.location.href = "../html/home.html";
    } else {
        alert(" Rag3 byanatk tany kda ❌ .");
    }
}