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
    'Did you know that there may be life on Mars!?',
    'A full NASA space suit costs 12  million dollars! Did you know that?',
    'Did you know that Halleys Comet will orbit past Earth again in the year 2061?',
    'The hottest planet in our solar system is Venus! Were you familiar with this?',
    'Our solar system in roughly 4 billion years old! Did you know this?',
    'Did you know that Pluto is smaller than the United States?',
    'Did you know that space is silent?'
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


const question1 = welcomeQuestion[randomNumber];

const question2 = welcomeResponse[randomNumber];

const randomNumber = Math.floor(Math.random() * (welcomeQuestion.length));


const yes = possibleYesValue.includes(userInput.value);
const no = possibleNoValue.includes(userInput.value);
const userValue = userInput.textContent;

/* ChatBot Welcome Question & Response */

function response() {
    const randomNumber = Math.floor(Math.random() * (welcomeQuestion.length));

    while(botChat.textContent == welcomeQuestion[randomNumber]) {
        botChat.textContent = userValue.value
    }
}   