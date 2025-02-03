import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Server....</h1>')
})
// This data is a API od jokes when youdeploy your app then you have alink to access jokes and you can use fetch to access joeks using api
app.get('/api/jokes',(req,res) => {
    const jokess = [
        {
          dam:"hope",
          id:1,
          title: "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
        },
        {
          id:2,
          title: "If doctors were like software engineers, they would say things like “Have you tried killing yourself and being reborn?"
        },
        {
          id:3,  
          title: "I would love to change the world, but they won’t give me the source code."
        },
        {
          id:4,    
          title: "There are 10 types of people in the world: those who understand binary, and those who don’t."
        },
        {
          id:5,
          title: "Debugging is like being the detective in a crime drama where you are also the murderer."
        },
        {
          id:6,  
          title: "Linux is only free if your time has no value."
        },
        {
          id:7,  
          title: "There are only two kinds of programming languages: those people always bitch about and those nobody uses."
        },
        {
          id:8,  
          title: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."
        },
        {
          id:9,  
          title: "If Java had true garbage collection, most programs would delete themselves upon execution."
        },
        {
          id:10,  
          title: "C++ : Where friends have access to your private members."
        },
        {
          id:11,  
          title: "Perl – The only language that looks the same before and after RSA encryption."
        },
        {
          id:12,  
          title: "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
        },
        {
          id:13,  
          title: "I don’t care if it works on your machine! We are not shipping your machine!"
        },
        {
          id:14,  
          title: "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems."
        },
        {
          id:15,  
          title: "A user interface is like a joke. if you have to explain it, it's not that good"
        },
        {
          id:16,  
          title: "Why did the database administrator leave his wife? She had one-to-many relationships."
        },
        {
          id:17,  
          title: "What did the array say after it  was extended? Stop objectifying me."
        },
        {
          id:18,  
          title: "Why are keyboards always working so hard? Cause they have two shifts!"
        },
    
      ];
      res.send(jokess)
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})