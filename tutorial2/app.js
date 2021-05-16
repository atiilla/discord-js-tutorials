let msg = "Lorem Ipsum release is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, veli,veli,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem  ,veli, Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.asdiasdihjaiosdoaihsdasduhashuasasdasdasdasdasd"
let result;

// methods
result = msg.length;
result = msg.indexOf("release"); // ilk tespit edilen
result = msg.lastIndexOf("release") // son tespit edilen
result = msg.search("essentially");
result = msg.slice(100, msg.length);
result = msg.substring(0, 25);
result = msg.substr(0, 25);
result = msg.replace("essentially", "hacibekir"); // yerine baska bir veri gonderme
result = msg.replace(/veli/g, 'mehmet');
result = msg.toUpperCase();
result = msg.toLowerCase();

let x = "                                   bu bir stringtir                                       "

result = x.trim();
result = x.trimEnd()
result = x.trimLeft()

result = msg.charAt(3);
result = msg.charCodeAt(3)

console.log(typeof msg)

result = msg[3];

var pass = "sifre1,sifre2,sifre3"

result = pass.split(",");


let userx = {
    id: 1,
    username: "root",
    password: "123456",
    logs: {
        nezaman: ['01/01/2021', '02/02/2021'],
        ip: ['127.0.0.1', '127.0.0.1']
    },
    printle: function () {
        console.log(`${this.username}`)
    }
}


userx.printle();

let parent = {

    isim: "ali",

    child1: {
        child2: {
            child3: {
                child4: {

                }
            }
        }
    }




}
parent.isim = "mehmet"
parent.mesaj1 = "test"
parent.child1.mesaj = "test1"
parent.child1.child2.mesaj = "test"
parent.child1.child2.child3.mesaj = "test"
parent.child1.child2.child3.child4.mesaj = "test"
result = parent;

let i =0;

function createUser(user, pass, email) {
    i = i+1;

    let user_obj = {
        id: i,
        user: user,
        pass: pass,
        email: email
    }
    console.log(user_obj)

    return user_obj

}

let users = []

const [username,password,email] = document.querySelectorAll('input')
const gonderBtn = document.getElementById('gonder')

gonderBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    let userObjesi = createUser(username.value,password.value,email.value);
    users.push(userObjesi)

    localStorage.setItem('users',JSON.stringify(users))

})

//username.value="root"

console.log(result,gonderBtn);

