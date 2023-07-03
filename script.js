// Initialize global variables
var startTime;
var startingArray = [];
var startingTotal;
var addedTime = 0;
var addedArrayNew = [];
var newTotal;
var startingAdd;
var url = 'https://www.extra-life.org/api/participants/'+config.participantID+'/donations';

// Function to get the starting date and time
function getStart(){
	var startDate = new Date();
	startTime = startDate.getTime();
}

// Single API call to obtain previous donation information, and calculate optional starting amount of time to add to countdown
var initRequest = new XMLHttpRequest();
initRequest.open("GET",url,true);
initRequest.onload = function(){
	// Sum all donations at initialization
	var data = JSON.parse(this.response);
	for (var index = 0; index<data.length; index++){
		startingArray[index] = data[index].amount;
	}
	startingTotal = startingArray.reduce((acc,val) => {
		return acc+val;
	})
	// Calculate time in ms
	startingAdd = startingTotal * 60 * 1000;
}
initRequest.send();

// Function to get additional donations every 5 seconds, and calculate the amount of time to add to the countdown
function getAddedTime(){
	var newRequest = new XMLHttpRequest();
	newRequest.open("GET",url,true);
	newRequest.onload = function(){
		// Sum all donations for new API call
		var dataNew = JSON.parse(this.response);
		for (var index = 0; index < dataNew.length; index++){
			addedArrayNew[index] = dataNew[index].amount;
		}
		newTotal = addedArrayNew.reduce((acc2,val2) => {
			return acc2 + val2;
		})
		// Compare new total to old total
		if (newTotal == startingTotal){
			// If equal, no added time
			// Inadvertently setting the addition to 0 after it is no longer a new donation?! need to keep a total of all added time
			// Test dono counted the donation for a single interval!
			addedTime += 0;
		} else if (newTotal > startingTotal){
			// Calculate time in ms and save as new starting total
			addedTime += ((newTotal-startingTotal) * 60 * 1000);
			startingTotal = newTotal;
		}
	}
	newRequest.send();
	setTimeout(getAddedTime,5001);
}

function countDown(){
	var now = new Date();
	var currentTime = now.getTime();
	var eventTime = config.marathonStartLength*60*60*1000;
	if (config.usePreviousDonations == true){
		startingAdd = startingAdd;
	} else if (config.usePreviousDonations == false){
		startingAdd = 0;
	}
	var timeRemaining = (startTime+eventTime+startingAdd+addedTime)-currentTime;
	if (timeRemaining<0){
		document.getElementById("displayTimer").innerHTML = "00:00:00";
	} else{
		var s = Math.floor(timeRemaining/1000);
		var m = Math.floor(s/60);
		var h = Math.floor(m/60);
		m %= 60;
		s %= 60;
		h = (h<10) ? "0" + h : h;
		m = (m<10) ? "0" + m : m;
		s = (s<10) ? "0" + s : s;
		document.getElementById("displayTimer").innerHTML = h + ":" + m + ":" + s;
	}
	setTimeout(countDown,1000);
}
