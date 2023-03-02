const sharp = require('sharp');
const path = require('path')
const fs = require('fs')
const inputFolder = './public/img/gallery/originals';
const outputFolder = './public/img/gallery';
const widths = [240];
//
//
//
fs.promises.readdir(inputFolder)
    .then(files => {
        files.forEach(file => {
            const filePath = path.join(inputFolder, file);
            const fileName = path.parse(file).name;
            const fileExt = path.parse(file).ext;
            const outputFileName = `${fileName}${fileExt}`;
            const outputFilePath = path.join(outputFolder, outputFileName);
            if (fileExt === '.jpg' || fileExt === '.jpeg') {
                gallery(fileName, fileExt, filePath)
            }
        });
    })
    .catch(err => {
        console.log(err)
    })
;
//
//
//
function gallery(fileName, fileExt, filePath) {
    widths.forEach(width => {
        const newFileName = `${fileName}_${width}${fileExt}`;
        const outputPath = path.join(outputFolder, newFileName);
        if (fs.existsSync(outputPath)) {
            console.log(`File already exists: ${outputPath}`);
        } else {
            sharp(filePath)
                .jpeg({ mozjpeg: true })
                .resize({width: width})
                .toFile(outputPath)
                .then(info => {
                    let message = {
                        name: newFileName,
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
        }
    });
}