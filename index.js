// index.js
//window.alert('JS initialized successfully');
// Exercise 1. Implement sum(…terms)
console.log("Exercise 1. Implement sum(…terms)")
function sum (...number){
  if (number.length == 0){
    throw new Error('At least one number is expected')
  }
  else{
    //TWO POSSIBILITIES
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
//console.log(sum()) // throws Error('At least one number is expected')
console.log(sum(1)) // prints 1
console.log(sum(1, 2, 3)) // prints 6


// Exercise 2. Implement filter(array, predicate)
console.log("Exercise 2. Implement filter(array, predicate)")
function filter (array, predicate){
  let newArray = []
    array.forEach(element => {
      if(predicate(element)){
          newArray.push(element)
      }
    });
    return newArray
    //return array.filter(predicate)
}
const array = [1, 2, 3, 4, 5]
const filteredArray = filter(array, item => item > 2) // [3, 4, 5]
console.log(array)
console.log(filteredArray)

// Excercise 3. Implement map(array, transform)
console.log("Excercise 3. Implement map(array, transform)")
function map (array, transform){
  let newArray = []
    array.forEach(element => {
        newArray.push(transform(element))
    });
    return newArray
    //return array.map(transform)
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
  .then(processDataFunctional)
  .catch(console.log)

function processData (csvText) {
  console.log(csvText)
  let splitLignes = csvText.split("\n")
  let arrayObject = []
  for (let i = 0 ; i<splitLignes.length ; i++){
    let text = splitLignes[i].split(",")
    arrayObject.push({
        username : text[0],
        realname : text[1],
        website : text[2]===""?null:text[2],
        projetname : text[3]
    })
  }
  console.log(arrayObject)
  return(arrayObject)
}

function processDataFunctional (csvText) {
  //console.log(csvText)
  let splitLignes = csvText.split("\n")
  let tableauFormaté = []
  splitLignes.map((item, index)=> {
    let text = item.split(",")
    if (index !== 0){
    tableauFormaté.push({
        username : text[0],
        realName : text[1],
        website : text[2]===""?null:text[2],
        projectName : text[3]
    })}
  })
  //return tableauFormaté
//}
  //console.log(tableauFormaté)
  //Pour exo 5
  console.log("Excercise 5. Computes stats about contributions")
  projectNameAlphabeticOrder(tableauFormaté)
  numberOfUniqueContributors(tableauFormaté)
  AverageContributorName(tableauFormaté)
  MostActiveContributorByNumberOfProject(tableauFormaté, 1)
  MostContributedProjet(tableauFormaté)
}

// Excercise 5. Computes stats about contributions
//5.1 The first project’s name in ascending alphabetic order
function projectNameAlphabeticOrder(array){
  const projectNameSorted = []
    for (let i = 0; i<array.length ; i++){
      projectNameSorted.push(array[i].projectName)
    }
    const filterprojectNameSorted = projectNameSorted.filter( (ele,pos)=>projectNameSorted.indexOf(ele) == pos)
    filterprojectNameSorted.sort( function(a,b){
    return a.localeCompare(b, undefined, {sensivity:"base"})
    })
    console.log("Projects by alphabetic order : ", filterprojectNameSorted[0])
    return filterprojectNameSorted[0]
}

//5.2 The number of unique contributors.
function numberOfUniqueContributors(array){
  const contributors = copyByRealName(array)
    const uniqueContributors = contributors.filter( (ele,pos)=>contributors.indexOf(ele) == pos)
    console.log("The number of unique contributors : ", uniqueContributors.length)
    return uniqueContributors.length
}

//5.3 The average length of contributors’ name.
function AverageContributorName(array){
  const contributors = copyByRealName(array)
    const uniqueContributors = contributors.filter( (ele,pos)=>contributors.indexOf(ele) == pos)
    const filtered = uniqueContributors.filter(function(x) {
      return x !== undefined;
    });
    let average = 0
    for (let i = 0; i<filtered.length; i++){
  
      average += filtered[i].length
    }
    average = average / filtered.length
    console.log("The average is : ", average)
    return average
}

//5.4 The most active contributor’s name (by number of projects)  
//5.5 TOP 10 of the most contributed projects.

function MostActiveContributorByNumberOfProject(array, top){
  //Must have unique projects   
  let tab = []
  array.forEach((elem)=>{
      tab.push(Object.assign({},elem))
  })
  //console.log(array.slice(0,2))   
  const contributionByContributors = tab.reduce((acc, value) => {        
  // Group initialization        
  if (!acc[value.realName]) {            
    acc[value.realName] = []       
  }        
  // Grouping        
  acc[value.realName].push(value)        
  return acc;        
  })      
  // Transformation tableau plus simple     
  const tabContributionByContributors = Object.entries(contributionByContributors)             
  tabContributionByContributors.sort(function (a, b) {        
    if (a[1]!== null && b[1]!== null && a[1].length > b[1].length) {            
      return -1   
    } else {            
      return 1        
    }        
  }); 
  let tabMostConstributors = []
  for (let i=0 ; i< top ; i++){
      tabMostConstributors.push(tabContributionByContributors[i][0])
  } 
  if (top===1){
    console.log(tabMostConstributors[0])
      return tabMostConstributors[0]
  }
  console.log(tabMostConstributors)
  return tabMostConstributors
}



function sortMap(map) {
	return new Map([...map.entries()].sort((a,b) => b[1] - a[1]));
}

function MostContributedProjet(array){ 
  const SortedArray = sortMap(array
		.map(contributor => contributor.projectName)
		.reduce((acc,e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
	)
  const result = Array.from(SortedArray).slice(0,10).map(contrib => contrib[0])
  console.log(result)
  return result
}


function copyByRealName (array){
  const sortByRealName = []
  array.forEach(element => {
    sortByRealName.push(element.realName)
  })
  return sortByRealName
}