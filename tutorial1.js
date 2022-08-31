// Exercise 1. Implement sum(…terms)
console.log("Exercise 1. Implement sum(…terms)")
function sum (...number){
    if (number.length == 0){
        return ("Error('At least one number is expected')")
    }
    else{
        /*
        let sum = 0;
        for (let i=0 ; i < number.length ; i++){
            sum += number[i]
        }
        return sum */
        const initialValue = 0;
        return number.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    }
}
console.log(sum()) // throws Error('At least one number is expected')
console.log(sum(1)) // prints 1
console.log(sum(1, 2, 3)) // prints 6


// Exercise 2. Implement filter(array, predicate)
console.log("Exercise 2. Implement filter(array, predicate)")
function filter (array, predict){
    return array.filter(predict)
}
const array = [1, 2, 3, 4, 5]
const filteredArray = filter(array, item => item > 2) // [3, 4, 5]
console.log(array)
console.log(filteredArray)

// Excercise 3. Implement map(array, transform)
console.log("Excercise 3. Implement map(array, transform)")
function map (array, transform){
    return array.map(transform)
}
//const array = [1, 2, 3, 4, 5]
const doubled = map(array, item => item * 2) // [2, 4, 6, 8, 10]
console.log(array)
console.log(doubled)

// Excercise 4. Basic CSV parsing into literal objects
console.log("Excercise 4. Basic CSV parsing into literal objects")
// This code downloads a CSV file from my website, reads it as text
// and calls `processData(csvText)` on success. Do not worry about
// the details about `fetch` for now, as we will cover them later.

fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
  .then(res => res.text())
  .then(processData)
  .catch(console.log)

function processData (csvText) {
  // write your code here
}
