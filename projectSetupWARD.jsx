/*
    WARD Script
    SetUp & Edit Base/Mobile versions of Video
    */
app.enableQE();

var project = app.project;
var someID = "base";

//Intro Music
var chosenMusicFile = "X:/NewMusic X/Scary/Alon Peretz - Lost Are We.mp3";
var gradientOverlayFile = "X:/marketing/BigAds/Gradient.png";
var dunDUNmusicFile = "X:/NewMusic X/DUNDUN/Epic Stock Media - Blockbuster Trailer - Glassy Resonant Tone, Vibrating, Screeching, Reverberant.wav";
var dunDUNanimation = "X:/2022 ITEMS/Outros/lol Small.png";

VidName = prompt("X:/NewVids X", "X:/NewVids X/", "NewVid Stream Path");
VidStart = prompt("", "Start time", "VidStart");
VidEnd = prompt("", "End time", "VidEnd");
VidHighlight = prompt("", "Highlight time", "VidHighlight");

var mobileWardBackground = "X:/2022 ITEMS/Backgrounds MOBILE/mobile BACKGROUND placeholder WARD.mp4";
var baseWardOutro = "X:/2022 ITEMS/Outros/2022 OUTRO WUNDERWARD v3.mp4";

var importAry = [];

importAry.push(VidName + ".mp4");        //app.project.rootItem.children[0]
importAry.push(mobileWardBackground);   //app.project.rootItem.children[1]
importAry.push(baseWardOutro);              //app.project.rootItem.children[2]
importAry.push(chosenMusicFile);            //app.project.rootItem.children[3]
importAry.push(gradientOverlayFile);        //app.project.rootItem.children[4]
importAry.push(dunDUNmusicFile);            //app.project.rootItem.children[5]
importAry.push(dunDUNanimation);            //app.project.rootItem.children[6]
/*
    0: Stream footage
    1: Mobile Background
    2: Base Outro
*/

app.project.importFiles(importAry);

/*
    Sequence setup
*/
var baseSequence = app.project.createNewSequenceFromClips("Base Sequence",[app.project.rootItem.children[0]], project.rootItem);

var allSequences = project.sequences;

var startTime = new Time();
startTime.seconds = parseInt(VidStart);
var endTime = new Time();
endTime.seconds = parseInt(VidEnd);
var highlightTime = new Time();
highlightTime.seconds = parseInt(VidHighlight);
var setDuration = new Time();
setDuration.seconds = endTime.seconds - startTime.seconds;
var setHighlightDuration = new Time();
setHighlightDuration.seconds = 2;
var setTensionDuration = new Time();
setTensionDuration.seconds = 1.5; 

var startTimeOff = new Time();
startTimeOff.seconds = setTensionDuration.seconds + setHighlightDuration.seconds;

//$.writeln(app.project.sequences[0].name);
//$.writeln(app.project.sequences[1].name);
//$.writeln(app.project.sequences[0].id);
//$.writeln(app.project.sequences[1].id);
/*
Base
Mobile
/*
    BASE Setup ---------------------------------------------------------------------------------------------------------------------
*/
var baseVideoTracks = app.project.activeSequence.videoTracks;
var baseThisTrack = baseVideoTracks[0];
var baseClips = baseThisTrack.clips;
var baseThisClip = baseClips[0];

app.project.activeSequence.videoTracks[2].insertClip(app.project.rootItem.children[4], 0);
var gradientPic = app.project.activeSequence.videoTracks[2].clips[0];
gradientPic.end = setHighlightDuration;
gradientPic.start = 0;
gradientPic.inPoint = highlightTime.seconds - setHighlightDuration.seconds;

/*
app.project.activeSequence.videoTracks[2].insertClip(app.project.rootItem.children[6], setHighlightDuration.seconds);
var dunAnimation = app.project.activeSequence.videoTracks[2].clips[1];
dunAnimation.start = setHighlightDuration.seconds + 0.05;
var dunEffectAnimation;
for(var i = 0; i < dunAnimation.components.numItems; i++){
    if(dunAnimation.components[i].displayName == "Opacity"){
        dunEffectAnimation = dunAnimation.components[i]; 
        }
    }
dunEffectAnimation.properties[0].setTimeVarying(true);
dunEffectAnimation.properties[0].addKey(dunAnimation.start);
dunEffectAnimation.properties[0].addKey(dunAnimation.start + (dunAnimation.start / 2));
dunEffectAnimation.properties[0].setValueAtKey(dunAnimation.start, 0);
dunEffectAnimation.properties[0].setValueAtKey(dunAnimation.start + (dunAnimation.start / 2), 100);
var dunQEanimation = qe.project.getActiveSequence().getVideoTrackAt(2).getItemAt(2);
dunQEanimation.addVideoEffect(qe.project.getVideoEffectByName("Color Key"));
var dunEffect2Animation;
for(var i = 0; i < dunAnimation.components.numItems; i++){
    if(dunAnimation.components[i].displayName == "Color Key"){
        dunEffect2Animation = dunAnimation.components[i]; 
        }
    }
dunEffect2Animation.properties[0].setValue(000000);
*/

