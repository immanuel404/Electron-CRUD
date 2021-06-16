const fs = require('fs');
const path = require('path');
fileContents = document.getElementById('fileContents')



// READ JSON:
let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
let firststudent = JSON.parse(rawdata);
// loop through items
const list = firststudent.items.map(item => {
    return item.name
})
// display items
fileContents.value = list;



// WRITE JSON:
btnCreate.addEventListener('click', function(){

    let student = {
        name: 'Mika',
        age: 35, 
        gender: 'Female',
        department: 'English',
        car: 'Honda'
    }
    
    array = [...firststudent.items, student]
    convert = JSON.stringify(array)

    // Overwrite file
    fs.writeFileSync(path.resolve(__dirname, 'student.json'), `{ 
        "items":
        ` + convert + `
        }` );

    
    location.reload();
});



