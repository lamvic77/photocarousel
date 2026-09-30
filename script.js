let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceOne() {
  image1.src = "pics/teddy.jpg";
  image2.src = "pics/gift.jpg";
  image3.src = "pics/teddywithgift.jpg";
}

function showSequenceTwo() {
  image1.src = "pics/teddywithgift.jpg";
  image2.src = "pics/gift.jpg";
  image3.src = "pics/teddy.jpg";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);
