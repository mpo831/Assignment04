/* 
This is my JavaScript page for Assignment 4
*/

// Declaring my variables
var first_name = 'Paolo'
var last_name = 'Ozaraga'
var currentAge = 27
var ageCalculation = 20 //This is in case I want to revisit this code later on and change the calculated value from 20 years in the future to something else

var family_members = ['Mario', 'Cyd', 'Sandelle']


// This is the function to calculate my future age
var futureAge = function() {
	return currentAge + ageCalculation;
}

// This is the function that creates my special message
var specialMessage = function() {
	return first_name + " " + last_name + " is " + currentAge + "."
}

// This is the function that fills my index.html page with values
var populate = function() {
	document.getElementById('first_name').value = first_name;
	document.getElementById('last_name').value = last_name;
	document.getElementById('age').value = currentAge;
	document.getElementById('future_age').value = futureAge();
	document.getElementById('family_members').value = family_members;
	document.getElementById('special_message').value = specialMessage();
}

// This is executing the function I created above (to populate the fields)
//populate(); //decided to tie this to a button instead of calling the function here