//basic types

let age: number = 30
let firstaName: string = 'Mario'
let isFictional: boolean

age = 35
firstaName = 'Adele'
isFictional = false

let planet = 'Earth'
let moons = 1
let isLarge = false

// null & undefined

let something: null
let anotherThing: undefined

//arrays

let names: string[] = ['Mario, Adele', 'Steve']
let ages: number[] = [12, 33, 50]

names.push('Nina')
ages.push(35)

let fruits = ['apple', 'mango']
fruits.push('peach')

const f = fruits[3]

let things = [1, true, 'hello']
const t = things[0]

//objects

let user: {firstName: string, age: number, id: number} = {
  firstName:'Mario',
  age: 30,
  id: 1
}

user.firstName = 'Steve'
user.id = 2
const id = user.id;


//functions

function addTwoNumbers(a: number, b: number): number {
  return a + b 
}

const subtractTwoNumbers = (a: number, b: number): number {
  return a - b
}

addTwoNumbers(3,4)
subtractTwoNumbers(10, 7)

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0)
  console.log(total)
}

addAllNumbers([2, 4, 7, 8])

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`
}

const result = formatGreeting('mario', 'hello')