// Dom Elements
const successText = document.getElementById('successText');
const warningText = document.getElementById('warningText');
const tryLeft = document.getElementById('tryLeft');
const pinGenerator = document.getElementById('pin-generator');
const generateBtn = document.querySelector('.generate-btn');
const submitBtn = document.querySelector('.submit-btn');

// Hide by Default
function hideDefault() {
    successText.style.display = 'none';
    warningText.style.display = 'none';
}

hideDefault();

// Random number Generate between 1000 and 9999
function RandomNumber() {
    let number = Math.floor(1000 + Math.random() * 8999);
    return number;
}

// Generate btn
generateBtn.addEventListener('click', generateRandom);

// Click and generate Number
let generatedPin = 0;

function generateRandom() {
    let number = RandomNumber();
    pinGenerator.value = number;
    generatedPin = number;
    hideDefault();
    submitBtn.style.display = 'inline-block';

}

// Pin Submitting button
submitBtn.addEventListener('click', submitHelper);

function submitHelper() {
    const pinInsert = document.getElementById('pinInsert');
    const pinValue = pinInsert.value;

    if (parseInt(pinValue) === parseInt(generatedPin)) {
        successText.style.display = 'block';
        warningText.style.display = 'none';
        pinInsert.value = "";
        pinGenerator.value = "";
    } else {
        warningText.style.display = 'block';
        successText.style.display = 'none';
        tryCount();
    }

}

let count = 0; // For try count

function tryCount() {
    const insertValue = document.getElementById('pinInsert').value;
    count++;

    if (count == 1 && generatedPin !== insertValue) {
        tryLeft.textContent = '2 try left';
    } else if (count == 2 && generatedPin !== insertValue) {
        tryLeft.textContent = '1 try left';
    } else if (count == 3 && generatedPin !== insertValue) {
        tryLeft.style.display = 'none';
        submitBtn.style.display = 'none';
        pinInsert.value = "";
        pinGenerator.value = "";
    }
}

// Basic Calculator
function getDigit(digit) {
    // length 0-3
    if (pinInsert.value.length > 3) {
        console.log('Sorry!')
    } else {
        pinInsert.value += digit;
    }
    console.log(pinInsert.value);
}

// For clearing display
function clearDisplay() {
    pinInsert.value = "";
    hideDefault();
};

// for removing single digit
function removeDigit() {
    pinInsert.value = pinInsert.value.slice(0, -1);
}

