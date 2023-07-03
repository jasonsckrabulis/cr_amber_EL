window.config = {
	// 'participantID' from your Extra Life fundraising page
	// It is the last 6 digits of the fundraising page URL
	participantID: 508911,
	
	// The starting amount of time on the clock
	// Time is in hours
	marathonStartLength: 2,
	
	// Multiplier for calculating added time per dollarModifier
	// Default is 1; $1*1 = 1 min added
	dollarMultiplier: 1,
	
	// Use any previous donations to add time to the countdown
	// false: 	Only use new donations (default; activates on page load + startDelay)
	// true:	Use all donations to add time
	//			For example, can be used if marathonStartLength = 0
	usePreviousDonations: false,
	
	// Delay before the countdown starts
	// This is needed because functions run as soon as page loads (i.e. when it is added as a streaming browser source).
	// Until this time is over, there will be no time on the countdown.
	// Time is in minutes
	startDelay: 1
};
