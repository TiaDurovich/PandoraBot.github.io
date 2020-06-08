
const userInput = document.querySelector("#userInput");
const submit = document.querySelector("#submit");
const botChat = document.querySelector("#botChat");
const user = document.querySelector("#user");


document.getElementById("userInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
        event.preventDefault();
    }
});


/* Welcome Question on Load */

const welcomeQuestion = [
    'Welcome to Pandora Bot! What is your name?',
    'Hello there! What is your name?',
    'My name is Pandora Bot! What is yours?',
    'Welcome human... what is your name?'
]

window.onload = function onload() {
    const randomNumber = Math.floor(Math.random() * (welcomeQuestion.length));
    botChat.textContent = welcomeQuestion[randomNumber];
    submit.addEventListener("click", response);
    alert("When talking to Pandora Bot, please answer the appropriate questions with either Yes or No");
}


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

const listOfPlanets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
]

const question1 = welcomeQuestion[randomNumber];
const question2 = welcomeResponse[randomNumber];


const randomNumber = Math.floor(Math.random() * (welcomeQuestion.length));


const yes = possibleYesValue.includes(userInput);
const no = possibleNoValue.includes(userInput);



/* ChatBot Welcome Question & Response */

function response() {
    const randomNumber = Math.floor(Math.random() * (welcomeQuestion.length));

    while(botChat.textContent == welcomeQuestion[randomNumber]) {
        submit.addEventListener("click", userName);
    }
}



