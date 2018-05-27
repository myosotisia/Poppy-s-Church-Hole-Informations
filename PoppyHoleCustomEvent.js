// Copyright (c) 2018 
// Author: Guillaume H.G (https://github.com/Rumply)
// Free of use

// Variables
var displayLightInfo = true;
var displayExtinguishInfo = true;
var oldTime = state.time;

//To add more : https://docs.google.com/spreadsheets/d/1j7-DQF2ZynfsODpgF7_CAeXaVpc0B0SLwnKuShq7vRw/edit#gid=0
var nameDictionnary = {
};

// Functions
function DisplayInfo(info, action) {
	console.info('----------------------');
	console.info(`Action : ${action}`);
	if (nameDictionnary[info])
		console.info(`Name : ` + nameDictionnary[info]);
	console.info(`ID : ${info}`);
	console.info('Avatar :');
	console.info(`  - https://s3-us-west-2.amazonaws.com/poppychurch/users/avatars/${info}.png`);
	console.info('Signature :');
	console.info(`  - https://s3-us-west-2.amazonaws.com/poppychurch/users/signatures/${info}.png`);
	console.info('Timer : ' + oldTime);
}

//Remove EventListener to reduce conflit
socket.removeEventListener('extinguish');
socket.removeEventListener('light');
socket.removeEventListener('tick');

//Adding our custom EventListener
socket.on('extinguish', function(who) {
	if (displayExtinguishInfo)
		DisplayInfo(who, 'Extinguish');
	state.candleLit = false;
	extinguishCandle()
})

socket.on('light', function(who) {
	if (displayLightInfo)
		DisplayInfo(who, 'Light');
	state.candleLit = true;
	lightCandle();
})

socket.on('tick', function(time) {
	oldTime = state.time;
	state.time = time;
	$('#time').text(time);
})