# ECMAScript 6 (ES6) - ECMAScript 2015 Overview

## Table of Contents
1. [Statements and Declarations](#statements-and-declarations)
2. [Arrow Functions](#arrow-functions)
3. [Default Parameters](#default-parameters)
4. [Rest Parameter](#rest-parameter)
5. [Iterables & Iterators](#iterables-and-iterators)
6. [Constants vs Variables](#constants-vs-variables)
7. [Block-scoped Variables](#block-scoped-variables)
8. [Arrow Functions and Default Parameters](#arrow-functions-and-default-parameters)
9. [Rest and Spread Function Parameters](#rest-and-spread-function-parameters)
10. [String Templating](#string-templating)
11. [Object Creation and Properties](#object-creation-and-properties)
12. [Iterators and For-of Loops](#iterators-and-for-of-loops)
13. [Modern JavaScript](#modern-javascript)
14. [JavaScript Fundamentals](#javascript-fundamentals)
15. [Module Patterns](#module-patterns)
16. [Var, Let, and Const](#var-let-and-const)
17. [JavaScript Tutorial](#javascript-tutorial)
18. [JavaScript Object Basics](#javascript-object-basics)
19. [Object-oriented JavaScript](#object-oriented-javascript)
20. [Object Prototypes](#object-prototypes)
21. [Inheritance in JavaScript](#inheritance-in-javascript)
22. [Closures](#closures)
23. [This/Self](#this-self)

---

## Statements and Declarations
In ES6, new ways to declare variables and constants were introduced with `let` and `const`, in addition to the traditional `var`.

- **var**: Function-scoped or globally-scoped.
- **let**: Block-scoped.
- **const**: Block-scoped, but cannot be reassigned.

Example:
```javascript
var x = 10;
let y = 20;
const z = 30;
```

## Arrow Functions
Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value.

Syntax:
```javascript
const add = (a, b) => a + b;
```

## Default Parameters
Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

Example:
```javascript
function multiply(a, b = 1) {
    return a * b;
}
```

## Rest Parameter
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

Example:
```javascript
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
```

## Iterables and Iterators
Iterables are objects that can be iterated over, such as arrays and strings. Iterators are objects that define a sequence and potentially a return value upon completion.

Example:
```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
```

## Constants vs Variables
- **Variable** (`let`, `var`): Can be reassigned.
- **Constant** (`const`): Cannot be reassigned.

Example:
```javascript
let a = 5;
a = 10; // Allowed

const b = 5;
b = 10; // Error
```

## Block-scoped Variables
Block-scoped variables, declared with `let` and `const`, are limited to the block, statement, or expression where they are used.

Example:
```javascript
{
    let a = 10;
    const b = 20;
    console.log(a); // 10
}
console.log(a); // Error: a is not defined
```

## Arrow Functions and Default Parameters
Arrow functions can also have default parameters.

Example:
```javascript
const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
```

## Rest and Spread Function Parameters
- **Rest**: Collects all remaining elements into an array.
- **Spread**: Expands an array into individual elements.

Example:
```javascript
function display(...args) {
    console.log(args);
}

display(1, 2, 3); // [1, 2, 3]

const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```

## String Templating
Template literals allow for embedded expressions and multi-line strings using backticks (`` ` ``).

Example:
```javascript
const name = 'John';
const message = `Hello, ${name}!`;
console.log(message); // Hello, John!
```

## Object Creation and Properties
Enhanced object literals in ES6 allow for concise methods and properties.

Example:
```javascript
const name = 'John';
const user = {
    name,
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
```

## Iterators and For-of Loops
`for-of` loops provide a simpler way to iterate over iterable objects like arrays, strings, etc.

Example:
```javascript
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);
}
```

## Modern JavaScript
Modern JavaScript refers to the use of ES6+ features that simplify code and improve performance, including promises, async/await, modules, and more.

## JavaScript Fundamentals
JavaScript fundamentals cover basic concepts like variables, data types, functions, control structures, and events.

## Module Patterns
Module patterns help organize code by encapsulating related functionality into a single unit.

Example:
```javascript
const myModule = (() => {
    const privateVar = 'secret';
    return {
        publicMethod() {
            console.log(privateVar);
        }
    };
})();
```

## Var, Let, and Const
- **var**: Function-scoped, hoisted.
- **let**: Block-scoped, not hoisted.
- **const**: Block-scoped, not hoisted, constant reference.

## JavaScript Tutorial
A JavaScript tutorial typically covers the language's basics, syntax, and core concepts.

## JavaScript Object Basics
Objects in JavaScript are collections of key-value pairs. They can be created using object literals or constructors.

Example:
```javascript
const person = {
    name: 'Alice',
    age: 25
};
```

## Object-oriented JavaScript
Object-oriented programming in JavaScript involves using prototypes and classes to create reusable and modular code.

## Object Prototypes
Prototypes are the mechanism by which JavaScript objects inherit properties and methods from other objects.

Example:
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
};

const alice = new Person('Alice');
alice.greet(); // Hello, Alice!
```

## Inheritance in JavaScript
Inheritance in JavaScript can be achieved using prototypes and the `class` syntax introduced in ES6.

Example:
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

## Closures
Closures are functions that have access to variables from another function’s scope.

Example:
```javascript
function outer() {
    const outerVar = 'I am outside!';
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const innerFunc = outer();
innerFunc(); // I am outside!
```

## This/Self
`this` refers to the context in which a function is called. It can vary based on how the function is called. In arrow functions, `this` is lexically bound.

Example:
```javascript
const obj = {
    name: 'Alice',
    regularFunction() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction(); // Alice
obj.arrowFunction(); // undefined
```

---
