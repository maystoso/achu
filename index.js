const Discord = require("discord.js");
const { token, PREFIX } = require("./config.json");
const gifs = require("./gifs");
const ms = require("ms");
const fs = require("fs");
const fetch = require("node-fetch");
const { brotliCompress } = require("zlib"); 
const role_desc = require("./commands/pronouns");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on("ready", () => {
    console.log("online");
    bot.user.setActivity('|| chu help', { type: 'PLAYING' });
});

// TODO: Message when user joins // leaves

// TODO: Message when online
 
bot.on("message", message => {
    
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0].toLowerCase()){
        case "time": {
            fetch("https://api.ipgeolocation.io/timezone?apiKey=433b433f238340f3b6929448803eafb8&tz=America/Sao_Paulo")
            .then(res => {
                return res.json(); // CONVERT THE MOTHERFUCKING REQUEST TO A JSON FIRST IDIOT
            })
            .then(({time_24}) => message.channel.send("It is currently " + time_24 + " in Brazil 🇧🇷"));
            break;
        }
        // UTILITIES COMMANDS
        case "greet":
        {
            if(!args[1]) return message.channel.send("to set up a greeting message, type: chu greet #channel-name\nto change the message, type: chu greet message <message>");
            const channel = member.guild.channels.cache.find(channel => channel.name === args[1]);
            if(!channel) return message.reply("please specify a channel!");

            // DATABASE STUMFS :o
        }
        case "clear": 
        {
            bot.commands.get("clear").execute(message, args)
            break;  
        }
        case "mute":
        {
            if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("KICK_MEMBERS"))
            {
                const target = message.guild.member(message.mentions.users.first());
                if(!target) return message.reply("couldn't find that member");

                if(!args[2]) return message.reply("you didn't specify the time!");

                if(!args[3]) return message.reply("please format it like this: chu mute <person> <value> <quantity> (seconds, minutes, hours, etc)>");
               
                const time = args[2] + " " + args[3];

                let hasOverwrites = [];
                let i = 0;
                message.guild.channels.cache.forEach(channel => {
                    if (channel.permissionOverwrites.get(target.id)) hasOverwrites[i] = channel.permissionOverwrites.get(target.id)
                    switch(channel.type) {
                        case "text":
                            channel.updateOverwrite(target, {SEND_MESSAGES: false, ADD_REACTIONS: false});
                            break;
                        case "voice":
                            channel.updateOverwrite(target, {CONNECT: false});
                            break;
                        default:
                            console.log("Skipping channel of type category/news/store...");
                            break;
                    } 
                    i++; 
                })
                message.channel.send(`${target} has been muted for ${time}`)

                setTimeout (() => {
                    i = 0;
                    message.guild.channels.cache.forEach(channel => {
                        console.log(hasOverwrites[i])
                        if (channel.permissionOverwrites.get(target.id))
                        {
                            // if (hasOverwrites[i]
                            // {
                            //     if (channel.type == "voice") channel.updateOverwrite(target, {CONNECT: true})
                            //     else if (channel.type == "text") channel.updateOverwrite(target, {SEND_MESSAGES: true, ADD_REACTIONS: true})
                            // } 
                            // else channel.permissionOverwrites.get(target.id).delete()
                        }
                        i++;
                    })
                }, [ms(time)]); 

            } else return message.reply("you don't have permissions!")
            break;
        }
        case "kick": 
        {
            bot.commands.get("kick").execute(message, args)
            break;
        }
        case "ban": 
        {
            bot.commands.get("ban").execute(message, args)
            break;
        }
        case "rm":
        {
            bot.commands.get("rm").execute(message, args)
            break;
        }
        //FUN STUMFFS

        case "hug": 
        {
            bot.commands.get("hug").execute(message, args)
            break;  
        } 
        case "kiss": 
        {
            bot.commands.get("kiss").execute(message, args)
            break;
        }
        case "pat":
        {
            bot.commands.get("pat").execute(message, args)
            break;
        }
        case "bonk":
        {
            bot.commands.get("bonk").execute(message, args)
            break;
        }
        case "slap":
        {
            bot.commands.get("slap").execute(message, args)
            break;
        }
        case "cry":
        {
            bot.commands.get("cry").execute(message, args)
            break;
        }
        case "laugh":
        {
            bot.commands.get("laugh").execute(message, args)
            break;
        }
        case "fuck":
        {
            bot.commands.get("fuck").execute(message, args)
            break;
        }
        
        // SAY COMMANDS

        case "ping":
        {
            bot.commands.get("ping").execute(message, args)
            break;
        }
        case "embed": 
        {
            bot.commands.get("embed").execute(message, args)
            break;
        } 
        case "say": 
        {
            bot.commands.get("say").execute(message, args)
            break;
        }
        case "poll":
        {
            bot.commands.get("poll").execute(message, args)
            break;
        }
        case "help":
        {
            bot.commands.get("help").execute(message, args)
            break;  
        }
        case "info_embed":
            {
                bot.commands.get("info_embed").execute(message, args)
                break;
            }
        case "role": 
        {
            bot.commands.get("role").execute(message, args);
            break;
        }
        case "rule_embed":
        {
            bot.commands.get("rule_embed").execute(message, args)
            break;
        }
        case "pronouns":
        {
            bot.commands.get("pronouns").execute(message, args)
            break;
        }
        case "role_desc":
        {
            bot.commands.get("role_desc").execute(message, args)
            break;
        }
        case "level_desc":
            bot.commands.get("level_desc").execute(message, args)
            break;
        default:  return message.reply("I don't know that command!!! :c maybe you should teach meh");
    } // END OF SWITCH
})
bot.login(token);
