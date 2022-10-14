//https://premiereonscript.com/log-10/

var importSingleFile = File.openDialog("import Video File");
var importAry = [];

print(importSingleFile);

//alert(importSingleFile);
alert(importSingleFile.fsName);

importAry.push(importSingleFile.fsName);
app.project.importFiles(importAry);
