export function filter (array, predicate){
    let newArray = []
      array.forEach(element => {
        if(predicate(element)){
            newArray.push(element)
        }
      });
      return newArray
      //return array.filter(predicate)
  }