 const fs=require('fs');
 const path=require('path');


const folderName= path.join(__dirname, 'files');


function copyDir(folder) {
  const copyFolderName= path.join(__dirname, 'copyFiles');
  fs.mkdir(path.resolve(__dirname, 'copyFiles'), { recursive: true }, (err) => {
    if (err) throw err;
 });
     fs.readdir(folderName, (err, files)=>{
       if(err)throw err;
       
       for(let file of files){
             const fileName= path.join(folderName, file);
             const copyFileName= path.join(copyFolderName, file);
             fs.copyFile(fileName, copyFileName, (err)=>{
             if(err)throw err;
             
        });
      }
     });
 
}
copyDir(folderName);
