"use strict";

var display = "";
var operator= null;
var operand1= null;
var operand2= null;
var positive = true;

document.getElementById("calc-display").innerHTML = display;

function digit(num){
	if(display == 'Error')
		display="";
	display += num;
	document.getElementById("calc-display").innerHTML = display;
}

function operation(op){
	if(display.length==0)
		return;

	operand1 = parseFloat(display);
	operator = op;
	positive=true;
	display = "";
	document.getElementById("calc-display").innerHTML = display;
}

function calculate(){
	if(operator==null)
		return;

	operand2 = parseFloat(display);
	var ans;
	switch (operator) {
		case "add":
			ans = operand1+operand2;
			break;
		case "subtract":
			ans = operand1-operand2;
			break;
		case "multiply":
			ans = operand1*operand2;
			break;
		case "divide":
			if(operand2==0)
				ans = "Error";
			else
				ans = operand1/operand2;
			break;
		default:
			// statements_def
			break;
	}
	display = ""+ans;
	document.getElementById("calc-display").innerHTML = display;
}

function clean(){
	display="";
	operand1=null;
	operand2=null;
	operator=null;
	console.log("Cleared.");
	document.getElementById("calc-display").innerHTML = display;
}

function togglePositive(){
	if(positive){
		display = "-"+display;
		positive=false;
	}
	else{
		display = display.substring(1);
		positive=true;
	}
	document.getElementById("calc-display").innerHTML = display;
}

function percentage(){
	
	if(display.length==0){
		return;
	}
	
	if(operand2==null){
		operand1 = parseFloat(display);
		display = operand1/100;
	}
	else{
		calculate();
		display = parseFloat(ans)/100;
	}
	operator = "percent";
	document.getElementById("calc-display").innerHTML = display;
}

// Handling Keyboard Event

document.addEventListener("keypress", keyDownTextField, false);

function keyDownTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode>=48 && keyCode<=57){
  		digit(keyCode-48);
  }
  else if(keyCode==61 || keyCode==13){
  	calculate();
  }
  else if(keyCode==46){
  	digit('.');
  }
  else if(keyCode==42){
  	operation('multiply');
  }
  else if(keyCode==47){
  	operation('divide');
  }
  else if(keyCode==45){
  	operation('subtract');
  }
  else if(keyCode==43){
  	operation('add')
  }
  else if(keyCode==37){
  	percentage();
  }

}