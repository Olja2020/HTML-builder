const fs= require('fs');
const path=require('path');

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

      const templatePath= path.join(__dirname, 'template.html');
      fs.readFile(templatePath, {encoding: "utf8"}, (err,data)=>{
          if(err)throw err;
          
      fs.readFile(footerPath, {encoding: "utf8"}, (err,data1)=>{
          if(err)throw err;

          fs.readFile(articlesPath, {encoding: "utf8"}, (err, data2)=>{
              if(err)throw err;

              fs.readFile(headerPath, {encoding: "utf8"}, (err,data3)=>{
                  if(err)throw err;
     
       const templateFile = data.replace("{{footer}}", data1).replace ("{{header}}", data3).replace("{{articles}}", data2);
       fs.writeFile('06-build-page/project-dist/index.html', templateFile, (err)=>{
           if(err)throw err;
          });	
        });
      });
  });
});
      
const assetsPath= path.join(__dirname, 'assets');
const assetsPathCopy= path.join(__dirname, 'project-dist/assets');
const fse=require('fs-extra');
fse.copy(assetsPath, assetsPathCopy, err=>{
        if(err)throw err;
      });
