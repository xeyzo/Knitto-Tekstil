function isPalindrome(str:string) {
    const data =  str.split('').reverse().join('') === str;
    if (data == true) {
        console.log("is palindrome")
    }else{
        console.log("not palindrome")
    }    
  }

isPalindrome('1221')