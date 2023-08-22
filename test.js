
// const greet =(name)=>{
//     console.log(`Hello ${name}`);

// };


// console.log(greet("dire"))

// setTimeout(() => {
//     console.log("time up");
//     clearInterval(run);
// }, 5000);

// const run = setInterval(() => {
//     console.log("ran")
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// const os = require("os");

// console.log(` OS is ${os.platform()}`, ` home dir is ${os.homedir()}`);

const fs = require("fs");

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());    
// })

// console.log("last line");



// writing files

// fs.writeFile("./docs/blog1.txt", "hello world again", (err) => {
//     if(err){
//         console.log(err);
//     }
// console.log("file was written");

// });


// fs.writeFile("./docs/blog2.txt", "hello world again", (err) => {
//     if(err){    
//         console.log(err);
//     }
//     console.log("file was written");
// });


// directories
// if (!fs.existsSync('./newfolder')) {fs.mkdir("./newfolder", (err) => {

//     if(err){
//         console.log(err);

//     } console.log("folder created");
// });
// } else{
//     fs.rmdir("./newfolder", (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("folder deleted");
//     })
// }

// deleting files

// if(fs.existsSync("./docs/deleteme.txt")){
//     fs.unlink("./docs/deleteme.txt", (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted");
//     })
// }else{
//     fs.writeFile("./docs/deleteme.txt", "hello world again", (err) => {
//         if(err){    
//             console.log(err);
//         }
//         console.log("file was written");
//     });
// }