const fs = require("fs");
const folderName = process.argv[2] || "ProjectDefault";

// fs.mkdir("Bitches", { recursive: true }, (err) => {
//   console.log(err);
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/css.js`, '');
} catch (error) {
  console.log(error);
}
