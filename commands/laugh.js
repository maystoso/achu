const Discord = require("discord.js");
const { laughArray } = require("../gifs");

module.exports = {
    
    name: "laugh",
    description: "sends a laughing gif",
    execute(message, args){
        const selectedGif = Math.floor(Math.random() * (laughArray.length));
        const embed = new Discord.MessageEmbed()
        .setColor("#fffdcc")
        .setDescription(`${message.author.username} laughs teehee`, "https://cdn.discordapp.com/emojis/703026863521660941.png?v=1")
        .setImage(laughArray[selectedGif]);
        message.channel.send(embed);
    }
}