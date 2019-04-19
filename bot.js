/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '^Demare') {
    // Send "pong" to the same channel
    message.channel.send('Fapie sobie');
  }
});
client.login('NTY4Nzg1OTA1MDA3OTg0NjQx.XLojmg.EHdG2WiLNHgKXZXQvGL1dpoXK7A');
