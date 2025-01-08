import fs from 'fs';

import  ollama  from 'ollama';

let que;
let n=3;
async function ask_Question(que,i) {
    const response = await ollama.chat({
        model: "llama3.2:latest",
        messages: [{ role: "user", content: que }],
    });
    let a = response.message.content;
    fs.writeFile(`./Answers/a${i}.txt`,a,(err)=>{
        if(err){
            throw err;
        }
    });
}

for(let i=1;i<=n;i++){
    que=`./Questions/q${i}.txt`;
    ask_Question(fs.readFileSync(que, 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }),i);
    
}