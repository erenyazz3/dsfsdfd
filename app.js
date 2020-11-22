const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);
const express = require('express');
const http = require('http');
const app = express();

// 5 Minute Ping Times
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const config = require('./config.json');
const bot = new commando.Client({
     unknownCommandResponse: false,
     disableEveryone: true,
     owner: config.id,
     help: false,
     commandPrefix: config.prefix
});

const cmdsArray = [
    "dmall <message>",
    "dmrole <role> <message>"
];

bot.on("ready", () => {
    clear();
});


bot.on("error", (error) => {
    bot.login(config.token);
});

bot.registry.registerGroup('dms', 'welp');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);


function clear() {
    console.clear();
    console.log(figlet.textSync("MASS DM V3").green);
    console.log("MassDM bot for Discord, made by rarep.");
    console.log(`Created by rarep. Random send time set @ 0.01-${config.wait}s`);
    console.log(`Bot Prefix has been set to ${config.prefix}\n\n`);
    console.log(`Use at your own risk, developer has no responsibility about what you do.`);
    console.log(`Good luck.`)
}