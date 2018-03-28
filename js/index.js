// let greet = 'Hello World!';
// alert(greet);
// greet = 'Goodbye';
// alert(greet);

// // String
// const someName = 'Jon';

// // Number
// const age = 42.5;

// // Boolean
// const married = true; // false

// // undefined
// //const notDefined = undefined;
// let notDefined;  

// // null
// const empty = null;

// // Object
// const someObj = {};

// // Symbol
// const someSym = Symbol();

const user = prompt('Enter your name');
prn('Hello ' + user);

const age = parseFloat(prompt('Enter your age'));
const nextAge = addOne(age);
prn('You are ' + checkAge(age));
prn('Next year you will be ' + nextAge);


function addOne(arg) {
    const result = arg + 1;
    return result;
}

function checkAge(age) {
    if ( age >= 18 && age <= 70 ) {
        return 'Adult';
    } else if (age > 70) {
        return 'Old';
    } else {
        return 'Child';
    }
}

function prn(val) {
    document.write(val + '<br>');
}




const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
   const d = calcDisc(a, b, c); 
   
   
   return 'x1 = ' + x1 + 'x2 = ' + x2;
}

function calcDisc(a, b, c) {
    //
}