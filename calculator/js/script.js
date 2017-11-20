currentTotal = 0;
nextNumberOption = 0; //case 0 means first number. case 1 is addition. 
// case two is subtraction
// case three is multiplication
// case 4 is division
isFirstNumber = true;
holdValue = 0;

function updateNumber(someNumber) {
		var view = document.getElementById("view");
		currentState = view.innerHTML;
		view.innerHTML = currentState + someNumber.toString();
}

function add () {
	var view = document.getElementById("view");
	viewNumber = parseInt(view.innerHTML)
	if (isFirstNumber) 
	{
		holdValue = viewNumber;
		nextNumberOption = 1;
		isFirstNumber = false;
	}
	else if (!isFirstNumber)
	{
		holdValue = calcNewHoldNumber();
	}
	view.innerHTML = "";
}

function subtract () {
	var view = document.getElementById("view");
	viewNumber = parseInt(view.innerHTML)
	if (isFirstNumber) 
	{
		holdValue = viewNumber;
		nextNumberOption = 2;
		isFirstNumber = false;
	}
	else if (!isFirstNumber)
	{
		holdValue = calcNewHoldNumber();
	}
	view.innerHTML = "";
}

function multi () {
	var view = document.getElementById("view");
	viewNumber = parseInt(view.innerHTML)
	if (isFirstNumber) 
	{
		holdValue = viewNumber;
		nextNumberOption = 3;
		isFirstNumber = false;
	}
	else if (!isFirstNumber)
	{
		holdValue = calcNewHoldNumber();
	}
	view.innerHTML = "";

}

function divide () {
	var view = document.getElementById("view");
	viewNumber = parseInt(view.innerHTML)
	if (isFirstNumber) 
	{
		holdValue = viewNumber;
		nextNumberOption = 4;
		isFirstNumber = false;
	}
	else if (!isFirstNumber)
	{
		holdValue = calcNewHoldNumber();
	}
	view.innerHTML = "";
}

function runEquals() {
	holdValue = calcNewHoldNumber();
	view.innerHTML = holdValue;
	isFirstNumber = true;
}

function clearAll() {
	holdValue = 0;
	nextNumberOption = 0;
	isFirstNumber = true;
	var view = document.getElementById("view");
	view.innerHTML = "";
}

function calcNewHoldNumber() {
	console.log(nextNumberOption);
	if (nextNumberOption == 1)
	{
		var view = document.getElementById("view");
		holdValue = holdValue + parseInt(view.innerHTML);
		return holdValue;
	}
	else if (nextNumberOption == 2)
	{
		var view = document.getElementById("view");
		holdValue = holdValue - parseInt(view.innerHTML);
		return holdValue;
	}
	else if (nextNumberOption == 3)
	{
		var view = document.getElementById("view");
		holdValue = holdValue * parseInt(view.innerHTML);
		return holdValue;
	}
	else if (nextNumberOption == 4)
	{
		var view = document.getElementById("view");
		holdValue = holdValue / parseInt(view.innerHTML);
		return holdValue;
	}
}