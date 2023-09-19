// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar');
// ketika hamburger menu di klik
document.querySelector('#kotakmenu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar elemen
const hm = document.querySelector('#kotakmenu');


document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

//anim
var typed = new Typed(".text", {
    strings: [ "Web Development", "Phone Technician"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

