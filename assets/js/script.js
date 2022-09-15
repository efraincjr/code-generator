// Assignment Code
//refers to generate button in html
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passOpts = [];
  var passLength = prompt('Choose password length (9-100 Characters)');

  if (passLength >= 9 && passLength <= 100) {

  } else {
    alert('Must be between 9 and 100')
    return;
  };

  var lowerCase = confirm('Do you wish to have lowercase letters?');
  if (lowerCase) {
    passOpts.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',)
  };

  var upperCase = confirm ('Do you wish to have uppercase leters?');
  if (upperCase) {
    passOpts.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',)
  };
  var numberType = confirm ('Do you wish to have number character?');
  if (numberType) {
    passOpts.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9',)
  };
  var specialType = confirm ('Do you wish to have a Special character?');
  if (specialType) {
    passOpts.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')',)
  };
console.log (passOpts);


function generatePass(passLength,passOpts) {
let password = [];
for (let i = 0; i < passLength; i++) {
  password.push(passOpts[Math.floor(math.random() * passOpts.Length)]);
};
console.log(password)
return password

}
var password = generatePass(passLength, passOpts).join('');
var passText = document.querySelector('#password');
passText.value = password;
return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);