// Copyright (c) 2018 
// Author: Guillaume H.G (https://github.com/Rumply)
// Free of use

// Variables
var displayLightInfo = true;
var displayExtinguishInfo = true;
var oldTime = state.time;

//To add more : https://docs.google.com/spreadsheets/d/1j7-DQF2ZynfsODpgF7_CAeXaVpc0B0SLwnKuShq7vRw/edit#gid=0
var nameDictionnary = {
	'5b0575a9fc0328001eac9a58':'<3 Sophia','5b04a28d182716001eca37e2':'emily <3',
	'5b09b584764e920046b56f4c':'Luminosity','5b02a1407d60b6001e835bcc':'Unoseti',
	'5b04b482182716001eca38a4':'Reese','5b00a716cf5dc883d3d8db71':'myosotis',
	'5b05443afc0328001eac983e':'jeremiah','5b0150096bc650af735accc5':'Rosie',
	'5b0b1872ff7fce0032adea03':'Max','5b0622bd87c62f001e192452':'Rumply',
	'5b01f89c7d60b6001e835793':'yrace','5b0a8a27b8d768003c5595f1':'Collin',
	'5b09e1a5b56f22001e760744':'Oliver','5b0150496bc650af735acd57':'Nelly',
	'5b05fca83802b5004606bb0a':'damien','5b063a54faf7ed001e273a26':'Bailey',
	'5b00a704cf5dc883d3d8db44':'lum','5b05ed3b3802b5004606b972':'EternalKnight',
	'5b07e725f9bc8600325d051e':'Pixie Queen','5b05b61f62347400284d375b':'Jack',
	'5b034a2927a3c6001e0d2dc8':'Lightbug01 (ellen)','5b049b849180f4001e5c38bb':'ZEE_DAWG32',
	'5b07adcbbad68b001e27c48c':'FauxUnknown','5b05c06346745e003292a559':'Evelyn',
	'5b01f87a7d60b6001e835719':'ALEX','5b080dca0e7ace00465c9d25':'Josh',
	'5b02a14a7d60b6001e835beb':'Lazarus','5b0aa1d6b8d768003c559776':'Matt Lo',
	'5b05ece83802b5004606b857':'Jun Le'
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
