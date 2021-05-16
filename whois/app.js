const Base_API = "https://api.iptrooper.net/check"
const IpAddress = document.querySelector('#ipaddress')
const GetResultBtn = document.querySelector('button')
const Result = document.querySelector('.result')


function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (ipaddress)
    }
    console.log("You have entered an invalid IP address!")
    return (false)
}


GetResultBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let ip_address = `${Base_API}/${ValidateIPaddress(IpAddress.value)}?full=1`
    fetch(ip_address)
        .then(cevap => cevap.json())
        .then(veri => {
            console.log(veri) // surada verileri aldik
            Result.innerHTML = `
        <p class="console">ASN: ${veri.asn}</p>
        <p class="console">BAD: ${veri.bad}</p>
        <p class="console">COUNTRY: ${veri.country}</p>
        <p class="console">IP: ${veri.ipaddress}</p>
        <p class="console">NAME: ${veri.name}</p>
        `
        })



})