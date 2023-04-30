const rangeIndicator = document.querySelector('input[type=range]')

rangeIndicator.addEventListener('input', function rangeChange() {
	// trigger the CSS to update
	this.setAttribute('value', this.value);
});