export function sum (...number){
    if (number.length == 0){
        throw new Error('At least one number is expected')
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