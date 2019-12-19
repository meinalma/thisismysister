var pics = [
  "img/sister1.jpg","img/sister2.jpg", "img/sister3.jpg", "img/sister4.jpg", "img/sister5.jpg", "img/sister6.jpg", "img/sister7.jpg", "img/sister8.jpg", "img/sister9.jpg", "img/sister10.jpg", "img/sister11.jpg", "img/sister12.jpg", "img/sister13.jpg", "img/sister14.jpg", "img/sister15.jpg", "img/sister16.jpeg", "img/sister17.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
  if(counter === 17){
    counter = 0;
  }
  img.src = pics[counter];
  counter = counter + 1;
});
