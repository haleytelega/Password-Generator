// Assignment code here

//generate alert when user clicks on Generate Password button
function generatePassword (){
  window.alert("Please select criteria for your secure password through the next few prompts.");
};

generatePassword();


//prompt asking for the password length
var getPasswordLength = function (){
    var length = window.prompt("How many characters would you like your password to be? Please type a number from 8-128.");
    if (length >= 8 && length <= 128) {
//    window.alert("Thank you");
    console.log("Password Length:" + length);

//    return true;
}
  else {
    window.alert("Please type in a number between 8-128.");
    console.log("Invalid Response ");
    }
}

getPasswordLength();

//prompt asking for if they want lowercase letters
var lowerLetters = function () {
  var lower = window.prompt("Do you want lower case letters in your password? Please select Yes or No.");
  if (lower == "Yes" || lower =="yes") {
    window.alert("You selected Yes to lower case letters");
    console.log("You selected Yes.")
  }
  else {
    window.alert("You selected No to lower case letters");
    console.log("You selected No.")
  }
}

lowerLetters ();

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

