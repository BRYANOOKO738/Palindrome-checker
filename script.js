document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value.trim();

    if (textInput === '') {
        alert('Please input a value');
        return;
    }

    const resultElement = document.getElementById('result');
    const normalizedText = textInput.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if (isPalindrome(normalizedText)) {
        resultElement.textContent = `${textInput} is a palindrome`;
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
    }
});

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
