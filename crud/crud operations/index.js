const fs = require('fs')
const path = require('path')

btnCreate = document.getElementById('btnCreate')
btnRead = document.getElementById('btnRead')
btnDelete = document.getElementById('btnDelete')
fileName = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')


// Create File
 btnCreate.addEventListener('click', function(){

    // With checking if dir already exists:
    // if (!fs.existsSync('PATH/TO/DIR')) fs.mkdir('PATH/TO/DIR');

    // Without checking if dir already exists:
    // make file
    fs.mkdirSync('Files/'+fileName.value);
    // establish file path
    let pathName = path.join(__dirname, 'Files/'+fileName.value);

    let file = path.join(pathName, fileName.value+'.txt')
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){
        if(err){
            return console.log(err);
        }
        console.log('file created')
    })
})


// Read File
btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value+'.txt')
    fs.readFile(file, function(err, data){
        if(err) {
            return console.log(err);
        }
        fileContents.value = data
        console.log("The file was read!");
    })
})


// Delete File
btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value+'.txt')
    fs.unlink(file, function(err){
        if(err) {
            return console.log(err);
        }
        fileName.value = ''
        fileContents.value = ''
        console.log("The file was deleted!");
    })    
})