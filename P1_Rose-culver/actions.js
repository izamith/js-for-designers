function start() {
    document.getElementById('innerText').innerHTML="aaaaaa"
}

const phrases = ["a Brooklyn-based graphic designer", "Kanye West's biggest fan", 
"looking for a job at the start of October","letting you download her PDF"] 

var number = phrases.length

/*
function logPhrases() {
    for (let i=0; i<number; i++) {
        console.log(phrases[i])
    }
}
*/

function randomPhrase() {
    /*
    let prior = document.getElementById('innerText').innerHTML
    */
    let current = document.getElementById('innerText').innerHTML
    let option = Math.floor(Math.random() * number);
    if (current == phrases[option]) {
        option = Math.floor(Math.random() * number);
    }
    document.getElementById('innerText').innerHTML=phrases[option]
}

/*descobrir o que ta escrito pra somar 1 complicado eheheh*/
function nextPhrase() {
    let current = document.getElementById('innerText').innerHTML
    let next = current+1

    if (next>number) {
        next=0
    }

    document.getElementById('innerText').innerHTML=phrases[next]

}
