const fs=require('fs');
const path=require('path');
const folderName=path.join(__dirname, 'secret-folder');

fs.readdir(folderName, (err, files)=>{
    if(err)throw err;
    
    files.forEach(file=>{
      const fileName=path.join(folderName, file);  
      
    fs.stat(fileName, (err, stats)=>{
      if(err)throw err;
      if(stats.isFile()){
      console.log(path.basename(fileName, path.extname(fileName)) + " - " + path.extname(fileName) + " - " + stats.size/1000 + "kb");
      
    }    
  
    })
});
});
