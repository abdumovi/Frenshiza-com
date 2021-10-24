let btn = document.querySelector('.top__btn');
let lst = document.querySelector('.nav__over');
let lst2 = document.querySelector('.nav__all');
let body = document.querySelector('body')
btn.addEventListener('click',function(){
  lst.classList.toggle('transform')
  lst2.style.zIndex = "1";
  body.classList.toggle('hidden-over');
})
