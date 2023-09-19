const Discord = require("discord.js");
const { hugArray } = require("../gifs");

module.exports = {
    name: "hug",
    description: "sends a hug gif",
    execute(message, args) {
        const target = message.mentions.users.first() || message.guild.members.cache.find(user => user.user.username === args[1]);
        if (target) {
            const selectedGif = Math.floor(Math.random() * (hugArray.length))
            const embed = new Discord.MessageEmbed()
                .setColor('#ffb0c5')
                .setAuthor((message.author == target) ? `do you need a hug, ${message.author}?` : `${message.author.username} hugs ${target.username}! awww how adorable`, "https://cdn.discordapp.com/emojis/692580950558638080.png")
                .setImage(hugArray[selectedGif]);
            message.channel.send(embed);
        } else { 
            return message.channel.send("you need to tag someone smh"); // IF NO ONE WAS MENTIONED
        }
    }
}