const Discord = require("discord.js");
const { bonkArray } = require("../gifs");

module.exports = {
    name: "bonk",
    description: "sends da bonki bonk",
    execute(message, args){
        const target = message.mentions.users.first() || message.guild.members.cache.find(user => user.user.username === args[1]);
            if (target) {
                const selectedGif = Math.floor(Math.random() * (bonkArray.length))
                const embed = new Discord.MessageEmbed()
                .setColor('#ffe1c4')
                .setAuthor( (message.author == target)  ? `hehe bonk ${message.author.username}` : `${message.author.username} bonks ${target.username} huhu :>`, "https://cdn.discordapp.com/emojis/702153366364487760.png" ) 
                .setImage(bonkArray[selectedGif]);            
                message.channel.send(embed); 
            } else {
                return message.channel.send("you need to tag someone to bonkkkkk"); // IF NO ONE WAS MENTIONED
            }
    }
}