var project = app.project;

var sequence = project.activeSequence;
var videoTracks = sequence.videoTracks;
var thisTrack = videoTracks[0];
var clips = thisTrack.clips;
var thisClip = clips[0];

alert(thisClip.duration.seconds);
alert(thisClip.end.seconds);
alert(thisClip.inPoint.seconds);
alert(thisClip.outPoint.seconds);
alert(thisClip.start.seconds);
