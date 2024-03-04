const backToTopButton = document.querySelector('#backToTop');
const header = document.querySelector('header');

backToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox and others
  // header.style.backgroundColor = 'orange';
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
