const textMapping = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const reverseMapping = Object.fromEntries(
    Object.entries(textMapping).map(([key, value]) => [value, key])
);

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText.split('').map(char => textMapping[char] || char).join('');
    displayResult(encryptedText);
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText.split(/(enter|imes|ai|ober|ufat)/).map(part => reverseMapping[part] || part).join('');
    displayResult(decryptedText);
}

function displayResult(text) {
    const outputText = document.getElementById('outputText');
    const noResult = document.getElementById('noResult');
    if (text.trim() === '') {
        outputText.innerHTML = ''; // Clear the content of the simulated textarea
        noResult.style.display = 'flex'; // Show the "no result" message
    } else {
        outputText.innerHTML = text; // Set the content of the simulated textarea
        noResult.style.display = 'none'; // Hide the "no result" message
    }
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    const range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Clean up
}
