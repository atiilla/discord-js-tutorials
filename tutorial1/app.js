// alert(1);

// console.log()

console.log('hello friends')
console.log([1, 2, 3])
console.log({ id: 1 })
console.log(1)
console.log(function () { })
console.log(null)
console.log(Infinity)

/*

var - let - const

*/

// var
var hack4net = "bu bir stringtir." // deklare ettim
hack4net = "update edildi"  // update
var hack4net = { id: 1 } // re-decleration 
console.log(hack4net)


// let
let h4x0r = "Stringtir bu"

// update
h4x0r = 29

// re-decleration
// let h4x0r = {id:4} // mumkun degil

console.log(h4x0r)

// const type of variable

const token = "haciveli123"

//token = "mahmut" // update edilemez

// const token = [4] // mumkun degil

// console.log(token)

document.write("<h1>hello friends!</h1>")

// data types

/*

number
string
array
object
function
null
undefined
boolean

*/

// number
let n1 = 1;
console.log(n1, typeof n1)

// string
let str1 = "123x"
console.log(str1, typeof str1)

// array

let isimler = ['ali', 'veli', 'deli', 1, null, undefined, function () { }, { id: 1 }]

isimler = ["ali", "veli", ["deli", "deli'nin oglu maho"]]

let test = "Ali'nin arabasi"
test = 'Ali"nin arabasi'

// extract single array item and nested array item

let extractSingleItemfromArray = isimler[1]

let singleItemfromNestedArray = isimler[2][1]

console.log(isimler, typeof isimler)

let auto = {
    color: 'yellow', // key-value
    model: 'BMW',
    year: 2005,
    isAuto: true,
    child: {
        id: 1,
        myArray: [1, 2, 3, 4, 5],
        childofchild: {

        }
    }
}


let x = {

    y: {
        z: {
            w: {

            }
        }
    }
}


x.name = 'Joe Dalton'
x.y.name = 'Joe Dalton1'
x.y.z.name = 'Michael Jackson'
x.y.z.w.bitti = 'Sonuncu islem'

console.log(typeof auto.isAuto)
console.log(x)

// function

function Kedi() { // method-function
    // hardcoded
    console.log('meow')
    // alert(1+2)
}

Kedi()


function Sincap(name) {
    console.log("FUNC RESULT=>", name)
}

Sincap(1);



function getUsers(id) {

    let urlHazirla = `https://jsonplaceholder.typicode.com/todos/${id}`
    console.log(urlHazirla)
}

getUsers(20);



function objeyiHazirla(isim, yas, meslek) {
    let sonuc = {
        name: isim,
        age: yas,
        profession: meslek
    }

    console.log(sonuc)
}

objeyiHazirla('Zakire',24,'Student')
objeyiHazirla('X',20,'tornaci')
objeyiHazirla('aaa',222,'asdasdasdasd')
// Sincap("Zakire");

//


// arrow function

var yeniFonksiyon = (x,y,z)=>console.log('hello',x,y,z)
yeniFonksiyon(1,2,3);


let isimYazdir1 = (isim)=>{
    console.log(isim)
    console.log(isim)
    console.log(isim)
    console.log(isim)
}

let isimYazdir2 = (isim)=>console.log(isim)

isimYazdir1('zakire1')
isimYazdir2('zakire2')

