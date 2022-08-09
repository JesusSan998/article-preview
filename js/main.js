const ctaShare = document.querySelector('.card__share');
const links = document.querySelector('.card__links');

ctaShare.addEventListener('click', ()=>{
    links.classList.toggle('show__links');
});