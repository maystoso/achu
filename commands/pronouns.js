const Discord = require("discord.js");

module.exports = {
    name: "pronouns",
    description: "pronouns looool",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setColor('#fce9b3')
            .setDescription("**❀・pronouns  ── **\n\n⋰ ⋱\n\n<@&850751186541084674> : <:stwawbewwy:850759730678595595>\n<@&850751187539984414> : <:bwead:850759909335105556>\n<@&850751199946866718> : <:whitebear:850755866915242014>\n<@&850751200810500108> : <:omnom:850760046538260520> \n\n⋱ ⋰",)
            .setImage("https://cdn.discordapp.com/attachments/850748887169105941/850749258293706782/332a4f0d03a832118b9d321aceda8497.png")
            message.channel.send(embed);
    }
}