// The arrays containing the characters and letters to be used the password generator.
var specialCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "`", "~", "|",
];
var lowerCaseLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
var upperCaseLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var firstQuestion = ""
var secondQuestion = false
var thirdQuestion = false
var fourthQuestion = false
var fifthQuestion = false

var passwordPool = []

function askUser() {
  firstQuestion = prompt("How long would you like your password to be?")
  secondQuestion = confirm("Would you like it to contain special characters?")
  thirdQuestion = confirm("Would you like it to contain lowercase letter?")
  fourthQuestion = confirm("Would you like it to contain upper case letters?")
  fifthQuestion = confirm("Would you like it to contain numbers?")
}

function generatePool() {
  if (secondQuestion === true) {
    passwordPool = passwordPool.concat(specialCharacters);
  }
  if (thirdQuestion === true){
    passwordPool = passwordPool.concat(lowerCaseLetters);
  }
  if (fourthQuestion === true) {
    passwordPool = passwordPool.concat(upperCaseLetters);
  }
  if (fifthQuestion === true) {
    passwordPool = passwordPool.concat(numbers);
  }
}

function makePassword() {
  console.log(passwordPool[0]);
  Math.random()
}


askUser()
generatePool()
makePassword()



// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// To Do List
// when we click button we create prompt -
// when prompted, select what to include: special characters, letters, etc. -
// password between 8-128 characters
// use at least one character type
// password generates
// displays password in page