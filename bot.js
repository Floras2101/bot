const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === 'what is my avatar') {
        message.reply(message.author.avatarURL);
    }
});
client.login('NTY4Nzg1OTA1MDA3OTg0NjQx.XLpJAw.aBGtTd2t_nE6SGQafZ2pMFHvD7s');


