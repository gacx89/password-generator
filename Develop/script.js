// Assignment code here

const CHARACTER_SET = {
  lowerCaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"],
  specialCharacters: ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
};

function generateCharacter(){
  var charType = Math.floor(Math.random() * 4);

  switch (charType){
    case 0:
      return CHARACTER_SET.lowerCaseLetters[Math.floor(Math.random() * CHARACTER_SET.lowerCaseLetters.length)];
    case 1:
      return CHARACTER_SET.upperCaseLetters[Math.floor(Math.random() * CHARACTER_SET.upperCaseLetters.length)];
    case 2:
      return CHARACTER_SET.numbers[[Math.floor(Math.random() * CHARACTER_SET.numbers.length)]];
    case 3:
      return CHARACTER_SET.specialCharacters[[Math.floor(Math.random() * CHARACTER_SET.specialCharacters.length)]];
  }
}


function generatePassword(){
  var lowerCase = window.confirm("Include lower case letters in your generated password?");
  var upperCase = window.confirm("Include upper case letters in your generate password?");
  var numbers = window.confirm("Include numbers in your generated password?");
  var specialChars = window.confirm("Include special characters in your generated password?");
  var passwordLength = window.prompt("How many characters would you like your password to be? (must be between 8 and 128 characters)");
  
  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++){
    generatedPassword += generateCharacter();
  }

  return generatedPassword;
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
