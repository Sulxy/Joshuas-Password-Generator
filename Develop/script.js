// Assignment code here

// These 5 variables are greyed out because they are declared, but not read anywhere yet.
function passwordCriteria () {
  const characterAmount_string = prompt("How many characters? (Pick a number between 8 and 128)");
  const characterAmount_Number = Number(characterAmount_string);
  const includeLowercase = prompt("Would you like to include lowercase letter? (Yes/No)");
  const includeUppercase = prompt("Would you like to include UPPERCASE letters? (Yes/No)");
  const includeNumbers = prompt("Would you like to include Numbers? (Yes/No)");
  const includeSymbols = prompt("Would you like to include Symbols? (Yes/No)");
}

passwordCriteria();










// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//
const form = document.getElementById("passwordGenerator");
// 
generateBtn.addEventListener("click", writePassword);
