const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "sends an embed of the list of commands",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setColor('#f5c39a')
            .setTitle("invite ♡ ྀ")
            .setURL("https://discord.com/oauth2/authorize?client_id=748737129915613295&scope=bot&permissions=8")
            .addField("**admin utilities ❖**",
            "`clear,`\t`mute,`\t`kick,`\t`ban`")
            .addField("**๑՞. emotion**",
            "`hug,`\t`kiss,`\t`pat,`\t`cry,`\t`slap,`\t`bonk,`\t`laugh`\t")
            .addField("**create ୨୧**",
            "`embed,`\t`say,`\t`greet,`\t`poll`")
            .addField("**misc!**",
            "`ping`")
            .setImage("https://media1.tenor.com/images/dc19efd1a924a69685356d894e271634/tenor.gif?itemid=16033708")
            .setFooter("made with love by kiyomi + anisol ♡")
            .setThumbnail("https://cdn.discordapp.com/attachments/706651688395604011/750916989261709392/image0.png")
            .setTimestamp("2020-08-28T12:00:00.000Z")
            message.channel.send(embed);
    }
}