"use strict";
//basic types
let age = 30;
let firstaName = 'Mario';
let isFictional;
age = 35;
firstaName = 'Adele';
isFictional = false;
let planet = 'Earth';
let moons = 1;
let isLarge = false;
// null & undefined
let something;
let anotherThing;
//arrays
let names = ['Mario, Adele', 'Steve'];
let ages = [12, 33, 50];
names.push('Nina');
ages.push(35);
let fruits = ['apple', 'mango'];
fruits.push('peach');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
//objects
let user = {
    firstName: 'Mario',
    age: 30,
    id: 1
};
user.firstName = 'Steve';
user.id = 2;
const id = user.id;
//functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 4);
subtractTwoNumbers(10, 7);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([2, 4, 7, 8]);
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('mario', 'hello');
// any type
let time;
let title;
time = 10;
time = true;
title = 25;
title = {
    hello: 'world'
};
let difThings = ['hello', true, null, 11];
difThings.push({ id: 22 });
