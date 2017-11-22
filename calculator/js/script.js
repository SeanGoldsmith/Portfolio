var view = document.getElementById("view");
currentOperation = 0;
holdNumber = 0;
isFirstNumber = true;
currentNumberString = "";

function updateNumber(someNumber) 
{
	currentNumberString += someNumber.toString();
	var currentState = view.innerHTML;
	view.innerHTML = currentState + someNumber.toString();
}

function add() 
{
	currentState = view.innerHTML;
	console.log(currentNumberString);
	if (isFirstNumber)
	{
		holdNumber = parseInt(view.innerHTML);
		currentOperation = 1;
		view.innerHTML = currentState + " + ";
		currentNumberString = "";
		isFirstNumber = false;
	}
	else 
	{
		holdNumber = calcValue();
		currentOperation = 1;
		console.log(holdNumber);
		currentNumberString = "";
		view.innerHTML = holdNumber.toString() + " + ";
	}

}

function subtract() 
{
	currentState = view.innerHTML;
	console.log(currentNumberString);
	if (isFirstNumber)
	{
		holdNumber = parseInt(view.innerHTML);
		currentOperation = 2;
		view.innerHTML = currentState + " - ";
		currentNumberString = "";
		isFirstNumber = false;
	}
	else 
	{
		holdNumber = calcValue();
		currentOperation = 2;
		console.log(holdNumber);
		currentNumberString = "";
		view.innerHTML = holdNumber.toString() + " - ";
	}

}
function multi() 
{
	currentState = view.innerHTML;
	console.log(currentNumberString);
	if (isFirstNumber)
	{
		holdNumber = parseInt(view.innerHTML);
		currentOperation = 3;
		view.innerHTML = currentState + " * ";
		currentNumberString = "";
		isFirstNumber = false;
	}
	else 
	{
		holdNumber = calcValue();
		currentOperation = 3;
		console.log(holdNumber);
		currentNumberString = "";
		view.innerHTML = holdNumber.toString() + " * ";
	}

}
function divide() 
{
	currentState = view.innerHTML;
	console.log(currentNumberString);
	if (isFirstNumber)
	{
		holdNumber = parseInt(view.innerHTML);
		currentOperation = 4;
		view.innerHTML = currentState + " / ";
		currentNumberString = "";
		isFirstNumber = false;
	}
	else 
	{
		holdNumber = calcValue();
		currentOperation = 4;
		console.log(holdNumber);
		currentNumberString = "";
		view.innerHTML = holdNumber.toString() + " / ";
	}

}
function runEquals () {
	total = calcValue();
	view.innerHTML = total;
}


function calcValue ()
{
	if (currentOperation == 0)
	{
		return;
	}
	else if (currentOperation == 1)
	{
		console.log(currentNumberString);
		total = parseInt(holdNumber) + parseInt(currentNumberString);
		console.log(total);
		return total;
	}
	else if (currentOperation == 2)
	{
		console.log(currentNumberString);
		total = parseInt(holdNumber) - parseInt(currentNumberString);
		console.log(total);
		return total;
	}
	else if (currentOperation == 3)
	{
		console.log(currentNumberString);
		total = parseInt(holdNumber) * parseInt(currentNumberString);
		console.log(total);
		return total;
	}
	else if (currentOperation == 4)
	{
		console.log(currentNumberString);
		total = parseInt(holdNumber) / parseInt(currentNumberString);
		console.log(total);
		return total;
	}
}

function clearAll ()
{
	currentNumberString = "";
	isFirstNumber = true;
	holdNumber = 0;
	currentOperation = 0;
	view.innerHTML = "";
}