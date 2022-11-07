const fs=require('fs');
    const path=require('path');
   
    
    const output1 = fs.createWriteStream(path.resolve(__dirname, 'text.txt'), {encoding:'utf-8'}); 
    
    const { stdout } = require('process');
    const readline=require('readline').createInterface({input:process.stdin,
                                                        output:process.stdout,
                                                        promt: '<'
                                                    })
                                   
     
    readline.question('Привет! Какие языки программирования ты изучил?', usertxt=>{
            
        
        process.stdin.on('keypress', (str, key) => {
            if(key.ctrl == true && key.name == 'c'){
                console.log("Удачи,юзер!");
                process.exit()
            }
            });
        
        
        if(usertxt==='exit' ){
            process.on('exit', ()=>stdout.write('Удачи!'));
            readline.close();
            process.stdin.destroy();
        }
               
        else{
            readline.on('line', function(line){
                if(line==="exit"){
                    console.log('Bay,user!'); 
                    readline.close();
                }
                else
                output1.write(`${line}`);
            })

                       
            output1.on('error', error => console.log('Error', error.message));
            
        }
       
           
    })   
