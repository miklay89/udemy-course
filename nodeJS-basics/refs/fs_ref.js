const fs = require('fs');
const path = require('path');

// File System

// creat new folder
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('dir is created');
//     }
// });

// create new file
// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world', 
//     (err) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log('file was created');

//             // add something to file additional
//             fs.appendFile(
//                 path.join(__dirname, 'notes', 'mynotes.txt'),
//                 ' From append file',
//                 err => {
//                     if (err) throw err;
//                     console.log('file was changed');
//                 }
//             );


//             // read file

//             fs.readFile(
//                 path.join(__dirname, 'notes', 'mynotes.txt'),
//                 'utf-8',
//                 (err, data) => {
//                     if (err) throw err;
//                     console.log(data);
//                 }
//             );

//         }
//     }
// );


// file rename

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err;
        console.log('file was renamed');
    }
);

