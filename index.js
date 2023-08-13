const names = ["Guadalupe", "Ollie", "Aki"];
const occasion = "surprise";

function writeCards(names, occasion) {
    let thanks = [];
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return thanks;
}

const thankYouMessages = writeCards(names, occasion);
console.log(thankYouMessages);


// Count down part
function countDown(number = 10){
while (number >= 0) {
    console.log(number);
    number--
}
return countDown
}