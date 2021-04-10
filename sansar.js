const express = require('express');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  } 
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "Sansar öpüldü);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();


const sansar = new Discord.Client();
sansar.login(process.env.token)
const sansar2 = new Discord.Client();
sansar2.login(process.env.token2)


sansar.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm = await data.get(msg.author.id)
        
        if (sansardm === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("j4j")    
          await sleep(4500)
          await msg.channel.send("sunucu linkinizi girin.")
          await sleep(6500)
          await msg.channel.send("Done")  
      }
      }
    }
  }
})



sansar.on("ready", () => {
      setInterval(() => {
       let kanal = sansar.channels.cache.get("830320930437857292")  
       kanal.send("j4j dm ")


      }, 10000);
})  


sansar.on("ready", () => {
      setInterval(() => {
       let kanal = sansar.channels.cache.get("830320930437857292")  
 kanal.send("j4j dm ")


      }, 10000);
}) 

 
sansar.on("ready", () => {
      setInterval(() => {
       let kanal = sansar.channels.cache.get("830320930437857292")  
 kanal.send("j4j dm ")


      }, 10000);
}) 
sansar2.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === sansar2.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let sansardm2 = await data.get(msg.author.id)
        
        if (sansardm2 === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("j4j")    
          await sleep(4500)
          await msg.channel.send("sunucu linkinizi girin.")
          await sleep(6500)
          await msg.channel.send("Done")  
      }
      }
    }
  }
})



sansar2.on("ready", () => {
      setInterval(() => {
       let kanal = sansar2.channels.cache.get("830320930437857292")  
       kanal.send("j4j dm ")


      }, 10000);
})  


sansar2.on("ready", () => {
      setInterval(() => {
       let kanal = sansar2.channels.cache.get("830320930437857292")  
 kanal.send("j4j dm ")


      }, 10000);
}) 

 
sansar2.on("ready", () => {
      setInterval(() => {
       let kanal = sansar2.channels.cache.get("830320930437857292")  
 kanal.send("j4j dm ")


      }, 10000);
}) 


 
 
 
