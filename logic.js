var rand1 = Math.floor(Math.random() + 6) + 1;
var ranimg = "dice" + rand1 + ".png";
var imgsrc = "images/" + ranimg;
var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src",ranimg);
document.querySelectorAll("img")[1].setAttribute("src",ranimg)
