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

function addTwoNumbers(a: number, b: number): number  {
  return a + b 
}

const subtractTwoNumbers = (a: number, b: number): number => {
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

// any type

let time : any
let title

time = 10
time = true

title = 25
title = {
  hello: 'world'
}

let difThings: any[] = ['hello', true, null, 11]

difThings.push({id: 22})

function addTogether(value: any): any {
  return value + value
}

const resultOne = addTogether('hello')
const resultTwo = addTogether(5)

//useful when migrating from js to ts
//because using  any won't cause errors initially

//tuples

let person: [string, number, boolean] = ['mario', 30, true]

let hsla: [number, string, string, number]

hsla = [200, '100%', '100%', 1]

let xy: [number, number]
xy = [94.7, 20.1]

function useCoords(): [number, number] {
  const lat = 100
  const long = 50

  return [lat, long]
}

const [lat, long] = useCoords()

//named tuples
let woman: [name: string, age: number]
woman = ['Nina', 25]
console.log(woman[0])