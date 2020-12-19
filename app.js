// UI variables
const hamburger = document.querySelector('.hamburger-menu');
const menuItems = document.querySelectorAll('.menu-item');
const nav = document.querySelector('.nav-left')
const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu-icon');
const close = document.querySelector('.close');
const listItem = document.querySelector('.content>ul').children[2];

// Menu toggle event
hamburger.addEventListener('click', (e)=>{
  nav.classList.toggle('change')
  menu.classList.toggle('change');
  icon.classList.toggle('change');
  close.classList.toggle('change')
  menuItems.forEach(item => {
    item.classList.toggle('change');
  });
})

// list item change on resize
window.addEventListener('resize', changeText());

function changeText(){
  if( window.innerWidth > 1022){
    console.log('working')
    listItem.innerText = 'View Plans';
  }
  if( window.innerWidth < 1022){
    listItem.innerText = 'Check price';
  }
}