// Click button generates randomized password

// document.getElementById("button").onclick.generatePasswordCharacters();

// Presented with a series of prompts for password criteria & user selects what criteria to include in the password

// // Computer prompts for the length of the password & user chooses a length of at least 8 characters and no more than 128 characters

var passwordLength = prompt("How many characters do you want in the password? min = 8, max = 128)");

while (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid entry!");
    passwordLength = prompt("How many characters do you want in the password? min = 8, max = 128)");
}

    // var lowerCaseCharacters = confirm("Do you want the password to include: lowercase characters?");
    // var upperCaseCharacters = confirm("Do you want the password to include: uppercase characters?");
    // var numericCharacters = confirm("Do you want the password to include: numeric characters?");
    // var specialCharacters = confirm("Do you want the password to include: special characters?");

var passwordLengthInteger = parseInt(passwordLength);

console.log("passwordLength = " + passwordLengthInteger);

// // Computer prompts what character types to include & user chooses lowercase, uppercase, numeric, and/or special characters

var lowerCaseCharacters = confirm("Do you want the password to include: lowercase characters?");

console.log("Lowercase Characters = " + lowerCaseCharacters);

var upperCaseCharacters = confirm("Do you want the password to include: uppercase characters?");

console.log("Uppercase Characters = " + upperCaseCharacters);

var numericCharacters = confirm("Do you want the password to include: numeric characters?");

console.log("Numeric Characters = " + numericCharacters);

var specialCharacters = confirm("Do you want the password to include: special characters?");

console.log("Special Characters = " + specialCharacters);

while (lowerCaseCharacters + upperCaseCharacters + numericCharacters + specialCharacters < 1) {
    lowerCaseCharacters = confirm("Do you want the password to include: lowercase characters?");

    console.log("Lowercase Characters = " + lowerCaseCharacters);

    upperCaseCharacters = confirm("Do you want the password to include: uppercase characters?");

    console.log("Uppercase Characters = " + upperCaseCharacters);

    numericCharacters = confirm("Do you want the password to include: numeric characters?");

    console.log("Numeric Characters = " + numericCharacters);

    specialCharacters = confirm("Do you want the password to include: special characters?");

    console.log("Special Characters = " + specialCharacters);

    if (lowerCaseCharacters + upperCaseCharacters + numericCharacters + specialCharacters < 1) {
        alert("Must choose at least 1 type of character!")
    }
}

alert("Criteria validated: Click generate password button!")

// Input should be validated and at least one character type should be selected


// After all prompts are answered a password that matches the selected criteria is generated

    // For loop, random number function

// var lowerCase1 = ["a","b","c"];
// var upperCase2 = ["A","B","C"];
// var numericCase3 = [1, 2, 3];
// var specialCase4 = ["!", "@", "#"];

// console.log(lowerCase1[0]);
// console.log(upperCase2[0]);
// console.log(numericCase3[0]);
// console.log(specialCase4[0]);

// var characters = [
//     ["a", "b", "c"],
//     ["A", "B", "C"],
//     [1, 2, 3],
//     ["!", "@", "#"]
// ];

// console.log(characters[0][0]);
// console.log(characters[0][0]);
// console.log(characters[0][0]);
// console.log(characters[0][0]);

var charactersAll = {
    lowerCase : ["a","b","c","d"],
    upperCase : ["A","B","C", "D"],
    numericCase :[1, 2, 3, 4],
    specialCase : ["!", "@", "#", "$"]
};

// console.log(charactersAll.lowerCase[0]);
// console.log(charactersAll.upperCase[0]);
// console.log(charactersAll.numericCase[0]);
// console.log(charactersAll.specialCase[0]);

var generatedPasswordCharacters = [];

var generatedPassword = "";

// Defining randomizing functions for each type of character

function randomLowerCase() {
    var randomLowerCaseIndex = Math.floor(Math.random() * charactersAll.lowerCase.length);
    // console.log(charactersAll.lowerCase[randomLowerCaseIndex]);
    var randomLowerCase = (charactersAll.lowerCase[randomLowerCaseIndex]);
    generatedPasswordCharacters.push(randomLowerCase)
}

// randomLowerCase()

// var generatedPassword = generatedPasswordCharacters.join("")

// console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

// console.log("generatedPassword = " + generatedPassword)

function randomUpperCase() {
    var randomUpperCaseIndex = Math.floor(Math.random() * charactersAll.upperCase.length);
    // console.log(charactersAll.upperCase[randomUpperCaseIndex]);
    var randomUpperCase = (charactersAll.upperCase[randomUpperCaseIndex]);
    generatedPasswordCharacters.push(randomUpperCase)
}

// randomUpperCase()

// var generatedPassword = generatedPasswordCharacters.join("")

// console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

// console.log("generatedPassword = " + generatedPassword)

function randomNumericCase() {
    var randomNumericCaseIndex = Math.floor(Math.random() * charactersAll.numericCase.length);
    // console.log(charactersAll.numericCase[randomNumericCaseIndex]);
    var randomNumericCase = (charactersAll.numericCase[randomNumericCaseIndex]);
    generatedPasswordCharacters.push(randomNumericCase)
}

// randomNumericCase()

// var generatedPassword = generatedPasswordCharacters.join("")

// console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

// console.log("generatedPassword = " + generatedPassword)

function randomSpecialCase() {
    var randomSpecialCaseIndex = Math.floor(Math.random() * charactersAll.specialCase.length);
    // console.log(charactersAll.specialCase[randomSpecialCaseIndex]);
    var randomSpecialCase = (charactersAll.specialCase[randomSpecialCaseIndex]);
    generatedPasswordCharacters.push(randomSpecialCase)
}

// randomSpecialCase()

// var generatedPassword = generatedPasswordCharacters.join("")

// console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

// console.log("generatedPassword = " + generatedPassword)

// For Loops functions of password length & character types

function generatePasswordCharacters() {
    while (8 <= passwordLengthInteger) {
        if (lowerCaseCharacters === true) {
            randomLowerCase();
        }

        else if {null}

        if (upperCaseCharacters === true) {
            randomUpperCase();
        };

        else if {null}

        if (numericCharacters === true) {
            randomNumericCase();
        };

        else if {null}

        if (specialCharacters === true) {
            randomSpecialCase();
        };

        else if {null}
        
        generatedPassword = generatedPasswordCharacters.join("")
    }

    alert(generatedPassword)
}

generatePasswordCharacters()

console.log("passwordLengthInteger = " + passwordLengthInteger)

console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

generatedPassword = generatedPasswordCharacters.join("")

console.log("generatedPassword = " + generatedPassword)

console.log("generatedPassword.length = " + generatedPassword.length)

// Alert to click button for another password!

// for loop for the # length of user input

// Then generated password is either displayed as an alert or written to the page


