// lấy phần Modal
var modal = document.getElementsByClassName('myModal');

// Lấy phần div mở Modal
var divModal = document.getElementsByClassName("myDivModal");

// Lấy phần span đóng Modal
var span = document.getElementsByClassName("close")[0];

// Khi button được click thi mở Modal
divModal.onclick = function() {
    modal.style.display = "block";
}

// Khi span được click thì đóng Modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const loginbtn = document.querySelector('#login-form')
const loginbtn2 = document.querySelector('#login-form2')
const closeLogin = document.querySelector('#close-login')
const registerbtn = document.querySelector('#register-form')
const closeRegister = document.querySelector('#close-register')
console.log(loginbtn)
loginbtn.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

loginbtn2.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

closeLogin.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "none"
})

registerbtn.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "none"
    document.querySelector('.register-form').style.display = "flex"
})

closeRegister.addEventListener("click", function(){
    document.querySelector('.register-form').style.display = "none"
})

loginbtn.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

