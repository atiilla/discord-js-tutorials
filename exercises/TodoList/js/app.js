const cardBody1 = document.querySelectorAll('.card-body')[0]
const cardBody2 = document.querySelectorAll('.card-body')[1]
const ListGroup = document.querySelector('.list-group')
const todoInput = document.querySelector('#todo');
// todoInput.value="hack4net"
// console.log(todoInput.value)

cardBody1.addEventListener('click', TodoEkle);
cardBody2.addEventListener('click',TodolariSil)

let elgen = t => document.createElement(t)

function TodoOlustur(baslik) {
    let li = elgen('li')
    li.className = "list-group-item d-flex justify-content-between"

    let TodoBaslik = document.createTextNode(baslik)

    let a = elgen('a');
    a.href = "#"
    a.className = "delete-item"

    let i = elgen('i')
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(TodoBaslik)
    li.appendChild(a)

    console.log(li)
    return li
}

function TodoEkle(event) {

    event.preventDefault();
    if (event.target.className == "btn btn-danger") {

        // todo ekle button
        console.log('todo ekle....')

        console.log(todoInput.value)
        ListGroup.appendChild(TodoOlustur(todoInput.value))


    }
}

function TodolariSil(event){
    event.preventDefault();

    // tum todolari temizle
    if(event.target.id=="clear-todos"){
        return ListGroup.innerHTML=""
    }

    // todo temizle
    if(event.target.className=="fa fa-remove"){
        console.log(event.target.parentElement.parentElement)
        event.target.parentElement.parentElement.remove();
    }


}