import ollama from "ollama";
import fs from "fs";
let category = process.argv[2];
let q;
let ans;
let n = Math.floor(Math.random() * 3 + 1);

async function ask_Question(q) {
  const response = await ollama.chat({
    model: "llama3.2:latest",
    messages: [{ role: "user", content: q }],
  });
  ans = response.message.content;
  fs.writeFileSync(`Answers.txt`, ans, (err) => {
    if (err) {
      throw err;
    }
  });
}
//random number base pr case chooce krega
switch (category) {
  case "Professional_Writing":
    q = `./Category/c1/q${n}.txt`;
    ask_Question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Creative_Writing":
    q = `./Category/c2/q${n}.txt`;
    ask_Question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Technical_Content":
    q = `./Category/c3/q${n}.txt`;
    ask_Question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Academic_Writing":
    q = `./Category/c4/q${n}.txt`;
    ask_Question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Marketing_Content":
    q = `./Category/c5/q${n}.txt`;
    ask_Question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
}
