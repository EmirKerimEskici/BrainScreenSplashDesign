const hamburger = document.getElementById('hamburger');
const headUL =document.getElementById('nav-ul');
hamburger.addEventListener('click',() =>{
    headUL.classList.toggle('show');
});