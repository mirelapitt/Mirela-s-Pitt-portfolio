// get menu icon element
const hamburger = document.querySelector('.ham');
const navMenu = document.querySelector('.navmenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// get the bars of the hamburger menu

const portfolio = document.querySelector('.portfolio-link');
const aboutUs = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const close = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

portfolio.addEventListener('click', () => {
  close();
});

aboutUs.addEventListener('click', () => {
  close();
});

contactLink.addEventListener('click', () => {
  close();
});

// Get the details of the projects cards

