const Discord = require('discord.js');

const client = new Discord.Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const fs = require('fs');

const prefix = 'n!'

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Made by Hanako#0007 <3", {
    type: "PLAYING"
  });
});


client.on('message', message => {

    const embed = new Discord.MessageEmbed()
    .setColor('#2f3136')
    .setDescription('[nagito being wholesome](https://www.youtube.com/watch?v=i2MpnbFs3eU) [nagito edit](https://www.youtube.com/watch?v=9l3DNgnsqWE) [nagito is hothot](https://www.youtube.com/watch?v=3to3VNhstMU)')
    
    if(message.content.toLowerCase().includes('.love')) {
        message.channel.send('you are talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique')
    } else if(message.content.toLowerCase().includes('.nagito')) {
        message.channel.send(embed)
    } else if(message.content.toLowerCase().includes('.laugh')) {
        message.channel.send('https://media.discordapp.net/attachments/793650345507160104/834231716906270750/ezgif.com-gif-maker_2.gif?width=540&height=405')
    }
});

//made by Hanako#0007 !

client.login('ODM0MjUwNDIxMjc0NDExMDI5.YH-KQA.LT6U3u9Ey3RYDruxWP2CrZVTYC4');