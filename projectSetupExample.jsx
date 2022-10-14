var project = app.project;
var someID = "base";

VidName = prompt("X:/NewVids X", "X:/NewVids X/", "NewVid Stream Path");
var mobileWardBackground = "X:/2022 ITEMS/Backgrounds MOBILE/mobile BACKGROUND placeholder WARD.mp4";
var mobileWaveBackground = "X:/2022 ITEMS/Backgrounds MOBILE/mobile BACKGROUND placeholder WAVE.mp4";
var baseWardOutro = "X:/2022 ITEMS/Outros/2022 OUTRO WUNDERWARD v3.mp4";
var baseWaveOutro = "X:/2022 ITEMS/Outros/2022 OUTRO WUNDERWAVE v3.mp4";

var importAry = [];

importAry.push(VidName + ".mp4");
importAry.push(mobileWardBackground);
importAry.push(mobileWaveBackground);
importAry.push(baseWardOutro);
importAry.push(baseWaveOutro);

app.project.importFiles(importAry);

var baseSequence = project.createNewSequenceFromClips("Base Sequence",[app.project.rootItem.children[0]], project.rootItem);
var mobileSequence = project.createNewSequenceFromClips("Base Sequence",[app.project.rootItem.children[1]], project.rootItem);