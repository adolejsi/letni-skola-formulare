console.log('JavaScript funguje');

let formular = document.querySelector('#formular')
formular.addEventListener('submit', zpracujFormular) //Tu nesmí být kulatý závorky

function zpracujFormular(event) {
    event.preventDefault()
    console.log('Zpracovávám')

    let jmeno = document.querySelector('#jmeno').value
    console.log(jmeno)

    let prijmeni = document.querySelector('#prijmeni').value
    console.log(prijmeni)

    let datum = document.querySelector('#datum').value
    console.log(datum)

    let barva = document.querySelector('#vlasy').value
    console.log(barva)

    let mesto = document.querySelector('#mesto').value
    console.log(mesto)

    let souhlas = document.querySelector('#souhlas').checked
    if (souhlas == true) {
        console.log('Zákoš souhlasí, posílám spam')
    } else {
        console.log('Bohužel nic nechce :(')
    }
}


let barvicka = document.querySelector('#barva')
barvicka.addEventListener('change', zmenBarvu)

function zmenBarvu() { //tahle funkce nefakčí
    let barva = document.querySelector('#barva').value
    document.querySelector('body').style.backgroundColor = barva;
}