let a = Math.floor(Math.random() * 100);

// (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

if (a > 2) {
	//Always int. Twice the number. 3 and more: true, 2 and less: false
	console.log((2 * a) + 1);
} else if (a > 4) {
	//Should never execute
	//Always int; Less than 3: 1; If 4: 4; If 5: 6...
	//4 and less: false
	//5 and more: true
	console.log(5);
} else if (a % 2 == 0) {
	console.log(6);
} else {
	console.log(7);
}

switch (a) {
	case 0:
	case 2:
		console.log(6);
		break;
	case 1:
		console.log(7);
		break;
	default:
		console.log((2 * a) + 1);
		break;
}
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()


