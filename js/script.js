// calcolare prezzo del biglietto del treno

/*

1- definire variabili/constanti (distanza da percorrere e età del passeggero)
2- calcolare prezzo biglietto in base ai km da percorrere (€ 0,21/km)
3- applicare sconto 20% per i minorenni
4- applicare sconto 40% per gli over 65
5- dichiarare prezzo finale con i centesimi (X,xx)

*/


// dichiarazione variabili distanza ed età
let distance = prompt('Quanti km devi percorrere?');
let age = prompt('Quanti anni hai?');

console.log('distanza',distance);
console.log('età',age);


// prezzo intero del biglietto
let totalPrice = (distance * 0.21).toFixed(2) + '€';
console.log('prezzo intero',totalPrice);


// dichiarazione altre variabili 
let ageMsg = '';
let discountPrice = '';


// calcolo sconti 20% o 40%
if (age < 18) {
  
  let discount20 = (totalPrice * 20) / 100;
  console.log('sconto 20% corrisponde a',discount20);
  
  discountPrice = (totalPrice - discount20).toFixed(2);
  console.log('prezzo scontato del 20%',discountPrice);

  ageMsg = 'Hai meno di 18 anni';

} else if (age >= 65) {
  
  let discount40 = (totalPrice * 40) / 100;
  console.log('sconto 40% corrisponde a',discount40);
  
  discountPrice = (totalPrice - discount40).toFixed(2);
  console.log('prezzo scontato del 40%',discountPrice);

  ageMsg = 'Hai 65 anni o più';
} else {
  ageMsg = 'Hai un età tra i 18 e i 64 anni';
}


// BIGLIETTO TRENO

let myTicket =  `
Distanza: ${distance} Km<br>
Età: ${age} anni<br>
<br>
${ageMsg}<br>
<br>
Totale Biglietto: ${totalPrice}<br>
Totale con sconto: ${discountPrice}
`;


document.getElementById("ticket").innerHTML = `
  ${myTicket}
`;


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