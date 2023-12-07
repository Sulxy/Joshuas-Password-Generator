// Assignment code here
var charArray= [];
var lowCase = ["a", "b", "c", "d", "e", "f" ,"g" ,"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "/", "`", "~", "|"];
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var properPrompt = promptInfo();
  var passwordText = document.querySelector("#password");

  if (properPrompt) {
    var newPW = generatePassword();
    passwordText.value = newPW;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var randomValue = Math.floor(Math.random() * charArray.length);
    password = password + charArray[randomValue];
  }
  return password;
}

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

