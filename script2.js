//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



//Writing string to pull from depending on user input
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let special = ["!", "@", "#", "$", "%", "&", "?"]

var generateBtn = document.querySelector("#generate");
//Function to collect input on what user wants in password
function startPrompt() {
    let password = []
    let allPossible = []
    let length = prompt("length of password, between 8 and 128 characters")
    let first = confirm("Do you want to include lowercase letters?")
    let second = confirm("Do you want to include uppercase letters?")
    let third = confirm("Do you want to include numbers?")
    let fourth = confirm("Do you want to include special characters?")

    if (first) {
        allPossible = [...allPossible, ...lower]
    }
    if (second) {
        allPossible = [...allPossible, ...number]
    }
    if (third) {
        allPossible = [...allPossible, ...upper]
    }
    if (fourth) {
        allPossible = [...allPossible, ...special]
    }

    for (let i = 0; i < length; i++) {
        let randomChar = allPossible[Math.floor(Math.random() * allPossible.length)]
        password.push(randomChar)
    }
    return password.join("")

}

function writePassword() {
    var password = startPrompt();
    var passwordText = document.querySelector("#password");
    passwordText.value = password
}
document.getElementById("generate").addEventListener("click", writePassword)
