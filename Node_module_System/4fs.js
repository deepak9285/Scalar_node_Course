//files
const fs = require("fs");

// //reading a file
// let fileContent = fs.readFileSync("f1.txt"); //gives in buffer format
// console.log("data of file1->", "" + fileContent);
// //writing in a file
// //if a file name that is passed doesnot exist the new file will be created with its nameand the data will written on that file
// fs.writeFileSync("f2.txt", "Hello World!"); //this replace the orginal file

// // append file method
// fs.appendFileSync("f3.txt", " this is updated data");

// //delete a file
// fs.unlinkSync("f2.txt");

//Directories
//create a directory
// fs.mkdirSync("myDirectory");

//check the content inside of a directory
let folderpath =
  "C:\\Study\\WEB Dev\\web minor projects\\Node js\\lecture1\\Node_module_System\\myDirectory";
let folderContent = fs.readdirSync(folderpath);
console.log("Folder Content", folderContent);

//exists whether directory exists or not
let doesExists = fs.existsSync("myDirectory");
console.log(doesExists);

//remove directory
fs.rmdirSync("myDirectory");
console.log("File has been deleted");
