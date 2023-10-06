"use strict";
const requestURL = " https://nemo3003.github.io/wdd230/chamber/data/spotlight.json";
// Get the JSON data
let positions1 = [0, 1, 2]
let positions2 = [3, 4, 5]
let positions3 = [6, 7, 8]
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const spotlights = jsObject['spotlights'];
        for (let i = 0; i < 1; i++) {
            let choice = randomChoice(positions1);
            let title = document.createElement('h2');
            let image = document.createElement('img');
            let description = document.createElement('p');

            description.textContent = spotlights[choice].description;

            image.setAttribute('src', spotlights[choice].image);
            image.setAttribute('alt', spotlights[choice].title);

            document.getElementById('spot').appendChild(title);
            document.getElementById('spot').appendChild(image);
            document.getElementById('spot').appendChild(description);

        }

    });

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const spotlights = jsObject['spotlights'];
        let choice = randomChoice(positions2);
        for (let i = 0; i < 1; i++) {
            let title = document.createElement('h2');
            let image = document.createElement('img');
            let description = document.createElement('p');

            description.textContent = spotlights[choice].description;

            image.setAttribute('src', spotlights[choice].image);
            image.setAttribute('alt', spotlights[choice].title);

            document.getElementById('spot1').appendChild(title);
            document.getElementById('spot1').appendChild(image);
            document.getElementById('spot1').appendChild(description);

        }
    });

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const spotlights = jsObject['spotlights'];
        let choice = randomChoice(positions3);
        for (let i = 0; i < 1; i++) {
            let title = document.createElement('h2');
            let image = document.createElement('img');
            let description = document.createElement('p');

            description.textContent = spotlights[choice].description;

            image.setAttribute('src', spotlights[choice].image);
            image.setAttribute('alt', spotlights[choice].title);

            document.getElementById('spot2').appendChild(title);
            document.getElementById('spot2').appendChild(image);
            document.getElementById('spot2').appendChild(description);

        }
    });

