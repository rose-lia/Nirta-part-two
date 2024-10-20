

let userName = prompt("Welcome to GC mini golf! What is your name?");

let promptText = `Hi, ${userName}! Would you like to play 3 or 6 holes?`;

let holesCount;
do {
    holesCount = parseInt(prompt(`Hi, ${userName}! Would you like to play 3 or 6 holes?`));
    if(holesCount !== 3 && holesCount !== 6) {
        alert("Please enter 3 or 6.");
    }
} while (holesCount !== 3 && holesCount !== 6); 

let totalPutts = 0;
let coursePar = holesCount * 3;

for (let i = 1; i <= holesCount; i++) {
    let putts = parseInt(prompt(`How many putts for hole ${i}? (par: 3)`));
    totalPutts += putts;
}

let totalPar = totalPutts - coursePar;

if (totalPar > 0) {
    console.log(`Nice try, ${userName}... Your total par was: +${totalPar}.`);
} else if (totalPar < 0) {
    console.log(`Great job, ${userName}! Your total par was: ${totalPar}.`);
} else {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
}