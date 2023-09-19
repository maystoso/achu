const Discord = require("discord.js");

module.exports = {
    name: "rule_embed",
    description: "the rules for my cat server",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setColor('#fce9b3')
            .setTitle("server invite!")
            .setURL("https://discord.gg/QFZnKBnfHF")
            .setDescription("**rules ୨୧**\n\n⋰ ⋱\n\n**1. be respectful**\n\n**2. no offensive slurs**\n\n**3. limit nsfw**\n\n**4. no server raiding**\n\n**5. no threats or any aggressive behavior**\n\n**6. don't be childish**\n\n⋱ ⋰",)
            .setImage("https://cdn.discordapp.com/attachments/850513076817625128/850747836781953064/5f2f8a9e70fbe3d11d262246b28ec8ad.png")
            .setThumbnail("https://cdn.discordapp.com/emojis/705158390447472670.gif?v=1")
            .setFooter("you motherfuckers better behave")
            message.channel.send(embed);
    }
}