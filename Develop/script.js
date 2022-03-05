// Assignment code here

//generate alert when user clicks on Generate Password button
function generatePassword (){
  window.alert("Please select criteria for your secure password through the next few prompts");
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
