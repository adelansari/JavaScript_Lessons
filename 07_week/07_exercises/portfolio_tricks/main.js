const backToTopButton = document.querySelector('#backToTop');
const header = document.querySelector('header');
const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const btnModal = document.querySelector('.btnModal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btnClose');

const toggleMenu = () => {
  nav.classList.toggle('responsive');
};

const toggleModal = () => {
  overlay.classList.toggle('visible');
};

backToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox and others
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
    header.classList.add('bg');
  } else {
    backToTopButton.style.display = 'none';
    header.classList.remove('bg');
  }
});

mobButton.addEventListener('click', toggleMenu);
menuItems.forEach((item) => item.addEventListener('click', toggleMenu));
[btnModal, btnClose, overlay].forEach((el) => el.addEventListener('click', toggleModal));
