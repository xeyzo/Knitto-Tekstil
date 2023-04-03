"use strict";
function isPalindrome(str) {
    var data = str.split('').reverse().join('') === str;
    if (data == true) {
        console.log("is palindrome");
    }
    else {
        console.log("not palindrome");
    }
}
isPalindrome('1221');
