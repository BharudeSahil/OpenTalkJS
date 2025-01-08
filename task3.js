import fs from 'fs';

import  ollama  from 'ollama';

let q;
let n=3;
async function ask_llm(q,i) {
    const response = await ollama.chat({
        model: "llama3.2:latest",
        messages: [{ role: "user", content: q }],
    });
    let a = response.message.content;
    fs.writeFile(`./Answers/a${i}.txt`,a,(err)=>{
        if(err){
            throw err;
        }
    });
}

for(let i=1;i<=n;i++){
    q=`./Questions/q${i}.txt`;
    ask_llm(fs.readFileSync(q, 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }),i);
    
}