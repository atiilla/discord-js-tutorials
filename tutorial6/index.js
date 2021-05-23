// Conditions
let result;


function GetRandomNumber(min,max){

    return Math.round( Math.random() * (max-min)+1 ) + min;

}


result  = GetRandomNumber(3,9);

if(result == 5 || result == 8){ // true donerse
    console.log(`FOUND/BULDUM> ${result}`)
}else if(result == 4){ // true donerse
    console.log(`FOUND/BULDUM> ${result} <<<< else if`)
}else{ // false donerse > default
    console.log('Sanssizlik bulamadim!')
}

console.log(result);
