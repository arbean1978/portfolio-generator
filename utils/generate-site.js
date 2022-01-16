const fs = require('fs');
const { file } = require('tmp');

const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
             
            resolve({
                ok: true,
                message: 'File created!'
            });
        
        });

    });
};
const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./app.js', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
module.exports = { writeFile, copyFile };