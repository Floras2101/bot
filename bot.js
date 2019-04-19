const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '^Demare') {
    message.channel.send('Fapie sobie');
  }
});
client.login('NTY4Nzg1OTA1MDA3OTg0NjQx.XLojmg.EHdG2WiLNHgKXZXQvGL1dpoXK7A');
