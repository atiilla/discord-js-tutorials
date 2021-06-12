const stickman = document.querySelector('.stickman')

console.log(stickman)

let pixel=1;
let solaDogruYuru=true;
let baslangicPozisyon=100;

function YuruCinAli(){
    //console.log('yuru euro yuru') 
    baslangicPozisyon += solaDogruYuru? pixel:-pixel;
    console.log(baslangicPozisyon);
    stickman.style.right=`${baslangicPozisyon}px`
    if(baslangicPozisyon >=window.innerWidth-450 || baslangicPozisyon <=100){
        solaDogruYuru= !solaDogruYuru
        stickman.classList.toggle('flip')
    }
}


setInterval(YuruCinAli,1)