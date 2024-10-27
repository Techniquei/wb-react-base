var addition = function (a, b) { return a + b; };
var subtraction = function (a, b) { return a - b; };
var multiplication = function (a, b) { return a * b; };
var division = function (a, b) { return a / b; };
function logResults(outputNumberSystem) {
    var toStringSystem = function (num) { return num.toString(outputNumberSystem); };
    console.log("addition(".concat(toStringSystem(a), ", ").concat(toStringSystem(b), "): ").concat(toStringSystem(addition(a, b))));
    console.log("subtraction(".concat(toStringSystem(a), ", ").concat(toStringSystem(b), "): ").concat(toStringSystem(subtraction(a, b))));
    console.log("multiplication(".concat(toStringSystem(a), ", ").concat(toStringSystem(b), "): ").concat(toStringSystem(multiplication(a, b))));
    console.log("division(".concat(toStringSystem(a), ", ").concat(toStringSystem(b), "): ").concat(toStringSystem(division(a, b)), " \n"));
}
var a = 24;
var b = 5;
logResults(10);
a = 24;
b = 5;
logResults(2);
a = 0xd831;
b = 0xfa;
logResults(16);
