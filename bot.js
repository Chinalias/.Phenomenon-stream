const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 

var PrEfix = "-";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '462660314765328394') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/baktash");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});

client.login(process.env.BOT_TOKEN);
