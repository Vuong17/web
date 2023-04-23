const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Thêm tính năng kéo thả khi màn hình có kích thước nhỏ hơn 768px

var slideContainer = document.querySelector('.slideshow-container');

slideContainer.addEventListener('touchmove', function (e) {
    // code xử lý sự kiện touchmove ở đây
    if (window.innerWidth < 768) {
        var touchStartX = 0;
        var touchEndX = 0;
        var touchDiffX = 0;

        document.addEventListener("touchstart", function (e) {
            touchStartX = e.touches[0].clientX;
        });

        document.addEventListener("touchmove", function (e) {
            touchEndX = e.touches[0].clientX;
            touchDiffX = touchStartX - touchEndX;
        });

        document.addEventListener("touchend", function (e) {
            if (touchDiffX > 50) {
                plusSlides(1); // Kéo qua bên phải
            } else if (touchDiffX < -50) {
                plusSlides(-1); // Kéo qua bên trái
            }
            touchStartX = 0;
            touchEndX = 0;
            touchDiffX = 0;
        });
    }
});




const loginbtn = document.querySelector('#login-form')
const loginbtn2 = document.querySelector('#login-form2')
const closeLogin = document.querySelector('#close-login')

const registerbtn = document.querySelector('#register-form')
const closeRegister = document.querySelector('#close-register')

const buybtn = document.querySelector('#buy-form');
const closeBuy = document.querySelector('#close-buy');


console.log(loginbtn)

loginbtn.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

loginbtn2.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

closeLogin.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "none"
})

registerbtn.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "none"
    document.querySelector('.register-form').style.display = "flex"
})

closeRegister.addEventListener("click", function () {
    document.querySelector('.register-form').style.display = "none"
})

loginbtn.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

buybtn.addEventListener("click", function () {
    document.querySelector('.buy-form').style.display = "flex";
});

closeBuy.addEventListener("click", function () {
    document.querySelector('.buy-form').style.display = "none";
});

function muaButton() {
    alert("Mua hàng thành công");
}

function changeTypePassword() {
    document.getElementById('password').type = document.getElementById('password').type == 'text' ? 'password' : 'text';
}

function changeTypePassword2() {
    document.getElementById('password1').type = document.getElementById('password1').type == 'text' ? 'password' : 'text';
}
function changeTypePassword3() {
    document.getElementById('password2').type = document.getElementById('password2').type == 'text' ? 'password' : 'text';
}

var toggleButton = document.querySelector('.category-toggle');
var category = document.querySelector('.category');

toggleButton.addEventListener('click', function () {
    if (category.classList.contains('show-more')) {
        category.classList.remove('show-more');
        toggleButton.textContent = 'Xem thêm';
    } else {
        category.classList.add('show-more');
        toggleButton.textContent = 'Thu gọn';
    }
});

const slideWrapper = document.querySelector('.slide-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    slideWrapper.style.transform = `translateX(-${counter * 1180}px)`;
}

function nextSlide() {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    slideWrapper.style.transform = `translateX(-${counter * 1180}px)`;
}
