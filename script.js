// Assignment Code
var generateBtn = document.querySelector("#generate");

let completedPassword = document.querySelector("#password");

// Write password to the #password input
function makePassword(length, useLowercase, useUppercase, useNumeric, useSpecial) {

  let characters = "";
  
  if (useLowercase) characters = characters + "abcdefghijklmnopqrstuvwxyz";
  if (useUppercase) characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumeric) characters = characters + "1234567890";
  if (useSpecial) characters = characters + "!@#$%^&*()+-?.><;:'[]{}~";
  
  if (!characters.length) {
    alert("Invalid, select at least 1 character type.");
    return;
  }

  let password = "";
  
  for (let i = 0; i < length; i++) {

    let randomNum = Math.floor(Math.random() * characters.length);
    password = password + characters.charAt(randomNum);
  
  }

  return password

}

function userInput() {
  // alert("Welcome to the password generator.");
  
  let length = parseInt(prompt("Choose a password with a length of 8 - 128 characters."));
  
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Input a numerical value between 8 and 128 to generate the password length.");
    return;

  }

  let useLowercase = confirm("Do you want to use lowercase characters?");
  let useUppercase = confirm("Do you want to use uppercase character?");
  let useNumeric = confirm("Do you want to use numbers?");
  let useSpecial = confirm("Do you want to use special characters?");

  let password = makePassword(length, useLowercase, useUppercase, useNumeric, useSpecial);

  if (password) {
    // alert("Password complete: " + password)
    completedPassword.textContent = password;
  }
}

generateBtn.addEventListener("click", userInput)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
