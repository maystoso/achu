const Discord = require("discord.js");
const { kissArray} = require("../gifs");

module.exports = {
    name: "kiss",
    description: "sends a kiss gif",
    execute(message, args){
        const target = message.mentions.users.first() || message.guild.members.cache.find(user => user.user.username === args[1]);
            if (target) {
                const selectedGif = Math.floor(Math.random() * (kissArray.length))
                const embed = new Discord.MessageEmbed()
                .setColor('#ffb0c5')
                .setAuthor( (message.author == target)  ? `here, i kith u ${message.author.username}` : `${message.author.username} kisses ${target.username} ʕ·ᴥ·ʔc`, "https://cdn.discordapp.com/emojis/694717097758163016.png?v=1" ) 
                .setImage(kissArray[selectedGif]);            
                message.channel.send(embed); 
            } else {
                return message.channel.send("you need to tag someone smh"); // IF NO ONE WAS MENTIONED
            }
    }
}