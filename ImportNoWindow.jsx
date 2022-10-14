app.enableQE();

var vanillaSequence = app.project.activeSequence;
var qeSequence = qe.project.getActiveSequence(0);



VidName = prompt("X:/NewVids X", "X:/NewVids X/", "NewVid Stream Path");
//VidStart = prompt("", "", "VidStart");
//VidEnd = prompt("", "", "VidEnd");
//CutTimes = prompt("", "", "CutTimes");

//["X:/2022 ITEMS/Backgrounds MOBILE/mobile BACKGROUND placeholder WARD.mp4",];
var importAry = [];
importAry.push(VidName + ".mp4");
app.project.importFiles(importAry);
//importAry.push(importSingleFile.fsName);
//Track.insertClip(app.project.importFiles(importAry), 0);



qeSequence.addTracks(3,4,3,0);
    //1: num of video tracks
    //2: track to add them after
    //3: num audio tracks to add
    //4: track to add them after
    
app.project.sequences[0].audioTracks[0].insertClip(importAry, 0);
app.project.sequences[0].videoTracks[0].insertClip(importAry, 0);
    
//var thisTrack = app.project.activeSequence.videoTracks[0];

    
