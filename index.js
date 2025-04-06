const { Client, IntentsBitField } = require("discord.js");
const axios = require("axios");
require('dotenv').config();
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
  ],
});
let saveMessage = null;
client.on("ready", async (c) => {
  const channel = client.channels.cache.get("1109911596781817959");

  setInterval(async () => {
    const resp = await axios.get("https://pixelplanet.fun/void");
    const serverTime =resp.data.toString();
    const date1=new Date(serverTime);
    const now=new Date();
    const difference=date1.getTime()-now.getTime();
    if (difference>0 && difference<=1500) {
      channel.send("void var https://pixelplanet.fun/#d,7585,-7584,-4");
    }
  }, 30000);
});
client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    return;
  }
  
  if (message.content === "void") {
    const resp = await axios.get("https://pixelplanet.fun/void");
    const serverTime =resp.data.toString();
    const date1=new Date(serverTime);
    const now=new Date();
    const difference=date1.getTime()-now.getTime();
    const second=Math.floor(difference/1000);
    const minutes=Math.floor(second/60)
    const hour=Math.floor(minutes/60)
    console.log(hour,minutes,second)
  
    if (now >date1) {
      message.reply("Void var https://pixelplanet.fun/#d,7585,-7584,-4");
    } else {
      message.reply(`kalan süre ${hour} saat ${minutes%60} dakika ${second%60} saniye`);
      
    }
   
  }
});

client.login(process.env.token);
