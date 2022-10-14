//https://premiereonscript.com/log-10/

var filterString = "";

if(Folder.fs === 'Windows'){
    filterString="All files:*.*";
}

var importManyFiles = File.openDialog("Import Files", filterString, true);
var importAry = [];

if(importManyFiles){
    for(var i = 0; i < importManyFiles.length; i++){
        importAry[i] = importManyFiles[i].fsName;
        }
    }

app.project.importFiles(importAry, 1, app.project.rootItem, 0);