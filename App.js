function calculateSum() {
    const input = document.getElementById('inputText').value;
    if (input) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += (i + 1);
        }
        const singleDigit = reduceToSingleDigit(sum);
        document.getElementById('result').innerText = `Result: ${singleDigit}`;
    }
}

function reduceToSingleDigit(num) {
    return num === 0 ? 0 : 1 + (num - 1) % 9;
}
