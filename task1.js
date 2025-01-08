import ollama from "ollama";
const response = await ollama.chat({
    model: "llama3.2",
    messages: [{ role: "user", content: "Generate marketing emails about a shoes store" }],
});
console.log(response.message.content);