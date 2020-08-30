"use strict";

var display = "";
var operator= null;
var operand1= null;
var operand2= null;
var positive = true;

document.getElementById("calc-display").innerHTML = display;

// var digits = document.getElementsByClassName("digit");

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