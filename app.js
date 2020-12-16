// UI variables
const hamburger = document.querySelector('.hamburger-menu');
const menuItems = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu-icon');
const close = document.querySelector('.close');

// Menu toggle event
hamburger.addEventListener('click', (e)=>{
  console.log('working');
  menu.classList.toggle('change');
  icon.classList.toggle('change');
  close.classList.toggle('change')
  menuItems.forEach(item => {
    item.classList.toggle('change');
  });
})