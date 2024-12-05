const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

const lengthEL = document.getElementById('length'); // Assuming this is a range or input element.
const lowercaseEL = document.getElementById('lowercase');
const uppercaseEL = document.getElementById('uppercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordEL = document.getElementById('password'); // Assuming this is an input or textarea element.

generateBtn.addEventListener("click", function () {
    const length = parseInt(lengthEL.value); // Get the length value as an integer.
    let characters = "";
    let password = "";

    if (lowercaseEL.checked) {
        characters += lowercaseLetters;
    }
    if (uppercaseEL.checked) {
        characters += uppercaseLetters;
    }
    if (numbersEL.checked) {
        characters += numbers;
    }
    if (symbolsEL.checked) {
        characters += symbols;
    }

    // Ensure there's at least one type of character selected
    if (characters.length === 0) {
        passwordEL.value = "Please select at least one option.";
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEL.value = password; // Set the generated password.
});
