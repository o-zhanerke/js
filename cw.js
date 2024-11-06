//2 exercise
// var name = prompt("Enter your name");
// alert("Hello," + name + "!");

//3 exercise
// var name = prompt("Enter your name :");
// var age = prompt("Enter your age:");
// var email = prompt("Enter your email:");
// alert(
//   "Hello," + name + "\n" + "Your age is" + age + "\n" + "Your email is" + email
// );

//4 exercisevar num = prompt("Enter number:");
// if (num % 2 === 0) {
//   alert("Number" + num + "is even/jup");
// } else {
//   alert("Number" + num + "is odd/taq");
// }
//

//5 exercise
// var num1 = Number(prompt("Enter number"));
// var num2 = Number(prompt("Enter number"));
// alert(num1 + num2);

//6 exercise
// var score = 0;
// let duestion1 = prompt("сен қызсың ба?");
// if ((question1 = "жоқ")) {
//   score++;
// }
// let duestion2 = prompt("қай мектепте оқисың?");
// if ((question2 = 172)) {
//   score++;
// }
// let duestion3 = prompt("нешінші сынып?");
// if ((question3 = 11)) {
//   score++;
// }
// let duestion4 = prompt("медеуге барып қөрдің бе?");
// if ((question4 = "yes")) {
//   score++;
// }
// let duestion5 = prompt("15+1505456?");
// if ((question5 = 1505471)) {
//   score++;
// }
// alert("Құттықтаймыз ,сіз 5 ұпай ұттыңыз!");

//7exercise
let hour = prompt("Қазір сағат неше?");
if (hour >= 5 && hour <= 12) {
  alert("Қайырлы таң !");
} else if (hour > 12 && hour <= 17) {
  alert("Қайырлы күн!");
} else if (hour > 17 && hour <= 21) {
  alert("Қайырлы кеш!");
} else if (hour > 21 && hour <= 24) {
  alert("Қайырлы түн!");
}
