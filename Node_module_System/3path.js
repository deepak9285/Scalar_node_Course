const path = require("path");

let ext = path.extname(
  "C:StudyWEB Devweb minor projectsNode jslecture1Node_module_System\f1.txt"
);
let basename = path.basename(
  "C:StudyWEB Devweb minor projectsNode jslecture1Node_module_System\\f1.txt"
);
console.log(ext); // .txt//give the text in given particular path
console.log(basename);
console.log(__filename);
console.log(__dirname);
