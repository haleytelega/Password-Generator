// Assignment code here


//prompt asking for the password length
var getPasswordLength = function (){
    var length = window.prompt("How many characters would you like your password to be? Please type a number from 8-128.");
    if (length >= 8 && length <= 128) {
    console.log("Password Length:" + length);

//    return true;
}
  else {
    window.alert("Please type in a number between 8-128.");
    console.log("Invalid Response. Please try again.");
    }
}

getPasswordLength();

//prompt asking for if they want lowercase letters
var lowerLetters = function () {
  var lower = window.prompt("Do you want lower case letters in your password? Please type yes or no.");
  if (lower == "yes" || lower =="Yes") {
    console.log("You selected: " + lower);
  }
  else if (lower == "no" || lower == "No") {
    console.log("You selected: " + lower);
  }

  else {
    window.alert("You selected an invalid response. Please try again. ");
  }
}

lowerLetters ();

// prompt for uppercase letters
var upperLetters = function () {
  var upper = window.prompt("Do you want upper case letters in your password? Please type YES or NO.");
  if (upper == 'YES' || upper == "Yes") {
    console.log("You selected: " + upper);
  }
  else if (upper =='NO' || upper == 'no') {
    console.log("You selected: " + upper);
  }
  else {
    window.alert("You selected an invalid response. Please try again.");
  }
}

upperLetters();

var numericValues = function () {
  var numeric = window.prompt("Do you want numbers in your password? Please type yes or no.");
  if (numeric == 'Yes' || numeric == "yes"){
    console.log("You selected: " + numeric);
  }
  else if (numeric == "No" || numeric == "no"){
    console.log("You selected: " + numeric);
  }
  else {
    window.alert("You selected an invalid response. Please try again.");
  }
}

numericValues();

var specialCharacters = function () {
  var characters = window.prompt("Do you want special characters in your password? Please type in yes or no.");
  if (characters == 'Yes' || characters == 'yes'){
    console.log("You selected: " + characters);
  }
  else if (characters == 'No' || characters == 'no'){
    console.log("You selected: " + characters);
  }
  else {
    window.alert("You selected an invalid response. Please try again.");
  }
}

specialCharacters();

//function generatePassword (){
//  window.alert("Please select criteria for your secure password through the next few prompts.");
//};

// generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.onclick = function () {
  generateBtn.click();
  window.alert("Please select criteria for your secure password through the next few prompts.");
}


// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
