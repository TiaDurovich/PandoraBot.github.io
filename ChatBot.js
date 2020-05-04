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
    'That\'s awesome :)'
]

const didYouKnowResponseNo = [
    'That\'s great! You have a lot to learn',
    'You didn\'t? Well, you have a lot to learn!',
    'Well, I have a lot more for you to learn :)',
    'That\'s okay. Just keep learning!',
    'Great! You\'ve learnt something new today'
]


const possibleYesUserInputs = [
    'Yes',
    'yes',
    'Yeah',
    'yeah',
    'ya',
    'Ya',
    'Y',
    'y',
    'Yes I did',
    'Yes i did',
    'Yes, I did',
    'yes i did',
    'Yup',
    'yup',
    'Sure did',
    'sure did',
    'Yas',
    'yas',
    'Yo',
    'yo'
]


const randomNumber = Math.floor(Math.random() * (welcomeResponse.length));


function response() {
    for (index = 0; index < welcomeQuestion.length; index++) {
        botChat.textContent = userInput.value + welcomeResponse[randomNumber];
        user.textContent = userInput.value;
    }
    
    if(userInput.value == "Yes") { 
        botChat.textContent = didYouKnowResponseYes[randomNumber]
    }
    if(userInput.value == "No") {
        botChat.textContent = didYouKnowResponseNo[randomNumber]
        
    }
}




    










