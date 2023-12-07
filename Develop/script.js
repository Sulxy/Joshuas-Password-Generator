// Assignment code here
var generateBtn = document.querySelector("#generate");

// numberOfChars = "tagname"

  // Adds text content to created tag // Dont think this is necessary?
  //tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body // don't think this is necessary.
  //document.body.appendChild(tag);






function generatePassword() {
  console.log("Button works?");
  var numberOfChars = prompt("Please select the amount of characters in your desired password. (Select a number between 8 and 128)");

  if (numberOfChars >= 8 && numberOfChars <= 128);

    alert("Please enter a valid amount.");
  



  return "Password";
}

// Get references to the #generate element
// *** this var targets the generate id in HTML. This is targeting the button. 
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// this function calles the generatePassword function, and then stores that value into a variable called "password".
function writePassword() {
  var password = generatePassword();
  // vv stores the password id in the <div class="card"> which displays where the generated password displays on the screen.> 
  var passwordText = document.querySelector("#password");
// vv Takes the value of the generated password and plugs it into the screen. 
  passwordText.value = password;

}

// Add event listener to generate button
// *** when a user clicks the generate button, it will call the writePassword function that was provided with the starter code. 
generateBtn.addEventListener("click", writePassword);


// *** how to force user to select a number between 8 and 128, and return a retry if not.
// *** figure out what starting code does
// *** create generatePassword() function for the writePassword function to call. THIS IS THE ASSIGNMENT. 
// psuedo code to help determine what to do = in plain english. Plan things out:
  // Step 1: Prompt user for the password criteria
      // Password length 8 < 128
      // Include lower, upper, numbers, symbols (Use confirm/cancel commands for these.)
  // Step 2: Validate the input, ensure that at least 1 character type is selected, and that the selected amount of characters is between 8 and 128.
  // Step 3: Generate Password based on criteria.
  // Step 4: Display password to page. 
