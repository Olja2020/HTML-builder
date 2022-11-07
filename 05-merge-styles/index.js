const fs=require('fs');
const path=require('path');
const folderPath= path.join(__dirname, 'styles');
 fs.readdir(folderPath, (err, files)=>{
    if(err)throw err;
     for(let file of files){
      if(path.extname(file)==".css"){
      const filePath= path.join(folderPath, file);      
       fs.readFile(filePath, (err,data)=>{
       if(err)throw err;
          fs.appendFile("05-merge-styles/project-dist/bundle.css",data, (err)=>{
            if(err)throw err;
             })     
        });
        
      }
     }   
      });
