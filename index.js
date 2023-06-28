const express = require('express');


const { Configuration, OpenAIApi } = require("openai");




// const configuration = new Configuration({
//     apiKey: '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',
//   });
// const openai = new OpenAIApi(configuration);

// async function runCompletion () {
//     const completion = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{role: "user", content: "Which softwares to use in order to draw."}],
//       });
      
//       console.log(completion.data.choices[0].message);
// }
// runCompletion();

const app = express();
app.get('/savanna/:prompt', function (req, res) {
  var prompt = req.params.prompt;
  res.send('Hello World '+ prompt);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log('Server started on port ' + PORT);
})