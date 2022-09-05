// index.js
//import fetch from 'node-fetch'
import {sum} from './src/ex1.js'
import {filter} from './src/ex2.js'
import {map} from './src/ex3.js'
//import { parseCsvImperative } from './src/ex4-ex5.js'
//import { parseCsvFunctional } from './src/ex4-ex5.js'
//import { pullAndAnalyzeCsv } from './src/ex4-ex5.js'

console.log("Exercise 1. Implement sum(…terms)")
console.log(sum(1)) // prints 1
console.log(sum(1, 2, 3)) // prints 6

console.log("Exercise 2. Implement filter(array, predicate)")
const array = [1, 2, 3, 4, 5]
const filteredArray = filter(array, item => item > 2) // [3, 4, 5]
console.log(array)
console.log(filteredArray)

console.log("Excercise 3. Implement map(array, transform)")
//const array = [1, 2, 3, 4, 5]
const doubled = map(array, item => item * 2) // [2, 4, 6, 8, 10]
console.log(array)
console.log(doubled)