app.project.activeSequence.videoTracks[1].insertClip(app.project.rootItem.children[0], 0);
var highlightClip = app.project.activeSequence.videoTracks[1].clips[0];

highlightClip.end = setHighlightDuration;
highlightClip.start = 0;
highlightClip.inPoint = highlightTime.seconds - setHighlightDuration.seconds;

/*
markers = app.project.activeSequence.markers;
var markerStart = new Time();
markerStart.seconds = setHighlightDuration.seconds; 
markers.createMarker(markerStart.seconds, "dunAnimation marker", setTensionDuration.seconds);

//app.project.activeSequence.videoTracks[1].insertClip(app.project.rootItem.children[6], app.project.activeSequence.markers[0].start);

app.project.activeSequence.markers[0].start = setHighlightDuration.seconds;

app.project.activeSequence.videoTracks[1].insertClip(app.project.rootItem.children[6], setHighlightDuration.seconds);
var dunAnimation = app.project.activeSequence.videoTracks[1].clips[1];
var dunEffectAnimation;
for(var i = 0; i < dunAnimation.components.numItems; i++){
    if(dunAnimation.components[i].displayName == "Opacity"){
        dunEffectAnimation = dunAnimation.components[i]; 
        }
    }
dunEffectAnimation.properties[0].setTimeVarying(true);
dunEffectAnimation.properties[0].addKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds);
dunEffectAnimation.properties[0].addKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds + app.project.activeSequence.videoTracks[1].clips[1].end.seconds);
dunEffectAnimation.properties[0].setValueAtKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds, 100);
dunEffectAnimation.properties[0].setValueAtKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds + app.project.activeSequence.videoTracks[1].clips[1].end.seconds, 0); 
var dunQEanimation = qe.project.getActiveSequence().getVideoTrackAt(1).getItemAt(1);
dunQEanimation.addVideoEffect(qe.project.getVideoEffectByName("Turbulent Displace"));
var dunEffect2Animation;
for(var i = 0; i < dunAnimation.components.numItems; i++){
    if(dunAnimation.components[i].displayName == "Turbulent Displace"){
        dunEffect2Animation = dunAnimation.components[i]; 
        }
    }
dunEffect2Animation.properties[1].setTimeVarying(true);
dunEffect2Animation.properties[1].addKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds);
dunEffect2Animation.properties[1].addKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds + app.project.activeSequence.videoTracks[1].clips[1].end.seconds);
dunEffect2Animation.properties[1].setValueAtKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds, 50);
dunEffect2Animation.properties[1].setValueAtKey(app.project.activeSequence.videoTracks[1].clips[1].inPoint.seconds + app.project.activeSequence.videoTracks[1].clips[1].end.seconds, 715); 
*/

baseThisClip.end = setDuration;
baseThisClip.start = setHighlightDuration.seconds + setTensionDuration.seconds;
baseThisClip.inPoint = startTime.seconds;

//adding opacity change at end of clip
var qeClip = qe.project.getActiveSequence().getVideoTrackAt(0).getItemAt(0);
var components = baseThisClip.components;
var effect;

for(var i = 0; i < components.numItems; i++){
    if(components[i].displayName == "Opacity"){
        effect = components[i]; 
        }
    }
var opacityOffSet = new Time();
opacityOffSet.seconds = 3 + startTimeOff.seconds ;
effect.properties[0].setTimeVarying(true);
var k = effect.properties[0].getKeys(); 
var timeSplit = new Time();
timeSplit.seconds = 6;

effect.properties[0].addKey(baseThisClip.end.seconds + baseThisClip.inPoint.seconds);
effect.properties[0].addKey((baseThisClip.end.seconds + baseThisClip.inPoint.seconds) - opacityOffSet.seconds);

effect.properties[0].setValueAtKey((baseThisClip.end.seconds + baseThisClip.inPoint.seconds ) - opacityOffSet.seconds, 100);
effect.properties[0].setValueAtKey(baseThisClip.end.seconds, 0);
//effect.properties[0].setValueAtKey((baseThisClip.end.seconds + baseThisClip.inPoint.seconds) - opacityOffSet.seconds, 100);
//effect.properties[0].setValueAtKey(baseThisClip.end.seconds + baseThisClip.inPoint.seconds, 0);

