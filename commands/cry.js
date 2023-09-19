const Discord = require("discord.js");
const { cryArray } = require("../gifs")
module.exports = {
    name: "cry",
    description: "sends a crying gif :c",
    execute(message, args){
        const selectedGif = Math.floor(Math.random() * (cryArray.length));
        const embed = new Discord.MessageEmbed()
        .setColor("#acfce3")
        .setAuthor(`${message.author.usermame} cries :c`)
        .setImage(cryArray[selectedGif]);
        message.channel.send(embed);
    }
}