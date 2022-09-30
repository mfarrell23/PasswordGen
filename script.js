
//make an array
var uppLetters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
var lowerLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersChars=['0','1','2','3','4','5','6','7','8','9']
var specialChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

var charReponseRandom  = ""

// --Main code starts here
//questions for user
var passwordResponse = confirm("Do you want to create a password?"); 
var charResponse = parseInt(
  prompt("How many characters?"), 10
)
//confirms - these will be either TRUE or FALSE
var uppCase= confirm("do you want upper case?");
var lowerCase= confirm("do you want lower case");
var numbers = confirm("do you want numbers");
var special= confirm("do you want special characters");
//calling functions
writePassword
generatePassword
var generateBtn = document.querySelector("#generate");
// --Main code ends here

// PSUEDO-CODE
// we will need 3 NEW functions
// 1. generatePassword() - handles the creation of the password
// 2. getRandom(arr) - gets random characters out of EACH aray
// 3. getPasswordOptions() - this is a function that stores all of the prompts - this 
//    3a. store all prompts in variables - i.e var hasSpecialChars = prompt()/confirm()
//    3b and THEN we want to check via conditional if statesments to see what the user chose in each prompt

// Write password to the #password input
function writePassword() {
  console.log("writePassword function")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {

  let returnedAllowedChars = ""
  if(charResponse < 5){
    alert("Password length must be greater than 5");
    return;
  }
  
  if(uppCase === true && lowerCase === true && numbers === true && special === true){
    if(uppCase== true){
    returnedAllowedChars = returnedAllowedChars + uppLetters.join('')
  }
  if(lowerCase === true){
    returnedAllowedChars = returnedAllowedChars + lowerLetters.join('')
  }
  if(numbers === true){
      returnedAllowedChars = returnedAllowedChars + numbersChars.join('')
  }
  if (special===true){
    returnedAllowedChars = returnedAllowedChars + specialChars.join('')
  }
  if(uppCase === false && lowerCase === false && numbers === false && special===false) {
    confirm("Password cant be generated. Refresh page and try again"); 
  }
  
  let password = ""
  let len = returnedAllowedChars.length
  for (var i=0; i<charResponse; i++) {
    password = password +  returnedAllowedChars.charAt(Math.floor(Math.random() * 
    len));
  }
 
  return password
}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
