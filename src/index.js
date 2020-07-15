import "./styles.css";

const colorBtn = document.querySelector('.btn');
const bodybck = document.querySelector('body');

const colors = ['yellow', 'red', 'green','purple']

colorBtn.addEventListener('click',changeColor)

function changeColor(){
  
  let radom = Math.floor(Math.random()*colors.length)
  bodybck.style.backgroundColor = colors[radom];
}