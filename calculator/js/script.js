currentTotal = 0;
nextNumberOption = 0; //case 0 means first number. case 1 is addition. 
// case two is subtraction
// case three is multiplication
// case 4 is division

function updateNumber(someNumber) {
	if (nextNumberOption == 0)
	{
		var view = document.getElementById("view");
		currentState = view.innerHTML;
		view.innerHTML = currentState + someNumber.toString();
		currentTotal = someNumber;
	}
	else if (nextNumberOption == 1)
	{
		var view = document.getElementById("view");
		currentState = view.innerHTML;
		view.innerHTML = currentState + someNumber.toString();
		currentTotal += someNumber;
	}
	else if (nextNumberOption == 2)
	{
		var view = document.getElementById("view");
		currentState = view.innerHTML;
		view.innerHTML = currentState + someNumber.toString();
		currentTotal -= someNumber;
	}
	else if (nextNumberOption == 3)
	{
		var view = document.getElementById("view");
		currentState = view.innerHTML;
		view.innerHTML = currentState + someNumber.toString();
		currentTotal *= someNumber;
	}
	else if (nextNumberOption == 4)
	{
		var view = document.getElementById("view");
		currentState = view.innerHTML;
		view.innerHTML = currentState + someNumber.toString();
		currentTotal /= someNumber;
	}


}

function add () {
	nextNumberOption = 1;
	var view = document.getElementById("view");
	currentState = view.innerHTML;
	view.innerHTML = currentState + "+";
}

function subtract () {
	nextNumberOption = 2;
	var view = document.getElementById("view");
	currentState = view.innerHTML;
	view.innerHTML = currentState + "-";
}

function multi () {
	nextNumberOption = 3;
	var view = document.getElementById("view");
	currentState = view.innerHTML;
	view.innerHTML = currentState + "*";
}

function divide () {
	nextNumberOption = 4;
	var view = document.getElementById("view");
	currentState = view.innerHTML;
	view.innerHTML = currentState + "/";
}

function printTotal() {
	view.innerHTML = currentTotal;
}

function clearAll() {
	currentTotal = 0;
	nextNumberOption = 0;
	var view = document.getElementById("view");
	view.innerHTML = "";
}