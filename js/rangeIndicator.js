// const rangeIndicator = document.querySelector('input[type=range]')
import { rangeIndicator } from "./DOMelements.js";

rangeIndicator.addEventListener('input', function rangeChange() {
	// trigger the CSS to update
	this.setAttribute('value', this.value);
});