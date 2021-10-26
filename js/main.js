let btn = document.querySelector('.top__btn');
let lst = document.querySelector('.nav__over');
let lst2 = document.querySelector('.nav__all');
let body = document.querySelector('body')
btn.addEventListener('click',function(){
  lst.classList.toggle('transform')
  lst2.style.zIndex = "1";
  body.classList.toggle('hidden-over');
})
let lstbtn = document.querySelector('.vegetables--btn-mar');
let grdbtn = document.querySelector('.vechtbl--grid');
let grid = document.querySelector('.grid');
let carlst = document.querySelector('.fruit-categry__lst');

lstbtn.addEventListener('click',function(){
  grid.classList.add('elment-2');
  carlst.classList.remove('elment-2');
})
grdbtn.addEventListener('click',function(){
  grid.classList.remove('elment-2');
  carlst.classList.add('elment-2'); 
  
})
