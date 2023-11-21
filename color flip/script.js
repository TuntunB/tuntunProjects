var btn = document.getElementById('btn')
var divBg = document.getElementById('targetDiv')
let index = 0;
 btn.addEventListener('click', function(){
  let colors = ['green', 'black', 'grey', 'dodgerblue','gold', 'deeppink'];
  
   var randomColor = colors[Math.floor(Math.random() * colors.length)];
   divBg.style.backgroundColor = randomColor
 var random  = colors[Math.floor(Math.random() * colors.length)]
  console.log(random)
 })

/*function changeColor(){
  let colors = ['green', 'black', 'grey', 'dodgerblue','gold', 'deeppink'];
  
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
    divBg.style.backgroundColor = randomColor
}

setInterval(changeColor,1000)
*/