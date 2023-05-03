// const rangeIndicator = document.querySelector('input[type=range]')
import { randomizeDice } from "./script.js";
import { diceContainer, rangeIndicator } from "./DOMelements.js";

rangeIndicator.addEventListener('input', function rangeChange() {
	// trigger the CSS to update
	this.setAttribute('value', this.value);
});

// on range change
rangeIndicator.addEventListener('change', () => {
	randomizeDice(diceContainer, rangeIndicator.value);
});