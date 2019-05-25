var startTime;
var startingArray = [];
var startingTotal;
var addedTime = 0;
var addedArrayNew = [];
var addedArrayOld = [];
var newTotal;
var startingAdd;
function getStart(){
	var startDate = new Date();
	startTime = startDate.getTime();
}
var initRequest = new XMLHttpRequest();
initRequest.open('GET','https://www.extra-life.org/api/participants/347751/donations',true);
initRequest.onload = function(){
	var data = JSON.parse(this.response);
	for (var index = 0; index<data.length; index++){
		startingArray[index] = data[index].amount;
	}
	startingTotal = startingArray.reduce((acc,val) => {
		return acc+val;
	})
	startingAdd = startingTotal * 60 * 1000;
}
initRequest.send();
function getAddedTime(){
	var newRequest = new XMLHttpRequest();
	newRequest.open('GET','https://www.extra-life.org/api/participants/347751/donations',true);
	newRequest.onload = function(){
		var dataNew = JSON.parse(this.response);
		for (var index = 0; index < dataNew.length; index++){
			addedArrayNew[index] = dataNew[index].amount;
		}
		newTotal = addedArrayNew.reduce((acc2,val2) => {
			return acc2 + val2;
		})
		if (newTotal == startingTotal){
			addedTime = 0;
		} else if (newTotal > startingTotal){
			addedTime = (newTotal-startingTotal) * 60 * 1000;
			startingTotal = newTotal;
		}
		console.log(addedArrayNew);
		console.log(addedTime);
	}
	newRequest.send();
	setTimeout(getAddedTime,15001);
}
function countDown(){
	var now = new Date();
	var currentTime = now.getTime();
	var eventTime = document.getElementById("marathonLength").value * 60 * 60 * 1000;
	var whichDonations = document.querySelector("input[name='donationHistory']:checked").value;
	if (whichDonations == "all"){
		startingAdd = startingAdd;
	} else if (whichDonations == "newOnly"){
		startingAdd = 0;
	}
	var timeRemaining = (eventTime+startTime+startingAdd+addedTime)-currentTime;
	var s = Math.floor(timeRemaining/1000);
	var m = Math.floor(s/60);
	var h = Math.floor(m/60);
	m %= 60;
	s %= 60;
	h = (h<10) ? "0" + h : h;
	m = (m<10) ? "0" + m : m;
	s = (s<10) ? "0" + s : s;
	document.getElementById("hours").innerHTML = h;
	document.getElementById("minutes").innerHTML = m;
	document.getElementById("seconds").innerHTML = s;
	setTimeout(countDown,1000);
}