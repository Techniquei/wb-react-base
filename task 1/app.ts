type Operation = (a: number, b: number) => number;
type NumberSystems = 2 | 10 | 16;

const addition: Operation = (a, b) => a + b;
const subtraction: Operation = (a, b) => a - b;
const multiplication: Operation = (a, b) => a * b;
const division: Operation = (a, b) => a / b;

function logResults(outputNumberSystem: NumberSystems): void {
    type ToStringWithSystem = (number: number) => string;
    const toStringSystem: ToStringWithSystem = (num) => num.toString(outputNumberSystem);

    console.log(`addition(${toStringSystem(a)}, ${toStringSystem(b)}): ${toStringSystem(addition(a, b))}`)
    console.log(`subtraction(${toStringSystem(a)}, ${toStringSystem(b)}): ${toStringSystem(subtraction(a, b))}`)
    console.log(`multiplication(${toStringSystem(a)}, ${toStringSystem(b)}): ${toStringSystem(multiplication(a, b))}`)
    console.log(`division(${toStringSystem(a)}, ${toStringSystem(b)}): ${toStringSystem(division(a, b))} \n`)
}

let a: number = 24;
let b: number = 5;
logResults(10);

a = 0b11000;
b = 0b101;
logResults(2);

a = 0xd831;
b = 0xfa;
logResults(16);
