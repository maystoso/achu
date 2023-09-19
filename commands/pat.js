const Discord = require("discord.js");
const { patArray } = require("../gifs");

module.exports = {
    name: "pat",
    description: "sends a pat gif",
    execute(message, args){
        const target = message.mentions.users.first() || message.guild.members.cache.find(user => user.user.username === args[1]);
            if (target) {
                const selectedGif = Math.floor(Math.random() * (patArray.length))
                const embed = new Discord.MessageEmbed()
                .setColor('#d2f0fc')
                .setAuthor( (message.author == target)  ? `pat pat ${message.author.username}` : `${message.author.username} pats you uwu ${target.username}`, "https://cdn.discordapp.com/emojis/702691041379221624.png?v=1" ) 
                .setImage(patArray[selectedGif]);            
                message.channel.send(embed); 
            } else {
                return message.channel.send("you need to tag someone smh"); // IF NO ONE WAS MENTIONED
            }
    }
}