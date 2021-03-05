let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let str = document.querySelector('form input[name=word]').value;
    let subStr = str.slice (1, str.length);
    let resultStr;

    if (str === str.toUpperCase()) {
        resultStr = str.toLowerCase(); 
    } else if (str === str[0].toLowerCase() + subStr.toUpperCase()) {
        resultStr = str[0].toUpperCase() + subStr.toLowerCase();
    } else {
        resultStr = str;
    }
    
    alert(resultStr);  
})

