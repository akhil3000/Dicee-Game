var a=Math.floor(Math.random()*(6-1))+1;
var b=Math.floor(Math.random()*(6-1))+1;

var imageSource="images/"+"dice"+a+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var imageSource="images/"+"dice"+b+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource);

if(a>b)
{
  document.getElementById("Hello").innerHTML=  "Player1 Wins";
}

else if(b>a) {
  document.getElementById("Hello").innerHTML= "Player2 Wins";
}

else {
  document.getElementById("Hello").innerHTML= "Draw Match";
}
