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

function changeTypePassword(){
    document.getElementById('password').type = document.getElementById('password').type == 'text' ? 'password' : 'text';
}

function changeTypePassword2(){
    document.getElementById('password1').type = document.getElementById('password1').type == 'text' ? 'password' : 'text';
}
function changeTypePassword3(){
    document.getElementById('password2').type = document.getElementById('password2').type == 'text' ? 'password' : 'text';
}


function xemThem() {
    var a = document.getElementById("xemthem").style.display = "block";
    var b = document.getElementById("none-chu").style.display = "none";
    var c = document.getElementById("none-chu1").style.display = "flex";
}

function xemThem_SS() {
    var a = document.getElementById("xemthemSS").style.display = "block";
    var b = document.getElementById("none-chu-SS").style.display = "none";
    var c = document.getElementById("none-chu1").style.display = "flex";
}

function xemThem1() {
    var a = document.getElementById("xemthem1").style.display = "block";
    var b = document.getElementById("none-chu1").style.display = "none";
}
