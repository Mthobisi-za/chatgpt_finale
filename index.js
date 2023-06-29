const express = require('express');
var cors = require('cors');
var responseObj = {
  "statusCode": 200,
  "data": "Coding is the process of creating instructions for a computer to follow. Here are some steps to get started with coding:\n\n1. Choose a programming language: There are many programming languages to choose from, such as Python, Java, C++, and JavaScript. Research different languages and choose one that fits your goals and interests.\n\n2. Set up your development environment: Install necessary software on your computer that allows you to write and run code. This may include a code editor or an integrated development environment (IDE) specific to your chosen programming language.\n\n3. Learn the basics: Familiarize yourself with the syntax and basic concepts of your chosen programming language. Start with beginner-friendly tutorials or online courses that teach the fundamentals.\n\n4. Practice coding: The best way to learn coding is to practice regularly. Start small by solving simple problems or writing basic programs. As you gain more knowledge and skills, tackle more complex projects.\n\n5. Join coding communities: Engage with other coders through online forums, coding communities, and social media platforms. This allows you to learn from experienced programmers, get feedback on your code, and stay updated with the latest trends and techniques.\n\n6. Debug and troubleshoot: Debugging is an essential skill in coding. When your code doesn't work as expected, use debugging tools and techniques to identify and fix errors.\n\n7. Read and understand documentation: Programming languages often have comprehensive documentation that provides detailed explanations and examples of how to use different functions and libraries. Get comfortable reading and understanding documentation to expand your coding knowledge.\n\n8. Expand your knowledge: Continuously learn and improve your coding skills by exploring new concepts, algorithms, and frameworks. Take online courses, read coding books, and stay updated with industry best practices.\n\nRemember, coding is a skill that requires practice and patience. Embrace challenges and keep coding regularly to become a proficient coder."
  }
const { Configuration, OpenAIApi } = require("openai");




const configuration = new Configuration({
    apiKey: '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',
  });
const openai = new OpenAIApi(configuration);

// async function runCompletion () {
//     const completion = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{role: "user", content: "Which softwares to use in order to draw."}],
//       });
      
//       console.log(completion.data.choices[0].message);
// }
// runCompletion();

const app = express();
app.use(cors({origin:'*'}))
app.get('/savanna/:prompt', function (req, res) {
  var prompt = req.params.prompt;
  // res.send('Hello World '+ prompt);

  async function runCompletion () {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: 'change this sentence to be polite and remove anger feelings : '+prompt}],
      });
      
      console.log(completion.data.choices);

      res.send({statusCode:200, data: completion.data.choices[0].message.content});
}
runCompletion();

// res.send({statusCode:200, data: responseObj});

})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log('Server started on port ' + PORT);
})