const Discord = require("discord.js");
const { slapArray } = require("../gifs");

module.exports = {
    name: "slap",
    description: "sends a slap gif",
    execute(message, args){
        const target = message.mentions.users.first() || message.guild.members.cache.find(user => user.user.username === args[1]);
            if (target) {
                const selectedGif = Math.floor(Math.random() * (slapArray.length))
                const embed = new Discord.MessageEmbed()
                .setColor('#ffb0c5')
                .setAuthor( (message.author == target)  ? `${message.author.username} is hitting themselves nuu :c` : `${message.author.username} slaps ${target.username}`, "https://cdn.discordapp.com/emojis/705168161875427399.png?v=1" ) 
                .setImage(slapArray[selectedGif]);            
                message.channel.send(embed); 
            } else {
                return message.channel.send("okay but mention someone before you end up slapping yourself"); // IF NO ONE WAS MENTIONED
            }
    }

}