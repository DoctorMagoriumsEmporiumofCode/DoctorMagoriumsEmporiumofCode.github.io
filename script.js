const btn = document.getElementById("btn");
numbergood = Math.floor(Math.random()*11)

btn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);

  btn.style.left = x + "px";
  btn.style.top = y + "px";

  console.log("hi");
});

function gotoabout(){
  window.location.href = "aboutpage.html"
}
function square1(){
  window.location.href = "square1.html"
}
function square2(){
  window.location.href = "square2.html"
}
function square3(){
  window.location.href = "square3.html"
}
function square4(){
  window.location.href = "square4.html"
}
function square5(){
  window.location.href = "square5.html"
}
function gotoabout2(){
  window.location.href = "index.html"
}
function gotogame(){
  window.location.href = "unblockedgame.html"
}
function checker(){
  guessreal = document.getElementById("guest").value
  if (guessreal == numbergood){document.getElementById("Bcs").innerHTML = "You got it!"}
  if (guessreal != numbergood)
  {
    if (guessreal > numbergood){document.getElementById("Bcs").innerHTML = "Too high!"}
    else {document.getElementById("Bcs").innerHTML = "Too low!"}
  }
}