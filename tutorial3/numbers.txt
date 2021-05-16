/* NUMBER METHODS */
let result;
// parseInt () 

let number1 = "10"

result  = parseInt(number1)
result = Number(number1)

// parseFloat method
result = parseFloat('10.5')

// isFinite()

// result = isFinite('a')

let userPhoneNumber = '05556665xxxxx'

if(isFinite(userPhoneNumber)){
    console.log('hello user') // kosul saglandi ve kod calistirildi
}else{
    console.log('numara olmali')
}


// toFixed method

let maas = 1800.50

// 10 20 30 40 50 60 70 80 90 100

result =  maas.toFixed()


function IsciMaasiFixle(maas){
    console.log(`Isci'nin maasi: ${maas.toFixed()}'dir.`)
}

IsciMaasiFixle(maas);


console.log(result)