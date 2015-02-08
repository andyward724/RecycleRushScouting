// Debug mode
var debugMode = true;

// Max teams per alliance
var maxTeamsPerAlliance = 3; 

// Max buttons on controller
var maxContrBtns = 24;  

// Dpad id
var dpadId = { d: 0, r: 1, u: 2, l: 3 };

// Min stick tolerance
var stickTolerance = 0.8125;  

// Axes chn for left stick
var chnLeftStick = { x: 0, y: 1 };  

// Axes chn for right stick
var chnRightStick = { x: 2, y: 3 };  

// Mode ids
var modeId = { tags: 0, scoring: 1 };

// Sub mode ids
var subId = { tags: { auto: 0, capabilities: 1, rating: 2 }, scoring: { auto: 0, teleop: 1} };

// Names for tags area submodes
var tagsNames = ["auto", "capabilities", "rating"];

// Names for scoring area submodes
var scoringNames = ["auto", "teleop"];

// Max sub mode ids
var maxSubId = { tags: 3, scoring: 2 };

// Max inner ids
var maxInnerId = { tags: { auto: 4, capabilities: 6, rating: 3 }, scoring: { auto: 3, teleop: 2 } };

// Button ids for controller
var contrBtn =                              
{
	a: 0,     // a
	b: 1,     // b
	x: 2,     // x
	y: 3,     // y
	lb: 4,    // left bumper
	rb: 5,    // right bumper
	lt: 6,    // left trigger
	rt: 7,    // right trigger
	bk: 8,    // back
	st: 9,    // start
	ls: 10,   // left stick
	rs: 11,   // right stick
	du: 12,   // dpad up
	dd: 13,   // dpad down
	dl: 14,   // dpad left
	dr: 15,   // dpad right
	lu: 16,   // left stick up
	ld: 17,   // left stick down
	ll: 18,   // left stick left
	lr: 19,   // left stick right
	ru: 20,   // right stick up
	rd: 21,   // right stick down
	rl: 22,   // right stick left
	rr: 23    // right stick right
};