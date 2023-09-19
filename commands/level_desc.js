const Discord = require("discord.js");

module.exports = {
    name: "level_desc",
    description: "description of the leveled roles",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setColor('#fce9b3')
            .setDescription("**❀・levels!  ── **\n\n⋰ ⋱\n\n <@&850776043240947742>\n<@&850776074681712691>\n<@&850776097444200489> \n\n⋱ ⋰",)
            .setImage("https://media.discordapp.net/attachments/850748887169105941/850777382628491274/8109388b644a9ebaa046877656b71bf3.png?width=505&height=167")
            .setFooter("as of now, there are no special permissions that go along leveled roles. they're simply there for vanity")
            message.channel.send(embed);
    }
}