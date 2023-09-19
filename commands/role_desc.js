const Discord = require("discord.js");

module.exports = {
    name: "role_desc",
    description: "instructions on how to give yourself your own role",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setColor('#fce9b3')
            .setDescription("**❀・give yourself a custom role!  ── **\n\n⋰ ⋱\n\n type `chu role [name of role] [#hexcode]` in <#850513076817625128> \n\n⋱ ⋰",)
            .setImage("https://cdn.discordapp.com/attachments/850748887169105941/850762618725859358/ba3e849b16ad143d4725334e82b874dd.png")
            message.channel.send(embed);
    }
}