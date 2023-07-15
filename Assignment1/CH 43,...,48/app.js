// *******************CH 43...48**********************
         // Question No 1
function hello(){
    alert("Hello!")
}
         // Question No 2
function mob(){
    alert("Thanks for purchasing a phone from us!")
}
         // Question No 3
function delBtn(button){
    const row = button.closest("tr");
    row.remove();
}
         // Question No 4
function oldimage(){
    document.getElementById("img1").src = "mob2.jpg";
}
function newimage(){
    document.getElementById("img1").src = "mob1.jpg";
}

         // Question No 5
const counterValueElement = document.getElementById("counterValue");
let counter = 0;
 function countIncrease() {
  counter++;
  updateCounterValue();
};
 function countDecrease() {
  if (counter > 0) {
    counter--;
    updateCounterValue();
  }
};
function updateCounterValue() {
  counterValueElement.textContent = counter;
}
