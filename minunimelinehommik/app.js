 fetch('https://dummyjson.com/products').then(response => response.json()).then(({products}) => {
     const harderWay = products.filter((product) => product.brand === 'Apple')
     console.log(harderWay);
 })

// JS built in objects:

const stringObject = new String('foo');
const numberObject = new Number(45);
console.log(stringObject);
console.log(numberObject);

//Type casting:

const isString = '45';
const isNumber = 45;

console.log(Number(isString) + isNumber);
console.log(typeof String(isNumber), String(isNumber));
console.log(Boolean(isNumber));

// Equality comparisons:

console.log('== ', isString == isNumber);
console.log('=== ', isString === isNumber);
console.log(Number(isString) === isNumber);

// Indexed collections aka Array:

const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

// Looping arrays - for, forEach, for...in, for...of:

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);    
} 

myArray.forEach((number, index, arr) => {
    console.log(number, index, arr)
});

for(const number in myArray) {
    console.log('for...in', number);
}

for(const number of myArray) {
    console.log('for...of', number);
}

// Conditional statements - if else

if (true) {
    // Kui on true, käivitub see koodiblokk
} else {
    // Kui on false, käivitub see koodiblokk
}

// Error exception

if (!true) {
    // Kui on true, käivitub see koodiblokk
} else if (!true) {
    // Kui on false ja else..if on õige
} else {
    throw new Error('Midagi läks valesti')
}


//Functions & parameters
const clientName = undefined;
const clientLastName = undefined;


function myKevin(str1 = "Eesnimi", str2 = "Perekonnanimi") {
    console.log(`${str1} ${str2}`)
    return `${str1} ${str2}`;
}

myKevin(clientName, clientLastName);

//Arrow functions

const myKevin = (str1 = "Eesnimi", str2 = "Perekonnanimi") => {
    console.log(`${str1} ${str2}`)
    return `${str1} ${str2}`;
}

myKevin(clientName, clientLastName)

//Built-in functions

console.log(clientName.charAt(0))
console.log(clientName.length)