function userName(){
    if (userInput.value == ""){
        botChat.textContent = "Please type your name below :)"
        setTimeout(() => {botChat.innerHTML = welcomeQuestion[randomNumber]}, 2500);;
    }
    else {
    botChat.textContent = userInput.value + "!";
    userInput.textContent = userInput.value;
    setTimeout(() => {botChat.innerHTML = welcomeResponse[randomNumber]}, 2000);;
    userInput.value = null;
    }

    while(botChat.textContent == welcomeResponse[randomNumber]) {
        submit.addEventListener("click", userResponse);
}
}



    function userResponse(){

        if (userInput.value == "Yes") {
            botChat.textContent = didYouKnowResponseYes[randomNumber];
            userInput.value = null;
        }
        else if (userInput.value == "No") {
            botChat.textContent = didYouKnowResponseNo[randomNumber];
            userInput.value = null;
        }
        else {
            botChat.textContent = "Try typing Yes or No";
            setTimeout(() => {botChat.innerHTML = welcomeResponse[randomNumber] }, 2000);;
            userInput.value = null;
        }
    if (botChat.textContent == didYouKnowResponseYes[randomNumber]) {
        setTimeout(() => {botChat.textContent = "Want to know about celestial bodies you can see in the night sky?"}, 3000)
        submit.addEventListener("click", secondResponse);
    }
    if (botChat.textContent == didYouKnowResponseNo[randomNumber]) {
        setTimeout(() => {botChat.textContent = "Want to know about celestial bodies you can see in the night sky?"}, 3000)
        submit.addEventListener("click", secondResponse);
    }
}





    function secondResponse(){
    while(botChat.textContent == "Want to know about celestial bodies you can see in the night sky?") {
        if (userInput.value == "Yes") {
            botChat.textContent = "Awesome! First of all I need to know your rough location"
            userInput.value = null;
            setTimeout(() => {botChat.textContent = "What hemisphere are you in? Northern or Southern?"}, 3500)
        }
        else if (userInput.value == "No") {
            botChat.textContent = "That's okay! There is plenty more about space to talk about :)"
            userInput.value = null;
        }
        else {
            botChat.textContent = "Try typing Yes or No";
            setTimeout(() => {botChat.innerHTML = "Want to know about celestial bodies you can see in the night sky?"}, 2000);;
            userInput.value = null;
        }
    }
    while(botChat.textContent == "What hemisphere are you in? Northern or Southern?") {
        if (userInput.value == "Northern") {
            botChat.textContent = "Near the start of the new year you will be able to see Orion Nebula!"
            setTimeout(() => {botChat.textContent = "Orion Nebula is visible to the naked eye, and is situated within the Milky Way"}, 4500)
            setTimeout(() => {botChat.textContent = "A nebula is a giant cloud of gas and dust in space!"}, 10000)
            setTimeout(() => {botChat.textContent = "Do you want to know more? Yes or No?"}, 15000)
            userInput.value = null;
        }
        else if(userInput.value == "Southern") {
            botChat.textContent = "You will be able to see Alpha Centauri!"
            setTimeout(() => {botChat.textContent = "Alpha Centauri is the closest star system to Earth, and is just 4.37 light years away!"}, 4500)
            setTimeout(() => {botChat.textContent = "That means it takes light 4.37 years to travel from Alpha Centauri to Earth!"}, 10000)
            setTimeout(() => {botChat.textContent = "Do you want to know more? Type Yes or No?"}, 15000)

            userInput.value = null;
        }
        else {
            botChat.textContent = "That's not a hemisphere! Try typing Northern or Southern."
            setTimeout(() => {botChat.innerHTML = "What hemisphere are you in? Northern or Southern?"}, 3000);;
            userInput.value = null;
        }
    }
    while (botChat.textContent == "Do you want to know more? Yes or No?") {
        if(userInput.value == "Yes") { 
            botChat.textContent = "You will also be able to point out various constellations!"
            setTimeout(() => {botChat.textContent = "Lyra, Draco, Gemini and Taurus are just a few!"}, 4000)
            setTimeout(() => {botChat.textContent = "What planet in our solar system do you want to know about?"}, 7500)
            userInput.value = null;
        }
        else if(userInput.value == "No") {
            botChat.textContent = "That's okay! There is plenty more about space to talk about :)"
            userInput.value = null;
        }
        else {
            botChat.textContent = "Try typing Yes or No :)"
            setTimeout(() => {botChat.innerHTML = "Do you want to know more? Yes or No?"}, 3000);;
            userInput.value = null;
        }
    }
    while(botChat.textContent == "Do you want to know more? Type Yes or No?") {
        if(userInput.value == "Yes") {
            botChat.textContent = "You will also be able to see the Southern Cross!"
            setTimeout(() => {botChat.textContent = "Sailors often use it as a compass in the night sky"}, 4000)
            setTimeout(() => {botChat.textContent = "What planet in our solar system do you want to know about?"}, 7500)
            userInput.value = null;
        }
        else if(userInput.value == "No") {
            botChat.textContent = "That's okay! There is plenty more about space to talk about :)"
            userInput.value = null;
        }
        else {
            botChat.textContent = "Try typing Yes or No :)"
            setTimeout(() => {botChat.innerHTML = "Do you want to know more? Type Yes or No?"}, 3000);;
            userInput.value = null;
        }
    }
    if(botChat.textContent == "That's okay! There is plenty more about space to talk about :)"){
        setTimeout(() => {botChat.innerHTML = "Let's talk about planets!"}, 3000);;
        setTimeout(() => {botChat.innerHTML = "What planet in our solar system do you want to know about?"}, 6000);;
    }
    while (botChat.textContent == "What planet in our solar system do you want to know about?") {
        if(userInput.value == "Mercury") {
            botChat.textContent = "Mercury is the smallest planet in our solar system, and is closest to the sun"
            setTimeout(() => {botChat.innerHTML = "Only two space crafts have ever visited Mercury! The last time was in 2004!"}, 4500);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 9000);;
            userInput.value = null;
        }
        else if(userInput.value == "Venus") {
            botChat.textContent = "Venus and Earth are very similar in size"
            setTimeout(() => {botChat.innerHTML = "Also, Venus rotates the Sun in the opposite direction to Earth!"}, 3000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else if(userInput.value == "Earth") {
            botChat.textContent = "Earth is where we are right now!"
            setTimeout(() => {botChat.innerHTML = "It is the densest planet in our solar system, and its rotation is slowing!"}, 3000);;
            setTimeout(() => {botChat.innerHTML = "That means, in 140 million years one day on Earth will be 25 hours long!"}, 8000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 14000);;
            userInput.value = null;
        }
        else if(userInput.value == "Mars") {
            botChat.textContent = "Mars is home to the tallest mountain in our solar system!"
            setTimeout(() => {botChat.innerHTML = "It also has the largest dust storms in our solar system!"}, 4000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else if(userInput.value == "Jupiter") {
            botChat.textContent = "Jupiter is 2.5 times more massive than all the other planets in our solar system!"
            setTimeout(() => {botChat.innerHTML = "It's magnetic field is also 14 times stronger than Earths!"}, 4000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else if(userInput.value == "Saturn") {
            botChat.textContent = "Saturn has an incredible 62 moons!"
            setTimeout(() => {botChat.innerHTML = "It is also the least dense planet in our solar system"}, 4000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else if(userInput.value == "Uranus") {
            botChat.textContent = "It takes Uranus 84 Earth years to travel once around the sun!"
            setTimeout(() => {botChat.innerHTML = "It is the coldest of all the planets in out solar system, reaching to -224 degrees C"}, 4000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else if(userInput.value == "Neptune") {
            botChat.textContent = "Neptune is named after Roman the god of the sea"
            setTimeout(() => {botChat.innerHTML = "Only one spacecraft has ever flown by Neptune. It happened over 30 years ago!"}, 4000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else if(userInput.value == "Pluto") {
            botChat.textContent = "Pluto hasn't been calssfied as a planet since 2006!"
            setTimeout(() => {botChat.innerHTML = "What planet do you want to know about?"}, 4000);;
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet? Yes or No?"}, 8500);;
            userInput.value = null;
        }
        else {
            botChat.textContent = "That's not a planet silly!";
            setTimeout(() => {botChat.innerHTML = "Remember names begin with capital letters"}, 3000);;
            setTimeout(() => {botChat.innerHTML = "Try typing " + listOfPlanets[randomNumber] + "...";}, 7000);;
            setTimeout(() => {botChat.innerHTML = "What planet in our solar system do you want to know about?"}, 10000);;
            userInput.value = null;
            const randomNumber = Math.floor(Math.random() * (listOfPlanets.length));
        }
    }
    while (botChat.textContent == "Do you want to know about another planet? Yes or No?"){
        if(userInput.value == "Yes"){
            botChat.textContent = "What planet in our solar system do you want to know about?"
            userInput.value = null;
        }
        else if (userInput.value == "No"){
            botChat.textContent = "Thanks for using Pandora Bot!";
            userInput.value = null;
        }
        else {
            botChat.textContent = "Try typing Yes or No"
            setTimeout(() => {botChat.innerHTML = "Do you want to know about another planet in our solar system? Yes or No?"}, 3000);;
            userInput.value = null;
        }
    }
}
