var charResponse= ""
var uppLetters="ABCDEFGHIJKLMNOPQRSTUVXYZ"
var lowerLetters=uppLetters.toLowerCase
var numbersChars="0123456789"
var charReponseRandom  = ""

// --Main code starts here
//questions for user
var passwordResponse = confirm("Do you want to create a password?"); 
var charResponse= prompt("how many characters");
var uppCase= prompt("do you want upper case?");
var lowerCase= prompt("do you want lower case");
var numbers = prompt("do you want numbers");

//calling functions
writePassword
generatePassword
var generateBtn = document.querySelector("#generate");
// --Main code ends here


//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
  let returnedAllowedChars = ""
  if(uppCase.toLowerCase === 'yes'){
    console.log("uppCase: " + returnedAllowedChars)
      returnedAllowedChars = returnedAllowedChars + uppCase
  }
  if(lowerCase.toLowerCase === 'yes'){
    console.log("lowerCase: " + returnedAllowedChars)
      returnedAllowedChars = returnedAllowedChars + lowerCase
  }
  if(numbersChars === 'yes'){
      console.log("numberChars: " + returnedAllowedChars)
      returnedAllowedChars = returnedAllowedChars + numbersChars
  }
  if(uppCase.toLowerCase === 'no' && lowerCase.toLowerCase === 'no' && numbersChars === 'no' ) {
    confirm("Password cant be generated. Refresh page and try again"); 
  }
  let password=returnedAllowedChars.charAt(Math.floor(Math.random()*charResponse))
  console.log("password: " + password)
  //let m =charMath.floor((Math.random)* "")
  



  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
