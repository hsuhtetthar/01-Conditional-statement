// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 60;
var expression1 = x < 25; //false
var expression2 = x > 50; //true

// TODO: Write Your JavaScript Code Here

// if (expression1 || expression2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

switch (true) {
  case expression1 || expression2:
    console.log("true");
    break;
  default:
    console.log("false");
    break;
}