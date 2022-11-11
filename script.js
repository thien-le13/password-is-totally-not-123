// The arrays containing the characters and letters to be used the password generator.
var specialCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "`", "\\", "~", "|",
];
var lowerCaseLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
var upperCaseLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// This assigns the default values to variables.
var firstQuestion = 0;
var secondQuestion = false;
var thirdQuestion = false;
var fourthQuestion = false;
var fifthQuestion = false;

// These are the questions asked for the criteria of the password.
function askUser() {
  firstQuestion = parseInt(prompt("How long would you like your password to be?"));
  
  // Loops user through question until a valid number is entered.
  while (isNaN(firstQuestion) || firstQuestion < 8 || firstQuestion > 128){
    firstQuestion = parseInt(prompt("Please enter a number between 8-128."));
  }
  
  // Repeats questions if one character type is not selected.
  do {
    secondQuestion = confirm("Would you like it to contain special characters?");
    thirdQuestion = confirm("Would you like it to contain lowercase letter?");
    fourthQuestion = confirm("Would you like it to contain upper case letters?");
    fifthQuestion = confirm("Would you like it to contain numbers?");

    var repeat = !secondQuestion && !thirdQuestion && !fourthQuestion && !fifthQuestion;
    if (repeat){
      alert("Please confirm at least one character type.");
    }
  } while (repeat);
}

// The new array formed after criteria has been selected.
var passwordPool = [];

// Validates the input of criteria selected.
function generatePool() {
  if (secondQuestion === true) { 
    passwordPool = passwordPool.concat(specialCharacters); 
  }
  
  if (thirdQuestion === true) { 
    passwordPool = passwordPool.concat(lowerCaseLetters); 
  }
  
  if (fourthQuestion === true) { 
    passwordPool = passwordPool.concat(upperCaseLetters); 
  }
  
  if (fifthQuestion === true) { 
    passwordPool = passwordPool.concat(numbers); 
  }
}

// Returns randomly generated password based off user set criteria.
function generatePassword() {
  var randomPassword = "";
  for (var i = 0; i < firstQuestion; i++){ 
    var index = Math.floor(Math.random() * passwordPool.length); 
    randomPassword = randomPassword + passwordPool[index];
  }
  return randomPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordPool = [];
  askUser();
  generatePool();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);