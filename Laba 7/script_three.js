function oneArg (number){
    if(isFinite(number) && Number.isInteger(number)){
        return number % 2 ? "Even" : "Odd"
    }
    return ""
}

function firstArg(){
    let array = [];
    let sum = 0;
        firstPrime: for (let i = 1; i < Infinity; i++) { 
        for (let n = 2; n < i; n++) { 
            if (i % n == 0) continue firstPrime; 
        }
        array.push(i); 
        if (array.length == 5) { 
            for (let item of array) { 
                sum += item; 
            }
            return sum; 
        }
    }
}

function Row(n){
    if (isFinite(n)) {
        let sum = 0, j = 1;
        for ( let i = 1; i <= n; i++) {
            sum = sum + j;
            j = (j * 10) + 1;
        }
 
        return sum;
    }
    else{
        return "This is not number";
    }
}