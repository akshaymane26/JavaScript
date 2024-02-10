let btn = document.querySelector("button");

function genColor(){ // randomly generate all value
let red = Math.floor(Math.random()*255);
let green =Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);

let color = `rgb(${red},${green},${blue})`;
//console.log(random);
return color;
}
btn.addEventListener("click", function(){
   let random = genColor(); //put that fun into random
    let h = document.querySelector("h2");
    h.style.color = random;

    let div = document.querySelector("div");  //we use div 
    div.style.backgroundColor=random;
    console.log("colored updated :) ");
});
