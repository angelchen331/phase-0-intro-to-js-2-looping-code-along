const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise'
function writeCards(names, event){
    const message  = [];
    for (let i = 0; i < names.length; i++) {
        message[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
return message;  
}
writeCards();

function countDown(){
    let countDown = 10;
    while (countDown >=0){
        console.log(countDown--);
    }
}