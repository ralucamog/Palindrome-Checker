document.getElementById('check-btn').addEventListener('click', function () {
    const textInput = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (textInput === '') {
        alert('Please input a value');
        return;
    }
    const reversedTextInput = textInput.split('').reverse().join('');
    const resultElement = document.getElementById('result');
    if (textInput === reversedTextInput) {
        resultElement.textContent = textInput + ' is a palindrome';
    } else {
        resultElement.textContent = textInput + ' is not a palindrome';
    }
});
