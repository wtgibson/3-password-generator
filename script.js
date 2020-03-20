// Click button generates randomized password


// Presented with a series of prompts for password criteria


// User selects what criteria to include in the password

// // Computer prompts for the length of the password & user chooses a length of at least 8 characters and no more than 128 characters


// var passwordLength = prompt("How many characters do you want in the password? min = 8, max = 128)")

// console.log("passwordLength = " + passwordLength)

// // Computer prompts what character types to include & user chooses lowercase, uppercase, numeric, and/or special characters

// var lowercaseCharacters = confirm("Do you want the password to include: lowercase characters?")

// console.log(lowercaseCharacters)

// var upperCaseCharacters = confirm("Do you want the password to include: uppercase characters?")

// console.log(upperCaseCharacters)

// var numericCharacters = confirm("Do you want the password to include: numeric characters?")

// console.log(numericCharacters)

// var specialCharacters = confirm("Do you want the password to include: special characters?")

// console.log(specialCharacters)

// Input should be validated and at least one character type should be selected


// After all prompts are answered a password that matches the selected criteria is generated

    // For loop, random number function

var lowerCase1 = ["a","b","c"];
var upperCase2 = ["A","B","C"];
var numericCase3 = [1, 2, 3];
var specialCase4 = ["!", "@", "#"];

console.log(lowerCase1[0]);
console.log(upperCase2[0]);
console.log(numericCase3[0]);
console.log(specialCase4[0]);

var characters = [
    ["a", "b", "c"],
    ["A", "B", "C"],
    [1, 2, 3],
    ["!", "@", "#"]
];

console.log(characters[0][0]);
console.log(characters[0][0]);
console.log(characters[0][0]);
console.log(characters[0][0]);

var charactersAll = {
    lowerCase : ["a","b","c"],
    upperCase : ["A","B","C"],
    numericCase :[1, 2, 3],
    specialCase : ["!", "@", "#"]
};

console.log(charactersAll.lowerCase[0]);
console.log(charactersAll.upperCase[0]);
console.log(charactersAll.numericCase[0]);
console.log(charactersAll.specialCase[0]);

var generatedPasswordCharacters = []

// Defining randomizing functions for each type of character

function randomLowerCase() {
    var randomLowerCaseIndex = Math.floor(Math.random() * charactersAll.lowerCase.length);
    // console.log(charactersAll.lowerCase[randomLowerCaseIndex]);
    var randomLowerCase = (charactersAll.lowerCase[randomLowerCaseIndex]);
    generatedPasswordCharacters.push(randomLowerCase)
}

randomLowerCase()

var generatedPassword = generatedPasswordCharacters.join("")

console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

console.log("generatedPassword = " + generatedPassword)

function randomUpperCase() {
    var randomUpperCaseIndex = Math.floor(Math.random() * charactersAll.upperCase.length);
    // console.log(charactersAll.upperCase[randomUpperCaseIndex]);
    var randomUpperCase = (charactersAll.upperCase[randomUpperCaseIndex]);
    generatedPasswordCharacters.push(randomUpperCase)
}

randomUpperCase()

var generatedPassword = generatedPasswordCharacters.join("")

console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

console.log("generatedPassword = " + generatedPassword)

function randomNumericCase() {
    var randomNumericCaseIndex = Math.floor(Math.random() * charactersAll.numericCase.length);
    // console.log(charactersAll.numericCase[randomNumericCaseIndex]);
    var randomNumericCase = (charactersAll.numericCase[randomNumericCaseIndex]);
    generatedPasswordCharacters.push(randomNumericCase)
}

randomNumericCase()

var generatedPassword = generatedPasswordCharacters.join("")

console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

console.log("generatedPassword = " + generatedPassword)

function randomSpecialCase() {
    var randomSpecialCaseIndex = Math.floor(Math.random() * charactersAll.specialCase.length);
    // console.log(charactersAll.specialCase[randomSpecialCaseIndex]);
    var randomSpecialCase = (charactersAll.specialCase[randomSpecialCaseIndex]);
    generatedPasswordCharacters.push(randomSpecialCase)
}

randomSpecialCase()

var generatedPassword = generatedPasswordCharacters.join("")

console.log("generatedPasswordCharacters = " + generatedPasswordCharacters)

console.log("generatedPassword = " + generatedPassword)

// For Loops functions of password length & character types

// for (var i = 0; i < charactersAll.lowerCase.length; i++) {
//     console.log("charactersAll.lowercase = " + charactersAll.lowerCase[i])
// }

// function randomCharacter() {
//     for (i = 0; i <= passwordLength; i++) {
        
//         for (i = 0; i <= charactersAll.length; i++) {
//             console.log("randomArrayIndex = " + randomArrayIndex)
//         }

//         console.log("randomArrayIndex = " + randomArrayIndex)

//         for (i = 0; i <= charactersAll[0].length; i++) {
//             console.log("randomCharacterIndex = " + randomArrayIndex)
//         }

//         var randomSingle = charactersAll[randomArrayIndex][randomCharacterIndex]

//         console.log("randomSingle = " + randomSingle)
//     }
// }

// if (lowerCase === true) {
//     // include lowerCase in password
// }

// else (lowercase === false) {
//     alert("No lowercase characters selected")
// }

// for loop for the # length of user input

// Then generated password is either displayed as an alert or written to the page

