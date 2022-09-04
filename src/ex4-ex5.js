import fetch from "node-fetch"

export function parseCsvImperative (csvText) {
    let splitLignes = csvText.split("\n")
    let arrayObject = []
    for (let i = 1 ; i<splitLignes.length ; i++){
      let text = splitLignes[i].split(",")
      arrayObject.push({
          username : text[0],
          realName : text[1],
          website : text[2]===""?null:text[2],
          projectName : text[3]
      })
    }
    return(arrayObject)
  }

export  function parseCsvFunctional (csvText) {
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
    return tableauFormaté
}


export function pullAndAnalyzeCsv(){
    return fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
    .then(res => res.text())
    .then(parseCsvFunctional)
    .then((tab)=>{
        const tableau = tab
        return {
            firstProjectNameInAlphaOrder : firstProjectNameInAlphaOrder(tableau),
            numberOfUniqContributors : numberOfUniqContributors(tableau),
            averageContributorNameLength : averageContributorNameLength(tableau),
            mostActiveContributorName : MostActiveContributorByNumberOfProject(tableau,1),
            top10MostConstributedProjects : MostContributedProjet(tableau),
        }
    })
    .catch(console.log)
}

// Excercise 5. Computes stats about contributions
//5.1 The first project’s name in ascending alphabetic order
function firstProjectNameInAlphaOrder(array){
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
  function numberOfUniqContributors(array){
    const contributors = copyByRealName(array)
    const uniqueContributors = contributors.filter( (ele,pos)=>contributors.indexOf(ele) == pos)
    console.log("The number of unique contributors : ", uniqueContributors.length)
    return uniqueContributors.length
  }
  
  //5.3 The average length of contributors’ name.
  function averageContributorNameLength(array){
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
        return tabMostConstributors[0]
    }
    
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

/*
  function MostContributedProjet(array){
    //must have unique projects
    console.log(array.slice(0,10))
    let tab = []
    array.forEach((elem)=>{
        tab.push(Object.assign({},elem))
    })
    const mostContributedProjects = tab.reduce((acc, value) => {
    // Group initialization
    if (!acc[value.projectName]) {
        acc[value.projectName] = [];
    }
    // Grouping
    acc[value.projectName].push(value);
    return acc;
    });
    //transformation tableau plus simple
    let tabmostContributedProjects = Object.entries(mostContributedProjects)
    tabmostContributedProjects.sort(function (a, b) {
    if (a[1]!== null && b[1]!== null && a[1].length > b[1].length) {
        return -1;
    } else {
        return 1;
    }
    });
    tabmostContributedProjects = tabmostContributedProjects.slice(0,10)
    let result = []
    tabmostContributedProjects.forEach((elem)=>{
        result.push(elem[0])
    })
    return result
}
*/

  function copyByRealName (array){
    const sortByRealName = []
    array.forEach(element => {
      sortByRealName.push(element.realName)
    })
    return sortByRealName
  }