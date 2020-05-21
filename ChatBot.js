const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");


document.getElementById("userInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});


/* Welcome Question on Load */

const welcomeQuestion = [
    'Welcome to Pandora Bot! What is your name?',
    'Hello there! What is your name?',
    'My name is Pandora Bot! What is yours?',
    'Welcome human... what is your name?'
]

window.onload = function response() {
    const randomNumber = Math.floor(Math.random() * (welcomeQuestion.length));
    botChat.textContent = welcomeQuestion[randomNumber];
}

submit.addEventListener("click", response);

const welcomeResponse = [
    ', did you know that there may be life on Mars!?',
    ', a full NASA space suit costs 12  million dollars! Did you know that?',
    ', did you know that Halleys Comet will orbit past Earth again in the year 2061?',
    ', the hottest planet in our solar system is Venus! Were you familiar with this?',
    ', our solar system in roughly 4 billion years old! Did you know this?',
    ', did you know that Pluto is smaller than the United States?',
    ', did you know that space is silent?'
]


const didYouKnowResponseYes = [
    'Wowsers! You\'re onto it!',
    'Great job',
    'Great! You already know something about space!',
    'Nice going!',
    'Virtual high-five space buddy!',
    'That\'s awesome :)',
    'Good on ya!'
]

const didYouKnowResponseNo = [
    'That\'s great! You have a lot to learn',
    'You didn\'t? Well, you have a lot to learn!',
    'Well, I have a lot more for you to learn :)',
    'That\'s okay. Just keep learning!',
    'Great! You\'ve learnt something new today',
    'That\'s alright! You can\'t know everthing :)'
]


const possibleYesValue = [
    'Yes',
    'yes',
    'Yeah',
    'yeah',
    'Y',
    'y',
    'Ya',
    'ya',
    'Yes I did',
    'yes i did',
    'Yup',
    'yup',
    'Yo',
    'yo',
    'Sure did',
    'sure did',
    'Yas',
    'yas',
    'Yep',
    'yep',
    'Yaa',
    'yaa',
    'You bet',
    'you bet',
    'Yeh',
    'yeh'
]

const possibleNoValue = [
    'No',
    'no',
    'N',
    'n',
    'Nope',
    'nope',
    'Nah',
    'nah',
    'No i did not',
    'no i did not',
    'No I didn\'t',
    'no i didn\'t',
    'Nay',
    'nay'
]

const randomNumber = Math.floor(Math.random() * (welcomeResponse.length));



/* ChatBot Welcome Question & Response */

function response() {
   
    for (index = 0; index < welcomeQuestion.length; index++) {
        botChat.textContent = userInput.value + welcomeResponse[randomNumber];
        user.textContent = userInput.value;
    } if (userInput.value == "Yes") {
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yes") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yeah") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yeah") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Ya") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "ya") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Y") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "y") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yes I did") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yes, I did") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yes i did") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yes i did") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yup") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yup") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Sure did") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "sure did") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yas") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yas") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yo") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yo") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yep") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yep") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yaaa") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yaa") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "You bet") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "you bet") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "Yeh") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "yeh") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber];
    } else if(userInput.value == "No") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "no") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "Nah") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "nah") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "Nope") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "nope") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "No I did not") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "no i did not") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "No I didn't") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "No I didnt") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "no i didn't") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "No I didnt") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "no i didnt") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "N") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "n") {
        botChat.textContent = didYouKnowResponseNo[randomNumber];
    } else if(userInput.value == "") {
        botChat.textContent = "Try typing Yes or No :)";
    } else {
        botChat.textContent = "Try typing Yes or No";
    }
    
        if (botChat.textContent == didYouKnowResponseYes[randomNumber]) {
            setTimeout(() => {botChat.textContent = "Want to know about celestial bodies you can see in the night sky?"}, 3000)
    }
        if (botChat.textContent == didYouKnowResponseNo[randomNumber]) {
            setTimeout(() => {botChat.textContent = "Want to know about celestial bodies you can see in the night sky?"}, 3000)
    }
        while(botChat.textContent == "Want to know about celestial bodies you can see in the night sky?") {
            if (userInput.value == "Yes") {
                botChat.textContent = "Awesome! First of all I need to know your rough location"
                setTimeout(() => {botChat.textContent = "What country are you in... or even better, what hemisphere are you located within?"}, 2000)
            }
        }
    }


    

    










