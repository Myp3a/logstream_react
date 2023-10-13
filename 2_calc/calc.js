const putChar = (char) => {
	const input = document.getElementById('calcWindow');
	input.value += char;
}

const addHistory = (text) => {
	const history = document.getElementById('history');
	const p = document.createElement('p');
	p.innerText = text;
	history.appendChild(p);
}

const calcInput = () => {
	const calcInput = document.getElementById('calcWindow');
	const value = eval(calcInput.value);
	addHistory(calcInput.value + "=" + value);
	calcInput.value = value;
}
