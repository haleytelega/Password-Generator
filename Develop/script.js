// Assignment code here
var passwordLength = function () {
  var value = Math.floor(Math.random() * 8 + 120);

  return value;
}

//generate alert when user clicks on Generate Password button
function generatePassword (){
  window.alert("Please select criteria for your secure password through the next few prompts");
};

//alert asking for the password length
function passwordCritera (){
  var promptLength = window.alert("How many characters would you like your password to be? Please select from 8-128.");
  if (passwordLength === 8)
    window.alert("Thank you");
    return passwordCritera();
}


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
