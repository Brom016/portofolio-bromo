// navbar fixeed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// bagian hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});

// PopupUrl
function openPopup(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('popup-container').innerHTML = data;
            document.getElementById("popup").classList.remove("hidden");
            document.getElementById("popup").classList.add("flex");
        });
}

function closePopup() {
    document.getElementById("popup").classList.remove("flex");
    document.getElementById("popup").classList.add("hidden");
}