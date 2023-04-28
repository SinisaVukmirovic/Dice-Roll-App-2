const createDice = (number) => {
    const dotPositionMatrix = {
        1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
    }

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

// const NUMBER_OF_DICE = null;
const rangeNumberOfDice = document.querySelector('#number-of-dice');
// const NUMBER_OF_DICE = rangeNumberOfDice.value;
// console.log(NUMBER_OF_DICE);
const diceContainer = document.querySelector('.dice-container');
const btnRollDice = document.querySelector('.btn-roll-dice');

// diceContainer.appendChild(createDice(5));
// diceContainer.appendChild(createDice(3));
// console.log(createDice(3))

randomizeDice(diceContainer, rangeNumberOfDice.value);

btnRollDice.addEventListener('click', () => {
	// NUMBER_OF_DICE == rangeNumberOfDice.value;
	// console.log(NUMBER_OF_DICE);

    const interval = setInterval(() => {
        randomizeDice(diceContainer, rangeNumberOfDice.value);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
});

// range indicator
document.querySelector('input[type=range]').addEventListener('input', function rangeChange() {
	// trigger the CSS to update
	this.setAttribute('value', this.value);
});