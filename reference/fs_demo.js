const path = require('path');
const fs = require('fs');

// // Create Folder
// fs.mkdir(path.join(__dirname,'/test'), {}, (err) => {
//     if(err) throw err; // 두번 만들면 중복이라 에러뜸, 이렇게 간단히 에러를 가져올 수 있다니..

//     console.log('Folder created..');
// });

// // Create and Write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello World', (err) => {
//     if(err) throw err; 

//     console.log('File written created..');
// });

// // File append :: writeFile을 그냥 하면 덮어쓴다. appendFile하면 이어쓴다.
// fs.appendFile(path.join(__dirname,'/test','hello.txt'), '두번째 롸이팅', (err) => {
//     if(err) throw err; 
//     console.log('File append created..');
// });

// Read FIle
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err, data) => {

    if(err) throw err;
    console.log("ReadeFile..");
    console.log(data);
})

// Rename File
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloWorld.txt'), 
    err=>{

        console.log('File renamed...');
})