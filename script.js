let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let str = document.querySelector('form input[name=word]').value;
    let arr = str.split(' ');
    let resultArr = [];
    let subWord = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        subWord[i] = arr[i].slice(1, arr[i].length);
        if (arr[i] === arr[i].toUpperCase()) {
            resultArr[i] = arr[i].toLowerCase(); 
        } else if (arr[i] === arr[i][0].toLowerCase() + subWord[i].toUpperCase()) {
        resultArr[i] = arr[i][0].toUpperCase() + subWord[i].toLowerCase();
        } else {
        resultArr[i] = arr[i];
        }
    }
    console.log(resultArr);
    
    alert(resultArr.join(' '));  
})






// let button = document.querySelector('button[type=submit]')
// button.addEventListener('click', function() {
//     let str = document.querySelector('form input[name=word]').value;
//     let arr = str.split(' ');
//     let resultArr = [];
//     let subWord = [];

//     for (let i = 0; i <= arr.length - 1; i++) {
        
//         subWord[i] = arr[i].slice(1, arr[i].length);
        

//         if (arr[i] === arr[i].toUpperCase()) {
//             resultArr[i] = arr[i].toLowerCase(); 
//         } else if (arr[i] === arr[i][0].toLowerCase() + subWord[i].toUpperCase()) {
//         resultArr[i] = arr[i][0].toUpperCase() + subWord[i].toLowerCase();
//         } else {
//         resultArr[i] = arr[i];
//         }
    
//     }
//     console.log(resultArr);
    
//     alert(resultArr.join(' '));  
// })



// let button = document.querySelector('button[type=submit]')
// button.addEventListener('click', function() {
//     let str = document.querySelector('form input[name=word]').value;
//     let subStr = str.slice (1, str.length);
//     let resultStr;

//     if (str === str.toUpperCase()) {
//         resultStr = str.toLowerCase(); 
//     } else if (str === str[0].toLowerCase() + subStr.toUpperCase()) {
//         resultStr = str[0].toUpperCase() + subStr.toLowerCase();
//     } else {
//         resultStr = str;
//     }
    
//     alert(resultStr);  
// })