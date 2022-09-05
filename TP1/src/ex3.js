export function map (array, transform){
  let newArray = []
    array.forEach(element => {
        newArray.push(transform(element))
    });
    return newArray
    //return array.map(transform)
}