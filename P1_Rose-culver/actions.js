let colors = ["#D88C9A", "#99C1B9", "#8E7DBE", "#FF674D"]
const phrases = ["a Brooklyn-based graphic designer", "Kanye West's biggest fan", 
"looking for a job at the start of October","letting you download her PDF"]; 
var number = phrases.length
let option = phrases[0]
let counter = 0
let color = 0


function start() {
    document.getElementById('innerText').innerHTML=option
    document.getElementById('circle').style.backgroundColor=colors[color]
}

function randomPhrase() {
    let current = document.getElementById('innerText').innerHTML
    option = Math.floor(Math.random() * number);
    if (current == phrases[option]) {
        option = Math.floor(Math.random() * number);
    }
    counter=option
    updateSection()
}

/*descobrir o que ta escrito pra somar 1*/
function nextPhrase() {
    counter +=1

    if (counter>phrases.length-1) {
        counter=0
    }
    updateSection()
}

function lastPhrase() {
    counter -=1

    if (counter<0) {
        counter=phrases.length-1
    }
    updateSection()
}

function updateSection() {
    color=counter
    document.getElementById('innerText').innerHTML=phrases[counter]
    document.getElementById('circle').style.backgroundColor=colors[color]
}