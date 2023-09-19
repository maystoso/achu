const Discord  = require("discord.js");

  module.exports = {
    name: "embed",
    description: "user creates own embed",
    execute(message, args){
        if(!args[1] || args[1][0] != "#")
            {
                return message.channel.send("please, specify a color using hexadecimals like this `#01cca0`!");
            }
            if(!args[2])
            {
                return message.channel.send("write a message, dummy");
            }
            let embedDescription = []
            for(let i = 2; i < args.length; i++ )
            {
                embedDescription += (args[i] + " ")
            }
            const embed = new Discord.MessageEmbed().setColor(args[1]).setDescription(embedDescription)
            message.channel.send(embed);
    }
} 