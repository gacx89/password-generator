// Assignment code here
function generatePassword(){
  var lowerCase = window.confirm("Include lower case letters in your generated password?");
  console.log(response);

  var upperCase = window.confirm("Include")

  return (password + password2);
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
