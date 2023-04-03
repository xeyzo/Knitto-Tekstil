"use strict";
function fizzBuzz(awal, akhir) {
    for (var i = awal; i <= akhir; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz");
        if (i % 3 == 0)
            console.log("Fizz");
        if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}
fizzBuzz(1, 50);
