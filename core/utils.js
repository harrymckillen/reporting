const fs = require('fs');

/////////////////////////////
//
//     helper functions
//
/////////////////////////////

// checks if a path/file exists
function checkPathExists(path) {
  if (fs.existsSync(path)) return true;
  else return false;
}

function readFile(path) {
    let rawdata = fs.readFileSync(path);
    let jsonData = JSON.parse(rawdata);
    return jsonData;
}

function writeFile(outputName, content){
   fs.writeFile(outputName, content, 'utf8', function (err) {
      if (err)
         console.log(err);
      else
         console.log('Output File: '+ outputName +' file written.');
   });
}

module.exports.checkPathExists = checkPathExists;
module.exports.writeFile = writeFile;
module.exports.readFile = readFile;
