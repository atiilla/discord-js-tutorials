let ogrenciler = [
    {
        id: 1,
        name: "Leanne Graham1",
        username: "Bret",
        email: "Sincere@april.biz",
        score:90
    },
    {
        id: 2,
        name: "Leanne Graham2",
        username: "Bret",
        email: "Sincere@april.biz",
        score:100
    },
    {
        id: 3,
        name: "Leanne Graham3",
        username: "Bret",
        email: "Sincere@april.biz",
        score:30
    }
]


function ButunOgrenciler(obj){
    return obj
}

function KimSinifiGecti(obj){
    return obj.score >=50
}



console.log(ogrenciler.map(ButunOgrenciler).filter(KimSinifiGecti))

