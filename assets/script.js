// Assignment code here

// Set's the arrays and their values that the generator will use.
var lowCase = ["a", "b", "c", "d", "e", "f" ,"g" ,"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "/", "`", "~", "|"];

// Connects the variable "generateBtn" to the HTML document element with the #generate ID. 
var generateBtn = document.querySelector("#generate");

// Runs the code on button click.
generateBtn.addEventListener("click", writePassword);

// This is the first function called. This runs the nested fuction "promptInfo", and stores that value into a variable
// named "properPrompt". Stores the passwordText information and links it to the HTMl document element with the #password ID. 
// The if statement  runs the generatePassword function, and stores that data in var "newPW", and the last line sets
// the passwordText.value to be the data in newPW.
function writePassword() {
  var properPrompt = promptInfo();
  var passwordText = document.querySelector("#password");

  if (properPrompt) {
    var newPW = generatePassword();
    passwordText.value = newPW;
  } 
}


// This is the second function called (on line 22). It prompts the user for inputs, and concatenates the arrays attached to those inputs
// which allows for the user to select which character types they want or don't want in their password. 
// Sets the charArray to be empty at start, then returns the users input value for number of characters as an Integer, instead of a string.
// If the user inputs a number smaller than 8, larget than 128, or not a number, it prompts them to start over. 
// When the charLength criteria is met, it prompts the user further for upper, lower, number, and symbols. Then returns the values selected to the 
// writePassword(); function. 
function promptInfo() {
  charArray = [];
  charLength = parseInt(prompt("How many characters are in your desired password? Please choose a number beetween 8 and 128."));

    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Please type a numeric value between 8 and 128.");
      return false;
    }

    if (confirm("Would you like lowercase letters in your password?")) {
      charArray = charArray.concat(lowCase);
    }

    if (confirm("Would you like UPPERCASE letters in your password?")) {
      charArray = charArray.concat(uppCase);
    }

    if (confirm("Would you like numbers in your password?")) {
      charArray = charArray.concat(number);
    }

    if (confirm("Would you like symbols in your password?")) {
      charArray = charArray.concat(symbol);
    }
    return true;
}

// This is the third function called (on line 24). It takes the information provided by the user "charLength" and then runs a for loop until the
// desired length of password is met, increasing in length by 1 each loop. Takes this information and stores it in "password". 
function generatePassword() {
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var randomValue = Math.floor(Math.random() * charArray.length);
    password = password + charArray[randomValue];
  }
  return password;
}
