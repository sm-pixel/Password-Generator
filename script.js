// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var specials = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Make sure password is 8-128 characters
  var passwordLength = parseInt(prompt("Password Length?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128")
    return generatePassword()
  }
//Prompt what type of characters in password
  var wantsSpecials = confirm("Special Characters?");
  var wantsLowers = confirm("Lowercase Letters?");
  var wantsUppers = confirm("Uppercase Letters?");
  var wantsNumbers = confirm("Numbers?");

  var possibles = [];

  if (wantsSpecials) {
    possibles.push(specials);
  }

  if (wantsLowers) {
    possibles.push(lowers);
  }

  if (wantsUppers) {
    possibles.push(uppers);
  }

  if (wantsNumbers) {
    possibles.push(numbers);
  }

  //var choices = [upper, lower, numbers, specials]
  var password = "";


  for (var i = 0; i < passwordLength; i++) {
    //randomly pick an array from possibles
    var randomArray =
      possibles[Math.floor(Math.random() * possibles.length)];
    //randomly pick a character from the array we picked above
    var randomChar =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    //add the character to the password
    password += randomChar;
  }

  console.log(password);

  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


