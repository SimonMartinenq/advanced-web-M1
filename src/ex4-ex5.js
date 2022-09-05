//import fetch from "../package.json/node-fetch"

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


export async function  pullAndAnalyzeCsv(){
    return fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
    .then(res => res.text())
    .then(parseCsvFunctional)
    .then((tab)=>{
        const tableau = tab
        return {
            firstProjectNameInAlphaOrder : firstProjectNameInAlphaOrder(tableau),
            numberOfUniqContributors : numberOfUniqContributors(tableau),
            averageContributorNameLength : averageContributorNameLength(tableau),
            mostActiveContributorName : MostActiveContributorByNumberOfProject(tableau),
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
    console.log("The average length of contributors’ name : ", average)
    return average
  }
  
  //5.4 The most active contributor’s name (by number of projects)  
  //5.5 TOP 10 of the most contributed projects.
  
  function MostActiveContributorByNumberOfProject(array){
    //group by project name
    const grouped = groupBy(array, pjt => pjt.realName);
    //sort by number of contributors
    const sorted = [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)
    //select the first
    const first = sorted.slice(0,1)
    //keep only names
    const result = first.map(elem => elem[0])
    console.log("The most active contributor’s name :",result[0])
    return result [0]
  }
  
  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
  }
  
  function MostContributedProjet(array){ 
    //group by project name
    const grouped = groupBy(array, pjt => pjt.projectName);
    //sort by number of contributors
    const sorted = [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)
    //select the 10 first
    const first10 = sorted.slice(0,10)
    //keep only names
    const result = first10.map(elem => elem[0])
    console.log("TOP 10 of the most contributed projects : ",result)
    return result
  }

  function copyByRealName (array){
    const sortByRealName = []
    array.forEach(element => {
      sortByRealName.push(element.realName)
    })
    return sortByRealName
  }