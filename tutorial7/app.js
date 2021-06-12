let myArray = [1,2,3,4,5,6,'intec',true,false,{id:1}]
let myStr = "hack4net"

// for(index in myStr){
//     console.log(myStr[index])
// }

let students = [{id:1,username:"root"},{id:1,username:"root"}]

for(person in students){
    let result = students[person];
    result.id=44
   // console.log(result.id)
    
}


let obj = {
    foo:123,
    fizz:"buzz",
    meow:"cat"
};

for(x in obj){
  //  console.log(obj[x])
}

// for of

for(x of myStr){
   // console.log(x)
}

for(x of myArray){
    console.log(x)
}

// for(x of students){
//     console.log(x)
//     x.username="0x1"
// }


// for(let i=0;i<=10;i++){

// }


let users = [{id:1,username:"root"}]

console.log(users)

// visitor

users.push({
    id:2,username:"ahmet"
})

console.log(users)

// function addUser(){
//     users.push({
//         id:3,username:"veli"
//     })

//     return users
// }

