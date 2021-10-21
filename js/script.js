// calcolare prezzo del biglietto del treno

/*

1- definire variabili/constanti (distanza da percorrere e età del passeggero)
2- calcolare prezzo biglietto in base ai km da percorrere (€ 0,21/km)
3- applicare sconto 20% per i minorenni
4- applicare sconto 40% per gli over 65
5- dichiarare prezzo finale con i centesimi (X,xx)

*/


// dichiarazione variabili
let distance = prompt('Quanti km devi percorrere?');
let age = prompt('Quanti anni hai?');

console.log('distanza',distance);
console.log('età',age);


// prezzo intero del biglietto
let totalPrice = (distance * 0.21).toFixed(2);

console.log('prezzo totale',totalPrice);


// definizione sconti 20% e 40%
let discount20 = (totalPrice * 20) / 100;

console.log('sconto 20%',discount20);

let discount40 = (totalPrice * 40) / 100;

console.log('sconto 40%',discount40);


// calcolo prezzo biglietto con sconto
let discountPrice20 = (totalPrice - discount20).toFixed(2) + '€';
let discountPrice40 = (totalPrice - discount40).toFixed(2) + '€';

console.log('prezzo scontato del 20%',discountPrice20);
console.log('prezzo scontato del 40%',discountPrice40);


// utilizzo sconti 20% e 40%
if(age < 18){
  console.log('in base alle informazioni devi pagare',discountPrice20)+'€';

  document.getElementById("ticket").innerHTML =
  `
    <p>Km da percorrere: ${distance}</p>
    <p>La tua età: ${age}</p>

    <p>Il prezzo intero del biglietto è di: € ${totalPrice}</p>

    <p>In base alla tua età ti verrà applicato il 20% di sconto pari a € ${discount20}</p>

    <p>Quindi il prezzo totale del biglietto è di: <strong>${discountPrice20}</strong></p>
  `
}else if(age => 65){
  console.log('in base alle informazioni devi pagare',discount40)+'€';

  document.getElementById("ticket").innerHTML =
  `
    <p>Km da percorrere: ${distance}</p>
    <p>La tua età: ${age}</p>

    <p>Il prezzo intero del biglietto è di: € ${totalPrice}</p>

    <p>In base alla tua età ti verrà applicato il 40% di sconto pari a € ${discount40}</p>

    <p>Quindi il prezzo totale del biglietto è di: <strong>${discountPrice40}</strong></p>
  `
}else{
  console.log('in base alle informazioni devi pagare',totalPrice)+'€';

  document.getElementById("ticket").innerHTML =
  `
    <p>Km da percorrere: ${distance}</p>
    <p>La tua età: ${age}</p>

    <p>Il prezzo totale del biglietto è di: <strong>€ ${totalPrice}</strong></p>
  `
}

// BONUS //

// controllo della validità
let validTicket = true;
let errorMsg = '';

if(isNaN(distance) && isNaN(age)){
  validTicket = false;
  errorMsg = 'Inserire i dati in modo corretto';
}else if(isNaN(distance)){
  validTicket = false;
  errorMsg = 'Inserire una distanza valida';
}else if(isNaN(age)){
  validTicket = false;
  errorMsg = 'Inserire un\'età valida';
}

if(!validTicket){
  document.getElementById('ticket').innerHTML = "Errore! " + errorMsg;
}