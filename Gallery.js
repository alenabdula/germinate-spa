const sharp = require('sharp');
const path = require('path')
const fs = require('fs')
const INP_FOLDER = './public/img/gallery/originals';
const OUT_FOLDER = './public/img/gallery';
//
//
//
fs.promises.readdir(INP_FOLDER)
    .then(files => {
        let data = [];
        files.forEach(file => {
            let fileExt = path.parse(file).ext;
            if (fileExt === '.jpg' || fileExt === '.jpeg') {
                let filePath = path.join(INP_FOLDER, file);
                let fileName = path.parse(file).name;
                let newFileName = `${fileName}${fileExt}`;
                let outputPath = path.join(OUT_FOLDER, newFileName);
                let obj = {
                    filePath,
                    fileName,
                    fileExt,
                    newFileName,
                    outputPath
                };
                if (fs.existsSync(outputPath)) {
                    console.log(`File already exists: ${outputPath}`);
                }
                else {
                    data.push(obj);
                }
            }
        })
        gallery(data)
    })
    .catch(err => {
        console.log(err)
    })
;
//
//
//
function gallery(arr) {
    arr.forEach(item => {
        sharp(item.filePath)
            .jpeg({ mozjpeg: true })
            .toFile(item.outputPath)
            .then(info => {
                let message = {
                    name: item.newFileName,
                    width: info.width,
                    height: info.height,
                    size: info.size / 1000
                }
                console.log(message)
            })
            .catch(err => {
                console.log(err);
            })
        ;  
    })
}