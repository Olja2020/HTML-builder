const fs= require('fs');
const path=require('path');
const http = require ("http");

const componentsPath= path.join(__dirname, 'components');
const articlesPath= path.join(componentsPath, 'articles.html');
const footerPath= path.join(componentsPath, 'footer.html');
const headerPath= path.join(componentsPath, 'header.html');

    fs.mkdir('06-build-page/project-dist',  (err)=>{
            if(err)throw err;
    });

const folderPath= path.join(__dirname, 'styles');
 fs.readdir(folderPath, (err, files)=>{
    if(err)throw err;
     for(let file of files){
      if(path.extname(file)==".css"){
      const filePath= path.join(folderPath, file);      
       fs.readFile(filePath, (err,data)=>{
       if(err)throw err;
          fs.appendFile("06-build-page/project-dist/style.css",data, (err)=>{
            if(err)throw err;
             })     
        });
        
      }
     }   
      });
