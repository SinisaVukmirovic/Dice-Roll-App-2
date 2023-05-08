export { randomizeDice };

import './rangeIndicator.js';
import { rangeNumberOfDice, diceContainer, btnRollDice } from './DOMelements.js';
import { dotPositionMatrix } from './dotPositionMatrix.js';

const createDice = (number) => {
    const dice = document.createElement('div');
    dice.classList.add('dice');

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement('div');
        dot.classList.add('dice-dot');

        // dot.style.setProperty('--top', ${dotPosition[0]%});
        // dot.style.setProperty('--left', ${dotPosition[1]%});
        dot.style.setProperty('--top', dotPosition[0] + '%');
        dot.style.setProperty('--left', dotPosition[1] + '%');

        dice.appendChild(dot);
    }

    return dice;
}

const randomizeDice = (diceContainer, numberOfDice) => {
    diceContainer.innerHTML = '';

    for (let i = 0; i < numberOfDice; i++) {
        let random = Math.floor((Math.random() * 6 + 1));

        const dice = createDice(random);

        diceContainer.appendChild(dice);
    }
}

let NUMBER_OF_DICE = 6;

randomizeDice(diceContainer, NUMBER_OF_DICE);

btnRollDice.addEventListener('click', () => {
	NUMBER_OF_DICE = rangeNumberOfDice.value;

    const interval = setInterval(() => {
        randomizeDice(diceContainer, NUMBER_OF_DICE);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
});