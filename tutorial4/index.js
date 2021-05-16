/* Array Methods */
let result;
// some()

// let numbers = [1,2,3,4,5,6,7,8,9,10];


// function x (y){
//     console.log("function icerisinden",y)
// }

// x('hack4net');


// result = numbers.some(function(x){
//     let sonuc = x >=1
//     console.log(sonuc)
// })

// every()

// const seneler = [2019,2020,2021,1970];

// function EveryCallBack(sene){
//     let sonuc=  sene >=1970;
//     console.log("every",sonuc)
// }

// result = seneler.every(EveryCallBack)


// reduce()

let numaralar = [40, 50, 2, 5, 7, 9, 10];

// result = numaralar.reduce(function(toplam,sayi,index,arr){
//   //  console.log(`Index: ${index}\nKendisi: ${arr}\n SuandakiSayi: ${sayi}\nToplamDeger: ${toplam}`)
//     return toplam+sayi
// })

// map method

numaralar.map(function (eleman, index, kendisi) {
    //   console.log(`Eleman:${eleman}\nIndex:${index}\nKendisi:${kendisi}`)
})

// forEach
numaralar.forEach(function (eleman, index, kendisi) {
    // console.log(`Eleman:${eleman}\nIndex:${index}\nKendisi:${kendisi}`)
})

// filter

numaralar.filter(function (eleman, index) {
    let sonuc = eleman > 10;
    //  console.log(numaralar[index])
})


numaralar.findIndex(function (eleman, index) {
    let sonuc = eleman == 50 // true
    if (sonuc) {
        console.log(numaralar[index])
    } else {
        console.log('bulunamadi')
    }
})


// sort()
let nums = [5, 3, 2, 8, 6, 4, 2, 9, 10]
let strs = ['a', 'z', 'c', 'h', 'f', 'k', 'm'] // sort()
result = strs.sort();

function compareFunction(a, b) {
    // console.log(a-b)
    return a - b
}

result = nums.sort(compareFunction);


// find method()


let ogrenci = [
    {
        name: "Mahmut"
    },
    {
        name: "Ahmo"
    }
]


ogrenci.find(function (kisi) {

    let sonuc = kisi.name === "Ahmo" // true
    if (sonuc) {
        console.log(kisi);
    }
})


// concat() 

let eskiveriler = [1, 2, 3, 4, 5, 6]
let yeniveriler = [7, 8, 9];
result = eskiveriler.concat(yeniveriler)

result = eskiveriler.includes(6);

result = nums.sort(compareFunction);

result = result.reverse();

// pop()

let ogrenciler = [

    {
        id: 1,
        username: 'root1',
        password: '123456'
    },
    {
        id: 2,
        username: 'root2',
        password: '1234568'
    }
]

// result = ogrenciler.pop()

// shift metodu

// result = ogrenciler.shift()

// unshift()

let x = [2, 3, 4, 5];

// ogrenciler.unshift(...[{id:3,username:'memo'}])
ogrenciler.unshift({ id: 1, username: 'test', password: '23232' })

// x.unshift(...[{id:1,username:'root'}])

// result = x

result = ogrenciler[1]


let arrayornegi = [1, 2, 3, [['test', 'test1'], 5], [6, 7]]

result = arrayornegi[3][0][1]

// push() yeni bir eleman eklemek icin kullanilir

let yeniogrenci = {
    id: 4,
    username: 'ahmo',
    password: 'ahmo123'
}

ogrenciler.push(yeniogrenci)

// slice()

let test = [2, 3, 4, 5, 6]


let base64 = "MzQzYXNkYXNk"



//result =ogrenciler

result = test.slice(1, test.length) // update

result = test.join("-")

result = base64.split("")

result = result.join("")


function addStudent(ogrenciverisi) {
    return ogrenciler.push(ogrenciverisi)
}

addStudent({
    id: 5,
    username: "mike",
    password: 'john12'
})


const OgrnUsername = document.querySelector('#username')
const OgrnPassword = document.querySelector('#password')
const EkleButton = document.querySelector('button')

let Ogrenci_id = 0

EkleButton.addEventListener('click', (e) => {
    e.preventDefault();
    Ogrenci_id = Ogrenci_id + 1
    console.log('hello click');
    console.log(OgrnUsername.value);
    console.log(OgrnPassword.value);
    let yeniOgrenci = {
        id: Ogrenci_id,
        username: OgrnUsername.value,
        password: OgrnPassword.value
    }
    ogrenciler.push(yeniOgrenci)

    console.log(ogrenciler);
})


result = ogrenciler




console.log(result);