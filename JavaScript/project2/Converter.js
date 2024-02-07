document.getElementById("convert-btn").addEventListener("click", function(){
    let valueInput = document.getElementById("number").value;
    let messages = document.getElementById("output");

    if (valueInput === "") {
        messages.textContent= "Please enter a number.";
    } else if (valueInput < 1) {
        messages.textContent = "Please enter a number greater than or equal to 1.";
    } else if (valueInput > 3999) {
        messages.textContent = "Please enter a number less than or equal to 3999.";
    } else {
        let resultRoman = convert(parseInt(valueInput));
        let resultElement = document.getElementById('output');
        resultElement.textContent = resultRoman;
    }

    
});

const convert = (number) => {
    let result = ""; // Iniciar result
    let numr = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"}
    ];

    
    for (let i = 0; i < numr.length; i++) {
        while (number >= numr[i].value) {
            result += numr[i].symbol;
            number -= numr[i].value;
        }
    }
    
    return result;
}
