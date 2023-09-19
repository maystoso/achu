const Discord = require("discord.js");

module.exports = {
    name: "info_embed",
    description: "the embed description for information in ad astra",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setColor('#ffb0e5')
            .setDescription("**RULES**\n\n⋰ ⋱\n\n**1. Be respectful** \nRespect everybody regardless of your liking towards them. \nTreat others in the way you would like to be treated yourself. \n\n**2. No offensive slurs**\nAlthough profanity is allowed, we prohibit anything offensive to any sort of group.\n\n**3. No pornographic/adult/other NSFW material**\nPlease keep it within our nsfw channels since we do have minors in the server.\n\n**4. Server Raiding**\nRaiding or mentions of raiding are not allowed.\n\n**5. Direct & Indirect Threats**\nThreats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.\n\n**6. No childish behavior**\nWe expect maturity, which means no earraping, arguing, or excessive spamming.\n\n**7. Follow the Discord Community Guidelines**\nYou can find them here: https://discordapp.com/guidelines \n\n⋱ ⋰\n\n**WARNS + PUNISHMENTS**\n\n⋰ ⋱\n\nWe use @Nadeko's warning system with each breach of the rules resulting in one warning. After three warnings, you will be automatically banned.\n\nWarnings will be cleared after a specific period of time has passed, which varies from how serious the offense is.\n\nMods may still punish users outside the warning system if they see fit. If you think you have been punished unfairly, feel free to contact one of the admins\n\n**BOOST PERKS**\n\n⋰ ⋱\n\n₊ Pic perms in #general\n₊ Custom role name + color\n₊ Hoisted above travelers\n₊ Access to command `r!permit` which temporarily grants access to pic perms for others\n\n⋱ ⋰",)
            .setImage("https://images-ext-1.discordapp.net/external/Ed8ctPAoroCxWFSLhwYgrq56JA78zFGZ8PXBVAD_jgs/https/media.discordapp.net/attachments/766316575678529567/768593057640874035/liyue_thingy_thing.png")
            message.channel.send(embed);
    }
}