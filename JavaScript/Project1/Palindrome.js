document.getElementById("check-btn").addEventListener("click", function() {
    let valueInput = document.getElementById("text-input").value.toLowerCase();
    
    if (valueInput === '') {
        alert('Please input a value');
    } else {
        let isPalindro= checkPalindrome(valueInput);
        let resultElement = document.getElementById('result');
        resultElement.textContent = isPalindro ? valueInput + ' is a palindrome' : valueInput + ' is not a palindrome';
    }
});



const checkPalindrome = (hola) => {
    const cleanedStr = hola.replace(/[^a-z0-9]/g, '')
    let palind='';
    for (let i = cleanedStr.length -1; i >=0; i--) {
        palind+=cleanedStr[i];
    }

    console.log(palind);
    return cleanedStr === palind;}

// checkPalindrome("hola");
