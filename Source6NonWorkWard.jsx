/*
    WARD Script
    SetUp & Edit Base/Mobile versions of Video
*/

var project = app.project;
var someID = "base";

VidName = prompt("X:/NewVids X", "X:/NewVids X/", "NewVid Stream Path");
VidStart = prompt("", "Start time", "VidStart");
VidEnd = prompt("", "End time", "VidEnd");
var mobileWardBackground = "X:/2022 ITEMS/Backgrounds MOBILE/mobile BACKGROUND placeholder WARD.mp4";
var baseWardOutro = "X:/2022 ITEMS/Outros/2022 OUTRO WUNDERWARD v3.mp4";

var importAry = [];

importAry.push(VidName + ".mp4");
importAry.push(mobileWardBackground);
importAry.push(baseWardOutro);
/*
    0: Stream footage
    1: Mobile Background
    2: Base Outro
*/

app.project.importFiles(importAry);

/*
    BASE Setup
*/
var baseSequence = app.project.createNewSequenceFromClips("Base Sequence",[app.project.rootItem.children[0]], project.rootItem);
var startTime = new Time();
startTime.seconds = parseInt(VidStart);
var endTime = new Time();
endTime.seconds = parseInt(VidEnd);

//Livestream Clip Edit
var baseVideoTracks = baseSequence.videoTracks;
var baseThisTrack = baseVideoTracks[0];
var baseClips = baseThisTrack.clips;
var baseThisClip = baseClips[0];

baseThisClip.inPoint = startTime;
baseThisClip.outPoint = endTime;

//baseThisClip.start = 0;

//Audio from Clip1 Edit
var baseAudioTracks = baseSequence.audioTracks;
var baseThisAudioTrack = baseAudioTracks[0];
var baseAudioClips = baseThisAudioTrack.clips;
var baseThisAudioClip = baseAudioClips[0];

baseThisAudioClip.inPoint = startTime;
baseThisAudioClip.outPoint = endTime;

baseThisAudioClip.start = 0;
/*
    MOBILE Setup
*/
//var mobileSequence = project.createNewSequenceFromClips("Base Sequence",[project.rootItem.children[1]], project.rootItem);