//Handling Clip audio!
var baseAudioTracks =app.project.activeSequence.audioTracks;
var baseThisAudioTrack = baseAudioTracks[0];
var baseAudioClips = baseThisAudioTrack.clips;
var baseThisAudioClip = baseAudioClips[0];

var highlightClipAUDIO = app.project.activeSequence.audioTracks[1].clips[0];

app.project.activeSequence.audioTracks[2].insertClip(app.project.rootItem.children[5], setHighlightDuration.seconds);
var gradientPic = app.project.activeSequence.audioTracks[2].clips[0];

gradientPic.start = setHighlightDuration.seconds;

highlightClipAUDIO.end = setHighlightDuration;
highlightClipAUDIO.start = 0;
highlightClipAUDIO.inPoint = highlightTime.seconds - setHighlightDuration.seconds;

baseThisAudioClip.end = setDuration;
baseThisAudioClip.start = setHighlightDuration.seconds + setTensionDuration.seconds;
baseThisAudioClip.inPoint =startTime.seconds;

//adding volume change at end of clip's audio
var qeClipAUDIO = qe.project.getActiveSequence().getAudioTrackAt(0).getItemAt(0);
var componentsAUDIO = baseThisAudioClip.components;
var effectAUDIO;

for(var i = 0; i < componentsAUDIO.numItems; i++){
    if(componentsAUDIO[i].displayName == "Volume"){
        effectAUDIO = componentsAUDIO[i];
        }
    }
effectAUDIO.properties[1].setTimeVarying(false);
effectAUDIO.properties[1].setTimeVarying(true);
effectAUDIO.properties[1].addKey(baseThisAudioClip.end.seconds + baseThisAudioClip.inPoint.seconds);
effectAUDIO.properties[1].addKey((baseThisAudioClip.end.seconds + baseThisAudioClip.inPoint.seconds) - opacityOffSet.seconds);

effectAUDIO.properties[1].setValueAtKey((baseThisAudioClip.end.seconds + baseThisAudioClip.inPoint.seconds) - opacityOffSet.seconds, 0.15);
effectAUDIO.properties[1].setValueAtKey(baseThisAudioClip.end.seconds + baseThisAudioClip.inPoint.seconds, -15.0);

//$.writeln(effectAUDIO.properties[1].valueOf());

//Handling Outro Clip 

var outroInsertTime = new Time();
outroInsertTime.seconds = setDuration.seconds;

//insert OUTRO at end of uncut-clip
app.project.activeSequence.videoTracks[0].insertClip(app.project.rootItem.children[2], outroInsertTime);

/*
    MOBILE Setup ---------------------------------------------------------------------------------------------------------------------
*/
var mobileSequence = project.createNewSequenceFromClips("Mobile Sequence",[project.rootItem.children[1]], project.rootItem);
var exampleTime = new Time();
exampleTime.seconds = 2;

$.writeln("start " + app.project.activeSequence.videoTracks[0].clips[0].start.seconds);
$.writeln("end " + app.project.activeSequence.videoTracks[0].clips[0].end.seconds);
$.writeln("inPoint " + app.project.activeSequence.videoTracks[0].clips[0].inPoint.seconds);
$.writeln("outPoint " + app.project.activeSequence.videoTracks[0].clips[0].outPoint.seconds);
$.writeln("outPoint - 2 " + (app.project.activeSequence.videoTracks[0].clips[0].outPoint.seconds - 2));
$.writeln("outPoint - exampleTime.seconds " + (app.project.activeSequence.videoTracks[0].clips[0].outPoint.seconds - exampleTime.seconds));
var clipSeconds = app.project.activeSequence.videoTracks[0].clips[0].outPoint.seconds;
$.writeln("outPoint - clipSeconds " + (clipSeconds - exampleTime.seconds));

$.writeln("start " + app.project.activeSequence.videoTracks[0].clips[0].start.ticks);
$.writeln("end " + app.project.activeSequence.videoTracks[0].clips[0].end.ticks);
$.writeln("inPoint " + app.project.activeSequence.videoTracks[0].clips[0].inPoint.ticks);
$.writeln("outPoint " + app.project.activeSequence.videoTracks[0].clips[0].outPoint.ticks);
$.writeln("outPoint - 2" + app.project.activeSequence.videoTracks[0].clips[0].outPoint.ticks - exampleTime.ticks);
