// Math Obj
let result;
// PI number
//console.log(Math.PI);
// 3.141592653589793

// round()
result = Math.round(9.4)

// power method 
result = Math.pow(8,2) // 64
result = Math.pow(3,2) // 9

// Square root of number Math.sqrt()
result = Math.sqrt(64) // 8
result = Math.round(Math.sqrt(128)) // 11

// Absolute positive // .abs()
result  = Math.abs(-6)
result = Math.abs(-10) // herzaman pozitif sayi
result = Math.abs("-1")
result = Math.abs("-10")

// Sin - Cos
result = Math.sin(90* Math.PI/180)
result = Math.cos(0 * Math.PI/180)

// random()

result = Math.random() // 0.1 - 0.9 
result = Math.random() *10 // 0.121928922 - 9.343434
result = Math.round(Math.random()*10) // 0-9
result = Math.round(Math.random()*11) // 0-10


function GetRandomNumber(min,max){

    return Math.round( Math.random() * (max-min)+1 ) + min;

}


result = GetRandomNumber(1,20)

let numbers =[]

for(let i=0;i<10;i++){
    let number = GetRandomNumber(1,20)
    numbers.push(number)
}

console.log(numbers);

console.log(result);