var firstname = 'Zoe';

(function () {
    var firstname = 'John';
    console.log(firstname);
}());

console.log(firstname);

//John is printed first because, in the S T A C K, the expression interrupts.
//The firstname variable inside the expression does not affect the firstname variable outside the expression
// that's because the expression's firstname variable is S C O P E D to the function inside the expression.