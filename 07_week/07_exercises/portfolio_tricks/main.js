const backToTopButton = document.querySelector('#backToTop');
const header = document.querySelector('header');

backToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox and others
  // header.style.backgroundColor = 'orange';
  header.classList.toggle('bg');
});

window.addEventListener('scroll', () => {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? (backToTopButton.style.display = 'block')
    : (backToTopButton.style.display = 'none');
});
