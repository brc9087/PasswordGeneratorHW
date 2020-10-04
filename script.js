//user input variables
var enter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;
var choices = []

function generatePassword() {

 //special characters !@#~$&
  character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "|", "~"]

  //numbers 1234345
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  //letters lowercase 
  alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  //LETTERS UPPCASE
  alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  //Prompts
  enter = (prompt)("How many characters would you like your password to be? Enter between 8 and 128")
  if (!enter) {
    prompt("You need to enter a value in order to generate a password");
  }
  //parameter for choices, must be between 8 - 128
  else if (parseInt(enter) < 8 && parseInt(enter) > 128) {
    prompt = (prompt)("Your selection must be between 8 and 128");
  }
  else {
    confirmNumber = confirm("Do you want a number in your password?");
    confirmCharacter = confirm("Do you want a special character in your password?");
    confirmUppercase = confirm("Do you want a capital letter in your password?");
    confirmLowercase = confirm("Do you want a lower case letter in your password?");
  }

  //If statement if all options are declined 
  if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
    alert("You must select some of criteria!");
  }
  //if user selects only numbers
  if (confirmNumber) {
    choices = [...numbers, ...choices]; // [1,2,3,4,[,],%]
  }
  //if user selects only character 
  if (confirmCharacter) {
    choices = [...character, ...choices];
  }
  //if user selects only lowercase 
  if (confirmLowercase) {
    choices = [...alphaLower, ...choices];
  }
  //if user selects only uppercase. 
  if (confirmUppercase) {
    choices = [...alphaUpper, ...choices];
  }
  //empty array to push other choices 
  var password = [];

  //for loop to iterate through array 
  for (var i = 0; i < enter; i++) {
    var userChoice = choices[Math.floor(Math.random() * choices.length)];
    password.push(userChoice);
  }

  return password.join("");



}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


